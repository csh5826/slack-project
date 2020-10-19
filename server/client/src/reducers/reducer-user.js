import { CURRENT_USER } from '../actions';

const initialState = {username : null, id: 0};

export default function (state = initialState, action) {
  console.log('in reducer-user');

  switch (action.type) {
    case CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}