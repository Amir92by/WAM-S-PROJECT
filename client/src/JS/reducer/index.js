


import { combineReducers } from "redux";
import userReducer from "./user";
import { postReducer } from "./postReducer";
import usersReducer from "./usersReducer";
const rootReducer = combineReducers({
  userReducer,
  usersReducer,
  postReducer,
});
export default rootReducer;