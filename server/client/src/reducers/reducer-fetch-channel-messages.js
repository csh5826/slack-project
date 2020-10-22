import { FETCH_CHANNEL_MESSAGES } from '../actions';

const initialState =    [];

export default function (state = initialState, action) {
  console.log('in reducer-fetch-channel-messages');
  console.log('channel message action packet', action);


  switch (action.type) {
    case FETCH_CHANNEL_MESSAGES:
      console.log("fetch Channel Messages reducer has ", action.payload.data);
      return action.payload.data;

    default:
      return state;
  }
}