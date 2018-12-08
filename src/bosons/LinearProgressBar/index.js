/* @flow */

import * as React from 'react';
import type { LinearProgressBarProps } from './types';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _ from 'lodash';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from '../ErrorBoundary';
import styles from './styles';

type State = {};

class LinearProgressBar extends React.Component<LinearProgressBarProps, State> {
  static propTypes = {
    label: PropTypes.string,
    showPercentage: PropTypes.bool,
    showParts: PropTypes.bool,
    filledColor: PropTypes.string,
    unfilledColor: PropTypes.string,
    value: PropTypes.number,
    rounded: PropTypes.bool,
    width: PropTypes.number,
    classes: PropTypes.object,
  };

  static defaultProps = {
    unfilledColor: '#f5f5f5',
    filledColor: '#2bc88f',
    showParts: true,
    showPercentage: true,
    rounded: true,
    width: 200,
  };

  _renderProgressBar() {
    const { classes, showParts } = this.props;
    return (
      <div className={classes.progressBar}>
        <div className={classes.filledBar} />
        {showParts && (
          <div className={classes.parts}>
            {_.range(0, 10).map(index => (
              <div
                key={index}
                className={cx(classes.part, { hide: index === 0 })}
                style={{ left: `${index * 10}%` }}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  render() {
    const { classes, label, showPercentage, value } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          {Boolean(label) && <div className={classes.label}>{label}</div>}
          {this._renderProgressBar()}
          {showPercentage && <div className={classes.percentage}>{value}%</div>}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(LinearProgressBar);
