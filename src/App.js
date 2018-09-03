import React, { Component } from 'react';
import './App.css';

import SocketIoClient from 'socket.io-client';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

import { MessageList, NewRoomForm, RoomList, SendMessageForm } from './components';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools()
);

class App extends Component {
  componentDidMount() {
    const socket = SocketIoClient("http://localhost:4001");
  };

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <RoomList />
          <MessageList />
          <NewRoomForm />
          <SendMessageForm />
        </div>
      </Provider>
    );
  }
}

export default App;
