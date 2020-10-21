import { combineReducers } from "redux";
import UserReducer from "./reducer-user";

const rootReducer = combineReducers({
  loggedInUser: UserReducer,

});

export default rootReducer;
