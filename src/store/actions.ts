import { createAction, props } from '@ngrx/store';
import { todo } from './models';


export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ todo: todo }>()
);
export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: number }>()
);
export const updatedTodo = createAction(
  '[Todo Page] Update Todo',
  props<{ todo: todo }>()
);

export const resetTodos = createAction(
  '[Todo Page] Load Todos'
);

export const loadTodosSuccess = createAction(
  '[Todo API] Todo Load Success',
  props<{ todos: todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo API] Todo Load Failure',
  props<{ error: string }>()
);
