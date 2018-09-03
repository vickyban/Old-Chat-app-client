import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';

class MessageList extends Component {
  render() {
    const { messages, typingUsers } = this.props;
    return (
      <div id="chat-box">
        {messages.map(message => <Message message={message} key={message.timestamp} />)}
        {typingUsers.length > 0 && (
          <p>{typingUsers.length === 1 ? `${typingUsers[0]} is typing...` : "others are typing..."}</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.chat.messages,
  typingUsers: state.chat.typingUsers
});

export default connect(mapStateToProps)(MessageList);
