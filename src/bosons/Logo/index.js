/* @flow */
import React, { Component } from 'react';
import ErrorBoundary from 'components/hoc/ErrorBoundary';

type Props = {};
type State = {};

class Logo extends Component<Props, State> {
  render() {
    return (
      <ErrorBoundary>
        <div className="logo">
          <a href="/">
            <img src={require('images/kudoo-log_v1.png')} alt="" />
          </a>
        </div>
      </ErrorBoundary>
    );
  }
}

export default Logo;
