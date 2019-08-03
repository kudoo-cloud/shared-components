import * as React from 'react';
import { HeaderBarProps } from './types';
import { withRouter, matchPath } from 'react-router';
import { Link } from 'react-router-dom';
import { Portal } from 'react-portal';
import cx from 'classnames';
import idx from 'idx';
import URL from 'components/config/urls';
import withStyles from 'components/hoc/withStyles';
import Collapse from '@material-ui/core/Collapse';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import TriangleArrow from 'components/bosons/TriangleArrow';
import styles from './styles';

const HeaderBar = (props: HeaderBarProps) => {
  let { classes, headerLabel, profile, noOfCompanies } = props;
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  let componentClass = cx(classes.component);

  const _isActive = (url: string) => {
    const match = matchPath(idx(props, (_) => _.location.pathname), {
      path: url,
    });
    return Boolean(match);
  };

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
                active: _isActive(URL.CONFIGURATION()),
              })}
              to={URL.CONFIGURATION()}
            >
              <i className={cx('icon icon-settings', classes.smallBtnIcon)} />
            </Link>
          )}
          <div
            className={cx(classes.smallBtn, classes.userBtn, {
              active: isUserMenuOpen,
            })}
            id="header-bar-username"
            onClick={() => {
              setIsUserMenuOpen(!isUserMenuOpen);
            }}
          >
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
          className={classes.userMenu}
        >
          <div>
            <Link
              className={classes.userMenuItem}
              onClick={() => {
                setIsUserMenuOpen(false);
              }}
              to={URL.ACCOUNT_SETTINGS()}
            >
              <div className={classes.userMenuItemLabel}>Account Settings</div>
              <div className={classes.userMenuItemIcon}>
                <i className={cx('icon icon-user-account')} />
              </div>
            </Link>
            <div
              className={classes.userMenuItem}
              id="header-bar-logout"
              onClick={() => {
                if (props.actions) {
                  props.actions.logoutUser();
                }
                props.logout();
                props.history.replace(URL.LOGIN());
              }}
            >
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
              onClick={() => setIsUserMenuOpen(false)}
              className={classes.userMenuOverlay}
            />
          </Portal>
        )}
      </div>
    </ErrorBoundary>
  );
};

HeaderBar.defaultProps = {
  headerLabel: 'Header',
};

export default withRouter<HeaderBarProps, React.ComponentType<HeaderBarProps>>(
  withStyles<HeaderBarProps>(styles)(HeaderBar)
);
