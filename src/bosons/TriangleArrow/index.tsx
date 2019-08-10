/* @flow */
import * as React from 'react';
import { TriangleArrowProps } from './types';
import cx from 'classnames';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import styles from './styles';

const TriangleArrow = (props: TriangleArrowProps) => {
  let { classes, direction } = props;
  let componentClass = cx(classes.component);

  return (
    <ErrorBoundary>
      <div className={componentClass}>
        <div className={cx(classes.arrow, direction)} />
      </div>
    </ErrorBoundary>
  );
};

TriangleArrow.defaultProps = {
  direction: 'right',
};

export default withStyles<TriangleArrowProps>(styles)(TriangleArrow);
