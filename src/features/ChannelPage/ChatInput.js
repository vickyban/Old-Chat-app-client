import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMessages, setTypingState } from '../../actions/messageAction';



class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.stopTypingTimeout = undefined;
  }

  submitHandle = e => {
    e.preventDefault();
    const { sendMessage, updateMessages } = this.props;
    const text = this.text.value;
    if (text.length !== 0) {
      const message = {
        text,
        author: this.name.value || "anonymous",
        timestamp: Date.now()
      }
      updateMessages(message, true)
      sendMessage(message);
      this.text.value = "";

      if (this.stopTypingTimeout) {
        clearTimeout(this.stopTypingTimeout);
        this.stopTypingTimeout = undefined;
      }

    }
  };


  handleChange = (e) => {
    const { setTypingState, updateTypingUser, isTyping } = this.props;
    const { resetTypingTimeOut, name } = this;
    const text = e.target.value;
    if (text) {
      if (!isTyping) {      // start typing or resume
        setTypingState(true);
        resetTypingTimeOut();
        updateTypingUser(name.value || "anonymous", true)
      } else                // still typing
        resetTypingTimeOut();
    } else {
      if (isTyping) {        //  typed but deleted text
        setTypingState(false);
        updateTypingUser(name.value || "anonymous", false)
      }
      if (this.stopTypingTimeout) {
        clearTimeout(this.stopTypingTimeout);
        this.stopTypingTimeout = undefined;
      }
    }
  }

  resetTypingTimeOut = () => {
    const { setTypingState, updateTypingUser } = this.props;
    if (this.stopTypingTimeout)
      clearTimeout(this.stopTypingTimeout);
    this.stopTypingTimeout = setTimeout(() => {
      setTypingState(false);
      updateTypingUser(this.name.value, false)
      this.stopTypingTimeout = undefined;
    }, 3000);
  };

  render() {
    return (
      <form onSubmit={this.submitHandle} id="chat-form">
        <input
          ref={input => this.name = input}
          type="text"
          placeholder="Name..." />
        <input
          onChange={this.handleChange}
          ref={input => this.text = input}
          type="text"
          placeholder="Message..."
        />
        <button type="submit">Send</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  isTyping: state.chat.isTyping
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateMessages,
  setTypingState
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageForm);