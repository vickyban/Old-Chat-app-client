import React, { Component, Fragment } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SocketIoClient from 'socket.io-client';

import { updateMessages, addTypingUser, removeTypingUser } from './actions/messageAction';
import LoginPage from './features/loginPage/LoginForm'

const NEW_MESSAGE = 'NEW_MESSAGE';
const ADD_TYPING_USER = 'ADD_TYPING_USER';
const REMOVE_TYPING_USER = 'REMOVE_TYPING_USER';
let socket;

class App extends Component {
  // componentDidMount() {
  //   socket = SocketIoClient("http://localhost:4001");
  //   socket.on(NEW_MESSAGE, data => { this.props.updateMessages(data) });
  //   socket.on(ADD_TYPING_USER, userID => { this.props.addTypingUser(userID) });
  //   socket.on(REMOVE_TYPING_USER, userID => { this.props.removeTypingUser(userID) });
  // };

  // componentWillUnmount() {
  //   socket.disconnect();
  // }

  // sendMessage = message => {
  //   socket.emit(NEW_MESSAGE, message);
  // }

  // updateTypingUser = (userID, isTyping) => {
  //   const msgType = isTyping ? ADD_TYPING_USER : REMOVE_TYPING_USER;
  //   socket.emit(msgType, userID);
  // }

  render() {
    return (
      <Router>
        <Route exact path='/' component={LoginPage} />
        {/* <Route path='/channel/:user' component={ChannelPage} /> */}
      </Router>
    )
  }
}

// const mapStateToProps = state => ({
//   isLogin: state.user.isLogin
// });

// const mapDispatchToProps = dispatch => bindActionCreators({
//   updateMessages,
//   addTypingUser,
//   removeTypingUser
// }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;