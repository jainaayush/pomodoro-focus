import { GET_TODO_LIST } from "./../constants/actionTypes";
import TaskList from "../../helpers/data.json";

const getTodoListSuccess = (data) => {
  return {
    type: GET_TODO_LIST,
    taskList: data,
  };
};

export const getTodoList = (flag) => {
  let taskList = {};
  if (flag === "Todos") {
    taskList = TaskList.todos;
  } else if (flag === "Projects") {
    taskList = TaskList.projects;
  } else {
    taskList = TaskList.history;
  }

  return (dispatch) => {
    dispatch(getTodoListSuccess(taskList));
  };
};
