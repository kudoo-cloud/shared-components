/* @flow */
import * as React from 'react';
import type { FieldLabelProps } from './types';
import PropTypes from 'prop-types';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import styles from './styles';

type State = {};

class FieldLabel extends React.Component<FieldLabelProps, State> {
  static propTypes = {
    label: PropTypes.string.isRequired,
    labelColor: PropTypes.string,
    extraLinkWithLabel: PropTypes.string,
    onExtraLinkClicked: PropTypes.func,
    classes: PropTypes.object,
  };

  static defaultProps = {
    extraLinkWithLabel: '',
    onExtraLinkClicked: () => {},
  };

  state = {};

  render() {
    let { classes, label, extraLinkWithLabel } = this.props;

    return (
      <ErrorBoundary>
        <div className={classes.component}>
          {(Boolean(label) || Boolean(extraLinkWithLabel)) && (
            <div className={classes.wrapper}>
              {Boolean(label) && <div className={classes.label}>{label}</div>}
              {Boolean(extraLinkWithLabel) && (
                <div
                  data-test={`extra-link-with-label-${String(
                    extraLinkWithLabel
                  )}`}
                  className={classes.linkWithLabel}
                  onClick={this.props.onExtraLinkClicked}>
                  {extraLinkWithLabel}
                </div>
              )}
            </div>
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(FieldLabel);
