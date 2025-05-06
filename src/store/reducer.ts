import { createReducer, on } from '@ngrx/store';
import { todo } from './models';
import {
  addTodo,
  removeTodo,
  resetTodos,
  loadTodosSuccess,
  loadTodosFailure,
  updatedTodo,
} from './actions';

export interface TodoState {
  todos: todo[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}
export const initialState: TodoState = {
  todos: [],
  error: null,
  status: 'pending',
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(resetTodos, (state) => ({
    ...state,
    status: 'loading' as 'loading',
  })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
    status: 'success' as 'success',
    error: null,
  })),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    status: 'error' as 'error',
    error: error,
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(
      (todo) => todo.id !== undefined && todo.id !== id
    ),
  })),
  on(updatedTodo, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
  }))
);
