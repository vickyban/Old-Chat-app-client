import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import SocketIoClient from 'socket.io-client';

import { MessageList, NewRoomForm, RoomList, SendMessageForm } from './components';

let socket;

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    socket = SocketIoClient("http://localhost:4001");
    socket.on("New_Message", data => {
      dispatch({
        type: "New_Message",
        data,
      })
    });

  };

  componentWillUnmount() {
    socket.disconnect();
  }

  sendMessage = (message) => {
    socket.emit("New_Message", message);
  }

  render() {
    return (
      <div className="grid-container">
        <RoomList />
        <MessageList />
        <NewRoomForm />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
