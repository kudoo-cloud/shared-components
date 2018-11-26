/* @flow */
import * as React from 'react';
import type { AlertDialogProps } from './types';
import cx from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'components/withStyles';
import ErrorBoundary from 'components/ErrorBoundary';
import styles from './styles';

type State = {
  visible: boolean,
};

class AlertDialog extends React.Component<AlertDialogProps, State> {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    visible: PropTypes.bool,
    titleColor: PropTypes.string,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func,
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        color: PropTypes.string,
        disabled: PropTypes.bool,
        style: PropTypes.object,
      })
    ),
    classes: PropTypes.object, // will come from withStyles HOC
  };

  static defaultProps = {
    buttons: [
      {
        onClick: () => {},
        label: 'Ok',
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible || false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.visible !== prevProps.visible) {
      this.setState({ visible: this.props.visible });
    }
  }

  _renderTitle = () => {
    const { title, classes } = this.props;
    if (!title) {
      return null;
    }
    return <div className={classes.title}>{title}</div>;
  };

  _renderDescription = () => {
    const { description, classes } = this.props;
    if (!description) {
      return null;
    }
    return <div className={classes.description}>{description}</div>;
  };

  _renderButtons = () => {
    const { buttons, classes } = this.props;
    return (
      <div className={classes.buttons}>
        {buttons.map((button, index) => (
          <div
            key={index}
            className={cx(classes.button, { disabled: button.disabled })}
            style={button.style || {}}
            id={button.id}
            onClick={e => {
              button.onClick && button.onClick(e);
            }}>
            {button.label}
          </div>
        ))}
      </div>
    );
  };

  render() {
    const { classes, visible } = this.props;
    return (
      <ErrorBoundary>
        <div
          className={cx(classes.component, {
            visible: visible,
            hide: !visible,
          })}>
          <div className={classes.modal}>
            {this._renderTitle()}
            {this._renderDescription()}
            {this._renderButtons()}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(AlertDialog);
