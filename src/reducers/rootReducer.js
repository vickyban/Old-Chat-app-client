import { combineReducers } from 'redux';
import chat from './messageReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  chat,
  user,
});

export default rootReducer;