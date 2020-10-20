import axios from "axios";

export const SET_CURRENT_USER = 'set_current_user';

export function setCurrentUser(user) {
  
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}
