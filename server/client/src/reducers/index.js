import { combineReducers } from "redux";
import UserReducer from "./reducer-user";
import FetchChannels from "./reducer-fetch-channels";
import FetchUsers from "./reducer-fetch-users";

const rootReducer = combineReducers({
  loggedInUser: UserReducer,
  availableChannels: FetchChannels,
  onlineUsers: FetchUsers
});

export default rootReducer;
