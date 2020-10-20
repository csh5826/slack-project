import axios from "axios";
// import { post } from "../../../routes/login";

export const SET_CURRENT_USER = 'set_current_user';

export function setCurrentUser(user) {
axios({
  method: 'post',
  url: 'http://localhost:5000/api/login',
  data: user.username,
  headers: {'Content-Type': 'multipart/form-data' }
}).then(function (response) {  
//axios.post(`http://localhost:5000/api/login/`).then(function (response) {
  console.log('received from server-login: ', response)
})
.catch(function (error) {console.log(error);})  
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}
