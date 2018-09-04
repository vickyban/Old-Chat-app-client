import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Toggle extends Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState({ on: !this.state.on })
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children({
          on: this.state.on,
          toggle: this.state.toggle
        })}
      </div>
    )
  }
}
