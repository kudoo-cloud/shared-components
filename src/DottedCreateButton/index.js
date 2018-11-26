/* @flow */
import * as React from 'react';
import type { DottedCreateButtonProps } from './types';
import cx from 'classnames';
import withStyles from 'components/withStyles';
import ErrorBoundary from 'components/ErrorBoundary';
import styles from './styles';

type State = {};

class DottedCreateButton extends React.Component<
  DottedCreateButtonProps,
  State
> {
  static defaultProps = {
    onClick: () => {},
    id: '',
  };

  _renderButton() {
    const { classes, text, icon, onClick } = this.props;
    const textClasses = cx(classes.buttonText);
    return (
      <button className={cx(classes.button)} onClick={onClick}>
        {icon ? (
          icon
        ) : (
          <i className={cx(classes.buttonIcon, 'ion-ios-plus-outline')} />
        )}
        <div className={textClasses}>{text}</div>
      </button>
    );
  }

  render() {
    let { classes, id } = this.props;
    let componentClass = cx(classes.component);
    return (
      <ErrorBoundary>
        <div className={componentClass} id={id}>
          {this._renderButton()}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(DottedCreateButton);
