import { SET_CHANNEL_ID } from '../actions';

const initialState = 101;

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_CHANNEL_ID:
      
      return action.payload;
    default:
      return state;
  }
}