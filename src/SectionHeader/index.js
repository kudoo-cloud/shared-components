/* @flow */
import * as React from 'react';
import type { SectionHeaderProps } from './types';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';
import ErrorBoundary from 'components/ErrorBoundary';
import styles from './styles';

type State = {};

class SectionHeader extends React.Component<SectionHeaderProps, State> {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    renderLeftPart: PropTypes.func,
    classes: PropTypes.object, // comes from withStyles HOC
  };

  static defaultProps = {
    renderLeftPart: () => null,
  };

  render() {
    let { classes, title, subtitle, renderLeftPart } = this.props;
    return (
      <ErrorBoundary>
        <div className={classes.component}>
          <div className={classes.wrapper}>
            <div className={classes.titleWrapper}>
              <div className={classes.title}>{title}</div>
              {subtitle && <div className={classes.subtitle}>{subtitle}</div>}
            </div>
            {renderLeftPart && renderLeftPart()}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(SectionHeader);
