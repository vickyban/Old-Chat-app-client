import { TYPING, ADD_TYPING_USER, REMOVE_TYPING_USER, SEND, RECEIVE, REPLYING } from '../actions/messageAction';

const initialState = {
  messages: [],
  message: {},
  typingUsers: [],
  isTyping: false,
  isReplying: false
}

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case TYPING:
      return {
        ...state,
        isTyping: data
      };
    case ADD_TYPING_USER:
      return {
        ...state,
        typingUsers: [...state.typingUsers, data]
      };
    case REMOVE_TYPING_USER:
      return {
        ...state,
        typingUsers: (state.typingUsers.filter(userID => userID !== data))
      };
    case SEND:
      return {
        ...state,
        messages: [...state.messages, data],
        isTyping: false
      }
    case RECEIVE:
      return {
        ...state,
        messages: [...state.messages, data],
        typingUsers: (state.typingUsers.filter(userID => userID !== data.author))
      }
    case REPLYING:
      return {
        ...state,
        isReplying: true
      }
    default:
      return state;
  }
}