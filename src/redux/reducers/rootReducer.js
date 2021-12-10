import { combineReducers } from "redux";
import { getTodoReducer } from "./getTodoReducer";
const rootReducer = combineReducers({
  getTodoReducer,
});

export default rootReducer;
