import { ITodo, ActionTypes, KnownActions } from "../actions";

const initState: ITodo[] = [];

export const todosReducer = (state = initState, action: KnownActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.payload;

    case ActionTypes.DELETE_TODO:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};
