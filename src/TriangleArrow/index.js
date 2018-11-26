/* @flow */
import * as React from 'react';
import type { TriangleArrowProps } from './types';
import cx from 'classnames';
import withStyles from 'components/withStyles';
import ErrorBoundary from 'components/ErrorBoundary';
import styles from './styles';

type State = {};

class TriangleArrow extends React.Component<TriangleArrowProps, State> {
  static defaultProps = {
    direction: 'right',
  };

  _renderArrow = () => {
    const { direction, classes } = this.props;
    return <div className={cx(classes.arrow, direction)} />;
  };

  render() {
    let { classes } = this.props;
    let componentClass = cx(classes.component);
    return (
      <ErrorBoundary>
        <div className={componentClass}>{this._renderArrow()}</div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(TriangleArrow);
