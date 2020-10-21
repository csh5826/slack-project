import axios from "axios";
// import { post } from "../../../routes/login";

export const SET_CURRENT_USER = 'set_current_user';

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