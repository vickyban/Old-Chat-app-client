import React from 'react'

const Message = ({ message: { author, text, timestamp } }) => (
  <div className="message" >
    <p>{`${author} at ${(new Date(timestamp)).toLocaleTimeString()}`}</p>
    <p>{text}</p>
  </div>
);

export default Message;