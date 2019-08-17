import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { ITodo } from "../actions";

export interface IStoreState {
  todos: ITodo[];
}

export const reducers = combineReducers<IStoreState>({ todos: todosReducer });
