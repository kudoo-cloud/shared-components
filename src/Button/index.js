/* @flow */

import * as React from 'react';
import type { ButtonProps } from './types';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import withStyles from 'components/withStyles';
import ErrorBoundary from 'components/ErrorBoundary';
import ButtonBase from '@material-ui/core/ButtonBase';
import utils from 'src/utility/utils';
import styles from './styles';

type State = {};

class Button extends React.Component<ButtonProps, State> {
  static propTypes = {
    isDisabled: PropTypes.bool,
    title: PropTypes.node,
    type: PropTypes.string,
    iconBefore: PropTypes.node,
    iconAfter: PropTypes.node,
    onClick: PropTypes.func,
    id: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    buttonColor: PropTypes.string,
    href: PropTypes.string,
    applyBorderRadius: PropTypes.bool,
    compactMode: PropTypes.bool,
    withoutBackground: PropTypes.bool,
    target: PropTypes.string,
    loading: PropTypes.bool,
    loadingIcon: PropTypes.node,
    classes: PropTypes.object, // will come from withStyles HOC
  };

  static defaultProps = {
    onClick: () => {},
    isDisabled: false,
    iconBefore: null,
    iconAfter: null,
    title: null,
    id: undefined,
    target: '_self',
    applyBorderRadius: false,
    compactMode: false,
    loading: false,
    loadingIcon: null,
    withoutBackground: false,
  };

  _renderAfterIcon = () => {
    let { iconAfter, classes, loading, loadingIcon } = this.props;
    let AfterIconComponent = null;
    if (loading) {
      if (loadingIcon) {
        AfterIconComponent = loadingIcon;
      } else {
        AfterIconComponent = <i className="fa fa-pulse fa-spinner" />;
      }
    } else if (iconAfter) {
      AfterIconComponent = iconAfter;
    } else {
      return null;
    }
    return (
      <div className={cx(classes.icon, classes.afterIcon)}>
        {AfterIconComponent}
      </div>
    );
  };

  _renderChildren() {
    let { iconBefore, title, classes } = this.props;
    return (
      <React.Fragment>
        {iconBefore && (
          <div className={cx(classes.icon, classes.beforeIcon)}>
            {iconBefore}
          </div>
        )}
        {title && <div className={cx(classes.text)}>{title}</div>}
        {this._renderAfterIcon()}
      </React.Fragment>
    );
  }

  _renderContainer() {
    let {
      id,
      onClick,
      isDisabled,
      type,
      href,
      classes,
      target,
      loading,
    } = this.props;

    isDisabled = isDisabled || loading;

    let buttonClass = cx(classes.component, {
      disabled: isDisabled,
    });

    if (href) {
      let isExternalUrl = utils.isExternalUrl(href);
      if (isExternalUrl) {
        // render <a> tag
        return (
          <ButtonBase
            component={'a'}
            classes={{ root: buttonClass }}
            target={target ? target : '_blank'}
            id={id}
            href={href}>
            {this._renderChildren()}
          </ButtonBase>
        );
      }
      return (
        <ButtonBase
          component={() => (
            <Link to={href} className={buttonClass} target={target} id={id}>
              {this._renderChildren()}
            </Link>
          )}
        />
      );
    }

    return (
      <ButtonBase
        component="button"
        classes={{ root: buttonClass }}
        id={id}
        type={type}
        onClick={onClick}>
        {this._renderChildren()}
      </ButtonBase>
    );
  }

  render() {
    return <ErrorBoundary>{this._renderContainer()}</ErrorBoundary>;
  }
}

export default withStyles(styles)(Button);
