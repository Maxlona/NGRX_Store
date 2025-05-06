import { Component } from '@angular/core';
import { todo } from '../store/models';
import { Store } from '@ngrx/store';
import { Observable,tap, filter } from 'rxjs';
import { selectAllTodos } from '../store/selector';
import { TodoState } from '../store/reducer';
import { resetTodos, addTodo, updatedTodo, removeTodo} from 'src/store/actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos$: Observable<todo[]>;

  constructor(private store: Store<{ todos: TodoState }>) {
    this.todos$ = this.store.select(selectAllTodos);
    this.store.dispatch(resetTodos());
  }


  title = 'newapp';

  todos = [
  //   {id: 1, title: 'Learn Angular', completed: false},
  //   {id: 2, title: 'Learn TypeScript', completed: false},
  //   {id: 3, title: 'Learn Java', completed: false},
  ];

  addNewTodo(todo:string){
    const newTodo = {
      id: Date.now(),
      title: todo,
      completed: false,
      createdAt: new Date(),
    };
    this.store.dispatch(addTodo({ todo: newTodo }));
  }

  toggleCompletion(todo:any){
    this.store.dispatch(updatedTodo({ todo: { ...todo, completed: true } }));
  }

  removeTodoClick(id: number){
    this.store.dispatch(removeTodo({ id: id }));
  }

  loadTodosFromStore(){
    this.store.dispatch(resetTodos());
  }
}
