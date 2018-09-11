import React, { Component } from 'react'
import methods from '../../services/api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loggingIn } from '../../store/user/action';

class LoginForm extends Component {
  onLogin = async e => {
    e.preventDefault();
    const username = this.username.value;
    const password = this.password.value;
    if (username && password) {
      const data = { username, password };
      try {
        const response = await methods.post('/users/login', data)
        const { id, username, redirect } = await response.json();
        if (response.status === 200) {
          this.props.loggingIn({ id, username })
          this.props.history.push(redirect)
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onLogin} >
          <input ref={input => this.username = input} type="text" placeholder="Username..." required />
          <input ref={input => this.password = input} type="password" placeholder="Password..." required />
          <button type="submit" >Log in</button>
        </form>
        <a href="#">New Account</a>
      </div>
    )
  }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  loggingIn
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);