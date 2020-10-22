import { FETCH_CHANNELS } from '../actions';


const initialState =    [];

export default function (state = initialState, action) {
  console.log('in reducer-fetch-channels');

  switch (action.type) {
    case FETCH_CHANNELS:
      console.log("fetchChannels reducer has ", action.payload.data);
      // return {channel_Id: action.payload.data.channel_Id,
      //   channelName: action.payload.data.channelName,
      //   firstUser_Id: action.payload.data.firstUser_Id,
      //   secondUser_Id: action.payload.data.secondUser_Id};
      return action.payload.data;

    default:
      return state;
  }
}