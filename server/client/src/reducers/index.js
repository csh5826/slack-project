import { combineReducers } from "redux";
import UserReducer from "./reducer-user";
import FetchChannels from "./reducer-fetch-channels";
import FetchUsers from "./reducer-fetch-users";
import LogoutUser from "./reducer-logout";

const rootReducer = combineReducers({
  loggedInUser: UserReducer,
  availableChannels: FetchChannels,
  onlineUsers: FetchUsers,
  logoutUserStatus: LogoutUser
});

export default rootReducer;
