import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <h1>Retry Loading</h1> : children;
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};
