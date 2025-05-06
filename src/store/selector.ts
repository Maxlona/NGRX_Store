import { createSelector } from '@ngrx/store';
import { AppState } from './state';
import { TodoState } from './reducer';

export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector
(
  selectTodos,
  (state: TodoState) => state.todos
);
