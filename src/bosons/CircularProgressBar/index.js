/* @flow */

import * as React from 'react';
import type { CircularProgressBarProps } from './types';
import PropTypes from 'prop-types';
import { Circle } from 'rc-progress';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import styles from './styles';

type State = {};

class CircularProgressBar extends React.Component<
  CircularProgressBarProps,
  State
> {
  static propTypes = {
    filledColor: PropTypes.string,
    unfilledColor: PropTypes.string,
    value: PropTypes.number,
    width: PropTypes.number,
    strokeWidth: PropTypes.number,
    lineShape: PropTypes.oneOf(['square', 'round', 'butt']),
    children: PropTypes.node,
    classes: PropTypes.object,
  };

  static defaultProps = {
    unfilledColor: '#DEDEDE',
    filledColor: '#f4a22a',
    width: 150,
    strokeWidth: 10,
    lineShape: 'square',
  };

  render() {
    const {
      classes,
      value,
      filledColor,
      unfilledColor,
      strokeWidth,
      lineShape,
      children,
    } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <Circle
            strokeWidth={strokeWidth}
            strokeColor={filledColor}
            trailColor={unfilledColor}
            trailWidth={strokeWidth}
            strokeLinecap={lineShape}
            percent={value}
          />
          {children && <div className={classes.children}>{children}</div>}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(CircularProgressBar);
