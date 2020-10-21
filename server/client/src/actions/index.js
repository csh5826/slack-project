import axios from "axios";
// import { post } from "../../../routes/login";

export const SET_CURRENT_USER = 'set_current_user';
export const LOGOUT_USER = 'logout_user';
export const FETCH_CHANNELS = 'fetch_channels';
export const CHANGE_CHANNEL = 'change_channel';
export const CREATE_DIRECT_CHAT = 'create_direct_chat';
export const UPDATE_ONLINE_USERS_STATUS = 'update_online_users_status';

// doing test case version
// export function setCurrentUser(user) {
//   console.log('user at the actions phase: ', user);

// axios({
//   method: 'post',
//   url: 'http://localhost:5000/api/login',
//   data: {username: user},
//   // headers: {'Content-Type': 'multipart/form-data' }
// }).then(function (response) {  
// // axios.post(`http://localhost:5000/api/login/`, JSON.stringify({"username" : user})).then(function (response) {
//   console.log('received from server-login: ', response.data)
//   })
// .catch(function (error) {console.log(error);})  
//   return {
//     type: SET_CURRENT_USER,
//     payload: user
//   }
// }

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user 
  }
}