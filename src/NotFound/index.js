/* @flow */
import React, { Component } from 'react';
import ErrorBoundary from 'components/ErrorBoundary';
import './index.scss';

type Props = {};
type State = {};

class NotFound extends Component<Props, State> {
  render() {
    return (
      <ErrorBoundary>
        <div className="NotFound">
          <h1>404!</h1>
          <div className="message">
            Sorry, The page you are looking for can not be found.
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
export default NotFound;
