import axios from "axios";

export const SET_CURRENT_USER = 'set_current_user';
export const LOGOUT_USER = 'logout_user';
export const FETCH_CHANNELS = 'fetch_channels';
export const CHANGE_CHANNEL = 'change_channel';
export const CREATE_DIRECT_CHAT = 'create_direct_chat';
export const UPDATE_ONLINE_USERS_STATUS = 'update_online_users_status';
export const FETCH_USERS = 'fetch_users';

const ROOT_URL = 'http://localhost:5000/api'

// log in a user. get back an id and active status
export function setCurrentUser(user) {

  const res = axios.post(`${ROOT_URL}/login`, {username: user});
  console.log('received from server-login: ', res.data)
  return { type: SET_CURRENT_USER, payload: res}

}

export function logoutUser(theId) {

  const res = axios.post(`${ROOT_URL}/logout`, {user_Id: theId});
  console.log('received from server-logout: ', res)
  return { type: LOGOUT_USER, payload: res}

}

// fetch current channels
export function fetchChannels() {

  const res = axios.get(`${ROOT_URL}/channels`);
  console.log('received from server-channels: ', res.data)
  return { type: FETCH_CHANNELS, payload: res}

}

export function fetchUsers() {

  const res = axios.get(`${ROOT_URL}/users`);
  console.log('received from server-users: ', res.data)
  return { type: FETCH_USERS, payload: res}

}
 
// junk drawer
// axios({
//   method: 'post',
//   url: `http://localhost:5000/api/login`,
//   data: {username: user}
// }).then(function (response) {  
//   console.log('received from server-login: ', response.data)
//   return {
//     type: SET_CURRENT_USER,
//     payload: response.data
//   }
//   })
// .catch(function (error) {console.log(error);})  

// }
// alternate request format 

//for testing only. not for normal use.
// export function setCurrentUser(user) {
  // return {
    // type: SET_CURRENT_USER,
    // payload: user 
  // }
// }