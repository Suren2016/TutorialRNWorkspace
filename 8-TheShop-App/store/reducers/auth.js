import { LOGIN, SIGNUP } from '../actions/auth';

const initialState = {
  token: null,
  userId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        userid: action.userId,
      };
    case SIGNUP:
      return {
        token: action.token,
        userid: action.userId,
      };
    default:
      return state;
  }
};
