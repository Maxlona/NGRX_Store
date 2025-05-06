import { Injectable } from '@angular/core';
import { todo } from '../store/models';
import { Observable, of, delay } from 'rxjs';
import { HttpClient } from  '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private url = 'http://127.0.0.1:5500/src/store/sample-data.json';

  constructor(private http: HttpClient) { }

  getTodos() : Observable<todo[]> {
    return this.http.get<todo[]>(this.url);
  }

  ///// hard coded data for testing
  // getTodos(): Observable<todo[]> {
  //   // return of(
  //   //   [
  //   //     { id: 1, title: 'Learn Angular', completed: false, createdAt: new Date() },
  //   //     { id: 2, title: 'Learn TypeScript', completed: false, createdAt: new Date() },
  //   //     { id: 3, title: 'Learn Java', completed: false, createdAt: new Date() },
  //   //     { id: 4, title: 'Learn JavaScript', completed: false, createdAt: new Date() },
  //   //     { id: 5, title: 'Learn Python', completed: false, createdAt: new Date() },
  //   //     { id: 6, title: 'Learn C++', completed: false, createdAt: new Date() },
  //   //     { id: 7, title: 'Learn C#', completed: false, createdAt: new Date() },
  //   //     { id: 8, title: 'Learn PHP', completed: false, createdAt: new Date() },
  //   //     { id: 9, title: 'Learn Ruby', completed: false, createdAt: new Date() },
  //   //     { id: 10, title: 'Learn ASP MVC', completed: false, createdAt: new Date() }
  //   //   ]
  //   // ).pipe(delay(1500));
  // }

  async saveTodos(todos: todo[]) {
    localStorage.setItem('todo', todos.toString());
  }
}
