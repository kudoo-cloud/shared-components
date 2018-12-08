/* @flow */
import * as React from 'react';
import type { ModalProps } from './types';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Portal } from 'react-portal';
import ButtonBase from '@material-ui/core/ButtonBase';
import withStyles from 'components/hoc/withStyles';
import { withStylesProps } from 'components/config/types';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import Button from 'components/bosons/Button';
import styles from './styles';

type State = {};

class Modal extends React.Component<ModalProps, State> {
  static propTypes = {
    visible: PropTypes.bool,
    overlayColor: PropTypes.string,
    onClose: PropTypes.func,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    titleColor: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.any),
    renderContent: PropTypes.func,
    showCloseButton: PropTypes.bool,
    ...withStylesProps,
  };

  static defaultProps = {
    visible: false,
    onClose: () => {},
    overlayColor: 'rgba(0,0,0,0.5)',
    buttons: [],
    title: '',
    description: '',
    showCloseButton: false,
  };

  _defaultContentRender() {
    const {
      classes,
      title,
      description,
      buttons,
      theme,
      showCloseButton,
      onClose,
    } = this.props;
    return (
      <div className={classes.content}>
        {showCloseButton && (
          <ButtonBase classes={{ root: classes.closeButton }} onClick={onClose}>
            <i className="ion ion-close" />
          </ButtonBase>
        )}
        {title && <div className={classes.title}>{title}</div>}
        {description && (
          <div className={classes.description}>{description}</div>
        )}
        {buttons &&
          buttons.length > 0 && (
            <div className={classes.buttons}>
              {buttons.map((buttonProps, index) => (
                <Button
                  key={index}
                  classes={{
                    component: cx(classes.button, {
                      cancel: buttonProps.type === 'cancel',
                    }),
                    text: cx({
                      [classes.cancelButtonText]: buttonProps.type === 'cancel',
                    }),
                  }}
                  buttonColor={theme.palette.primary.color2}
                  {...buttonProps}
                />
              ))}
            </div>
          )}
      </div>
    );
  }

  render() {
    const { classes, visible, renderContent } = this.props;
    if (!visible) {
      return null;
    }
    return (
      <ErrorBoundary>
        <Portal>
          <div className={classes.component}>
            {renderContent ? renderContent() : this._defaultContentRender()}
          </div>
        </Portal>
      </ErrorBoundary>
    );
  }
}

export default withStyles(styles)(Modal);
