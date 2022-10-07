import { combineReducers } from "redux";
import todo from "./modules/todo";

// Store 통합관리
export default combineReducers({
  todo,
})