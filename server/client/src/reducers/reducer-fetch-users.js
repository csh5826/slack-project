import { FETCH_USERS } from '../actions';

const initialState =    [];

export default function (state = initialState, action) {
  console.log('in reducer-fetch-users');

  switch (action.type) {
    case FETCH_USERS:
      console.log("fetchUsers reducer has ", action.payload.data);
      // TODO filter out un-active users
      return action.payload.data;

    default:
      return state;
  }
}