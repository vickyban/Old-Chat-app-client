import React, { Component } from 'react';
import { connect } from 'react-redux';


class SendMessageForm extends Component {

  submitHandle = e => {
    e.preventDefault();
    const { dispatch, message, sendMessage } = this.props;
    const data = {
      ...message,
      timestamp: Date.now()
    }
    dispatch({
      type: "SEND",
      data,
    });
    sendMessage(data);
  };

  changeHandle = e => {
    const { dispatch } = this.props;
    dispatch({
      type: "TYPING",
      data: {
        text: e.target.value,
        author: this.name.value
      }
    });
  };

  render() {
    const { message } = this.props;
    return (
      <form onSubmit={this.submitHandle} id="chat-form">
        <input
          ref={input => this.name = input}
          type="text"
          placeholder="Name..." />
        <input
          onChange={this.changeHandle}
          value={message.text || ""}
          type="text"
          placeholder="Message..."
        />
        <button type="submit">Send</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  message: state.messages.message
});

export default connect(mapStateToProps)(SendMessageForm);