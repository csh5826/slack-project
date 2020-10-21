import axios from "axios";

export const SET_CURRENT_USER = 'set_current_user';
export const LOGOUT_USER = 'logout_user';
export const FETCH_CHANNELS = 'fetch_channels';
export const CHANGE_CHANNEL = 'change_channel';
export const CREATE_DIRECT_CHAT = 'create_direct_chat';
export const UPDATE_ONLINE_USERS_STATUS = 'update_online_users_status';

const ROOT_URL = 'http://localhost:5000/api'
// log in a user. get back an id and active status
export function setCurrentUser(user) {

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
  const res = axios.post(`http://localhost:5000/api/login`, {username: user});
  console.log('received from server-login: ', res.data)
  return { type: SET_CURRENT_USER, payload: res}
}
//for testing only. not for normal use.
// export function setCurrentUser(user) {
  // return {
    // type: SET_CURRENT_USER,
    // payload: user 
  // }
// }