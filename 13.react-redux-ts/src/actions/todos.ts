import Axios from "axios";
import { Dispatch, Action } from "redux";
import { ActionTypes } from "./types";

const url = "https://jsonplaceholder.typicode.com/todos";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IFetchTodoAction extends Action {
  type: ActionTypes.FETCH_TODOS;
  payload: ITodo[];
}

export interface IDeleteTodoAction extends Action {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await Axios.get<ITodo[]>(url);
    dispatch<IFetchTodoAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: response.data
    });
  };
};

export const deleteTodo = (id: number): IDeleteTodoAction => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id
  };
};
