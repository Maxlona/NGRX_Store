import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addTodo,
  removeTodo,
  resetTodos,
  loadTodosSuccess,
  loadTodosFailure,
} from './actions';
import { TodoService } from './service';
import { of, from, tap } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllTodos } from './selector';
import { AppState } from './state';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private todoService: TodoService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetTodos),
      switchMap(() =>
        from(this.todoService.getTodos()).pipe(
          map((todos) => loadTodosSuccess({ todos: todos })),
          catchError((error) => of(loadTodosFailure({ error })))
        )
      )
    )
  );

  saveTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTodo, removeTodo),
        withLatestFrom(this.store.select(selectAllTodos)),
        switchMap(([action, todos]) => from(this.todoService.saveTodos(todos)))
      ),
    { dispatch: false }
  );
}
