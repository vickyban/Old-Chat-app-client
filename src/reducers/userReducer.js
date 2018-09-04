import { LOG_IN, LOG_OUT } from '../actions/userAction';

const initialState = {
  isLogin: false,
  username: ""
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case LOG_IN:
      return {
        username: data,
        isLogin: true
      }
    case LOG_OUT:
      return {
        username: "",
        isLogin: false
      }
    default:
      return state;
  };
};