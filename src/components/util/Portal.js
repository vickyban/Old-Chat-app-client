import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

export class Portal extends Component {
  constructor() {
    super();
    this.container = document.createElement('div');
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.container);
  }

  componentWillUnmount = () => {
    portalRoot.removeChild(this.container);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.container)
  }
}

export default Portal;
