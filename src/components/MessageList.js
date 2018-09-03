import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div id="chat-box">
        {messages.map(message => <Message message={message} key={message.timestamp} />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages.messages
});

export default connect(mapStateToProps)(MessageList);
