import { combineReducers } from 'redux';
import chat from './messageReducer'

const rootReducer = combineReducers({
  chat
});

export default rootReducer;