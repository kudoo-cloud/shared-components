/* @flow */
import * as React from 'react';
import type { HeaderBarProps } from './types';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router';
import { Link } from 'react-router-dom';
import { Portal } from 'react-portal';
import cx from 'classnames';
import idx from 'idx';
import URL from '../config/urls';
import withStyles from 'components/withStyles';
import Collapse from '@material-ui/core/Collapse';
import ErrorBoundary from 'components/ErrorBoundary';
import TriangleArrow from 'components/TriangleArrow';
import { withRouterProps } from '../config/types';
import styles from './styles';

type State = {
  isUserMenuOpen: boolean,
};

class HeaderBar extends React.Component<HeaderBarProps, State> {
  static propTypes = {
    actions: PropTypes.object, // will come from parent
    classes: PropTypes.object, // will come from withStyles HOC
    headerLabel: PropTypes.string,
    logout: PropTypes.func,
    profile: PropTypes.object,
    noOfCompanies: PropTypes.number,
    ...withRouterProps,
  };

  static defaultProps = {
    headerLabel: 'Header',
  };

  constructor(props) {
    super(props);
    this.state = {
      isUserMenuOpen: false,
    };
  }

  _isActive = (url: string) => {
    const match = matchPath(idx(this.props, _ => _.location.pathname), {
      path: url,
    });
    return Boolean(match);
  };

  render() {
    let { classes, headerLabel, profile, noOfCompanies } = this.props;
    const { isUserMenuOpen } = this.state;
    let componentClass = cx(classes.component);
    return (
      <ErrorBoundary>
        <div className={componentClass}>
          <div className={classes.headerLeft}>
            <div className={cx(classes.headerLabel)}>{headerLabel}</div>
          </div>
          <div className={classes.headerRight}>
            {noOfCompanies > 0 && (
              <Link
                className={cx(classes.smallBtn, {
                  active: this._isActive(URL.CONFIGURATION()),
                })}
                to={URL.CONFIGURATION()}>
                <i className={cx('icon icon-settings', classes.smallBtnIcon)} />
              </Link>
            )}
            <div
              className={cx(classes.smallBtn, classes.userBtn, {
                active: isUserMenuOpen,
              })}
              id="header-bar-username"
              onClick={() => {
                this.setState({ isUserMenuOpen: !isUserMenuOpen });
              }}>
              <div className={classes.userName}>
                {profile.firstName} {profile.lastName}
              </div>
              <TriangleArrow direction={isUserMenuOpen && 'down'} />
            </div>
          </div>

          <Collapse
            in={isUserMenuOpen}
            timeout="auto"
            unmountOnExit
            className={classes.userMenu}>
            <div>
              <Link
                className={classes.userMenuItem}
                onClick={() => {
                  this.setState({ isUserMenuOpen: false });
                }}
                to={URL.ACCOUNT_SETTINGS()}>
                <div className={classes.userMenuItemLabel}>
                  Account Settings
                </div>
                <div className={classes.userMenuItemIcon}>
                  <i className={cx('icon icon-user-account')} />
                </div>
              </Link>
              <div
                className={classes.userMenuItem}
                id="header-bar-logout"
                onClick={() => {
                  if (this.props.actions) {
                    this.props.actions.logoutUser();
                  }
                  this.props.logout();
                  this.props.history.replace(URL.LOGIN());
                }}>
                <div className={classes.userMenuItemLabel}>Logout</div>
                <div className={classes.userMenuItemIcon}>
                  <i className={cx('icon icon-logout')} />
                </div>
              </div>
            </div>
          </Collapse>

          {isUserMenuOpen && (
            <Portal>
              <div
                onClick={() => this.setState({ isUserMenuOpen: false })}
                className={classes.userMenuOverlay}
              />
            </Portal>
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

export default withRouter(withStyles(styles)(HeaderBar));
