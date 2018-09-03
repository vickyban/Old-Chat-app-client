export const TYPING = 'TYPING';
export const ADD_TYPING_USER = 'ADD_TYPING_USER';
export const REMOVE_TYPING_USER = 'REMOVE_TYPING_USER';
export const SEND = 'SEND';
export const RECEIVE = 'RECEIVE';
export const REPLYING = 'REPLYING';
export const CONSTANTS = {
  TYPING,
  ADD_TYPING_USER,
  REMOVE_TYPING_USER,
  SEND,
  RECEIVE,
  REPLYING
};

export const setTypingState = isTyping => ({
  type: TYPING,
  data: isTyping
});

export const updateMessages = (message, isYours = false) => ({
  type: (isYours ? SEND : RECEIVE),
  data: message
});

export const addTypingUser = userID => ({
  type: ADD_TYPING_USER,
  data: userID
})

export const removeTypingUser = userID => ({
  type: REMOVE_TYPING_USER,
  data: userID
})
