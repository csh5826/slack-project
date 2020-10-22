import axios from "axios";

export const SET_CURRENT_USER = 'set_current_user';
export const LOGOUT_USER = 'logout_user';
export const FETCH_CHANNELS = 'fetch_channels';
export const FETCH_CHANNEL_MESSAGES = "fetch_channel_messages";
export const CHANGE_CHANNEL = 'change_channel';
export const CREATE_DIRECT_CHAT = 'create_direct_chat';
export const UPDATE_ONLINE_USERS_STATUS = 'update_online_users_status';
export const FETCH_USERS = 'fetch_users';
export const SEND_A_MESSAGE = 'send_a_message';

const ROOT_URL = 'http://localhost:5000/api'

// log in a user. get back an id and active status
export function setCurrentUser(user) {

  const res = axios.post(`${ROOT_URL}/login`, {username: user});
  console.log('received from server-login: ', res)
  return { type: SET_CURRENT_USER, payload: res}

}//

export function logoutUser(theId) {
  console.log('about to logout user', theId);
  theId = theId.toString();
  const res = axios.post(`${ROOT_URL}/logout`, {user_Id: theId});
  console.log('received from server-logout: ', res)
  return { type: LOGOUT_USER, payload: res}

}

// post a new message
export function sendMessage(user_Id, channel, message) {
user_Id = user_Id.toString();
channel = channel.toString();
  const res = axios.post(`${ROOT_URL}/channels/${channel}/messages`, {user_Id: user_Id, content: message});
  console.log('received from server-send-message ', res)
  return { type: SEND_A_MESSAGE, payload: res}

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