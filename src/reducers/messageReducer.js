const initialState = {
  messages: [],
  message: {}
}

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case "TYPING":
      return {
        ...state,
        message: data
      };
    case "SEND":
      return {
        ...state,
        messages: [...state.messages, data],
        message: {}
      }
    default:
      return state;
  }
}