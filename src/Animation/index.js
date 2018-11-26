/* @flow */
import React, { Component } from 'react';
import type { AnimationProps } from './types';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';
import ErrorBoundary from 'components/ErrorBoundary';
import styles from './styles';

type State = {};

class Animation extends Component<AnimationProps, State> {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
  };

  render() {
    const { classes, children } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.root}>
          {children}
          <div className={classes.gradient} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(Animation);
