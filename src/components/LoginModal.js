import React, { Component } from 'react';
import Portal from './util/Portal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loggingIn } from '../actions/userAction';

class LoginModal extends Component {

  onLogin = (e) => {
    e.preventDefault();
    const username = this.username.value;
    if (username) {
      this.props.loggingIn({ name: username });
    }
  };

  render() {
    return (
      <Portal>
        <div>
          <form onSubmit={this.onLogin} >
            <input ref={input => this.username = input} type="text" placeholder="Username..." required />
            <input ref={input => this.password = input} type="password" placeholder="Password..." />
            <button type="submit" >Log in</button>
          </form>
          <a href="#">New Account</a>
        </div>
      </Portal>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loggingIn
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
