import { GET_TODO_LIST } from "./../constants/actionTypes";

const INITIAL_STATE = {
  taskList: [],
};

export const getTodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        taskList: action.taskList,
      };
    default:
      return state;
  }
};
