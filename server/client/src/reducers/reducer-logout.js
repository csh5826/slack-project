import { LOGOUT_USER } from '../actions';

const initialState = {user_Id: null};

export default function (state = initialState, action) {
  console.log('in reducer-user');

  switch (action.type) {
    case LOGOUT_USER:
      console.log("logoutUser reducer has ", action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}