
import React, { Component } from 'react';
import ErrorBoundary from 'components/hoc/ErrorBoundary';

type Props = {};
type State = {};

class NotFound extends Component<Props, State> {
  render() {
    return (
      <ErrorBoundary>
        <div className="NotFound">
          <h1
            style={{
              width: '100%',
              background: '#44ce9c',
              color: 'white',
              textAlign: 'center',
            }}>
            404!
          </h1>
          <div
            className="message"
            style={{
              minHeight: '60vh',
              textAlign: 'center',
              paddingTop: '35vh',
              fontSize: '45px',
            }}>
            Sorry, The page you are looking for can not be found.
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
export default NotFound;
