import { SEND_MESSAGE } from '../actions';

const initialState = {message_Id : 0, channel_Id: 0, user_Id: 0, content: ''};

export default function (state = initialState, action) {
  console.log('in reducer-send-message');

  switch (action.type) {
    case SEND_MESSAGE:
      console.log("send message reducer has ", action.payload.data);
      // return {
      //   message_Id: action.payload.data.message_Id, 
      //   channel_Id: action.payload.data.channel_Id,
      //   user_Id: action.payload.data.user_Id, 
      //   content: action.payload.data.content}
      return action.payload.data;
    default:
      return state;
  }
}