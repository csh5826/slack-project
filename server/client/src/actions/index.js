import axios from "axios";

export const SET_CURRENT_USER = 'set_current_user';

export function setCurrentUser(user) {
axios.post(`http://localhost:5000/login/`).then(function (response) {
  console.log('received from server-login: ', response.data)
})
.catch(function (error) {console.log(error);})  
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}
