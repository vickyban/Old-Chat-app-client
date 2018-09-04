export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const constants = {
  LOG_IN,
  LOG_OUT
};

export const loggingIn = user => ({
  type: LOG_IN,
  data: user.name
})