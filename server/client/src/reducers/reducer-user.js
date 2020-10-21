import { SET_CURRENT_USER } from '../actions';

const initialState = {username : 'PleaseLogIn', id: null};

export default function (state = initialState, action) {
  console.log('in reducer-user');

  switch (action.type) {
    case SET_CURRENT_USER:
      console.log("setCurrentUser reducer has ", action.payload.data);
      // console.log('and will send', {username: action.payload, id: null} )
      // console.log('and will send', {username: action.payload} )
      return {name: action.payload.data.name, 
        user_Id: action.payload.data.user_Id, 
        active: action.payload.data.active}
      // return action.payload;
    default:
      return state;
  }
}