/* @flow */

import React, { Component } from 'react';
import withStyles from 'components/withStyles';
import styles from './styles';

type Props = {
  children: Object | any,
  classes: Object,
};
type State = {
  hasError: boolean,
};

class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error, info: Object) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    const { classes } = this.props;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={classes.component}>
          <h1 className={classes.message}>Something went wrong.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}
export default withStyles(styles)(ErrorBoundary);
