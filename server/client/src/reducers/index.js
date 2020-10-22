import { combineReducers } from "redux";
import UserReducer from "./reducer-user";
import FetchChannels from "./reducer-fetch-channels";

const rootReducer = combineReducers({
  loggedInUser: UserReducer,
  availableChannels: FetchChannels,
});

export default rootReducer;
