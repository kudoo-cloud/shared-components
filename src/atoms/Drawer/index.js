/* @flow */
import * as React from 'react';
import cx from 'classnames';
import type { DrawerProps } from './types';
import classNames from 'classnames';
import { matchPath } from 'react-router';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import idx from 'idx';
import ButtonBase from '@material-ui/core/ButtonBase';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import URL from 'components/config/urls';
import { withRouterProps, withStylesProps } from 'components/config/types';
import { mobileAndTabletcheck, getFirstLetters } from '../helpers';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import Collapse from '@material-ui/core/Collapse';
import KudooIconImage from 'images/kudoo-icon.png';
// import './styles.scss';
import styles from './styles';

type State = {
  closed: boolean,
  userMoreClosed: boolean,
  menuItems: Array<any>,
};

class Drawer extends React.Component<DrawerProps, State> {
  items: any;

  static propTypes = {
    ...withStylesProps,
    ...withRouterProps,
    closed: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    selectedCompany: PropTypes.object,
    companies: PropTypes.arrayOf(PropTypes.object),
    onCompanyClick: PropTypes.func,
  };

  static defaultProps = {
    companies: [],
    selectedCompany: {},
    closed: false,
    onClose: () => {},
    onOpen: () => {},
    onCompanyClick: () => {},
  };

  constructor(props) {
    super(props);

    const isTablet = mobileAndTabletcheck();
    if (isTablet) {
      if (this.props.onClose) {
        this.props.onClose();
      }
    }

    this.state = {
      closed: isTablet,
      userMoreClosed: true,
      menuItems: [],
    };
  }

  get dashboardMenuItem() {
    return {
      icon: <i className="icon icon-dashboard" />,
      title: 'Dashboard',
      url: URL.DASHBOARD(),
    };
  }

  get projectMenuItem() {
    return {
      icon: <i className="icon icon-projects" />,
      title: 'Projects',
      url: URL.PROJECTS(),
    };
  }

  get invoicesMenuItem() {
    return {
      icon: <i className="icon icon-invoicing" />,
      title: 'Invoices',
      url: URL.INVOICES(),
    };
  }

  get timesheetMenuItem() {
    return {
      icon: <i className="icon icon-timesheets" />,
      title: 'Timesheets',
      url: URL.TIMESHEETS(),
    };
  }

  get customerMenuItem() {
    return {
      icon: <i className="icon icon-user-account" />,
      title: 'Customers',
      url: URL.CUSTOMERS(),
    };
  }

  get servicesMenuItem() {
    return {
      icon: <i className="icon icon-timesheets" />,
      title: 'Services',
      url: URL.SERVICES(),
    };
  }

  get workerMenuItem() {
    return {
      icon: <i className="icon icon-sales" />,
      title: 'Workers',
      url: URL.WORKERS(),
    };
  }

  componentDidMount() {
    this._updateMenuItems();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.closed !== prevProps.closed) {
      this.setState({
        closed: this.props.closed,
      });
    }
    if (!isEqual(this.props.selectedCompany, prevProps.selectedCompany)) {
      this._updateMenuItems();
    }
  }

  _updateMenuItems = () => {
    if (isEmpty(this.props.selectedCompany)) {
      this._setBlankMenuItem();
    } else if (get(this.props, 'selectedCompany.owner', false)) {
      this._setOwnerMenuItem();
    } else {
      this._setNormalUserMenuItem();
    }
  };

  _setOwnerMenuItem = () => {
    this.setState({
      menuItems: [
        this.dashboardMenuItem,
        this.projectMenuItem,
        this.invoicesMenuItem,
        this.timesheetMenuItem,
        this.customerMenuItem,
        this.workerMenuItem,
        this.servicesMenuItem,
      ],
    });
  };

  _setNormalUserMenuItem = () => {
    this.setState({
      menuItems: [this.dashboardMenuItem, this.timesheetMenuItem],
    });
  };

  _setBlankMenuItem = () => {
    this.setState({
      menuItems: [],
    });
  };

  closeDrawer = () => {
    this.setState({
      closed: true,
      userMoreClosed: true,
    });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  openDrawer = () => {
    this.setState({
      closed: false,
    });
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  };

  _onClickItem = (item: any, index: number) => {};

  _isActive = (url: string) => {
    const match = matchPath(idx(this.props, _ => _.location.pathname), {
      path: url,
    });
    return Boolean(match);
  };

  _renderHamburgerIcon() {
    let { classes } = this.props;
    return (
      <div className={classes.hamburgerIconWrapper} onClick={this.openDrawer}>
        <span className={classes.hamburgerIcon}>
          <i className="icon icon-hamburger" />
        </span>
      </div>
    );
  }

  _renderCloseIcon() {
    let { classes } = this.props;
    return (
      <div className={classes.closeIconWrapper}>
        <span className={classes.closeIcon} onClick={this.closeDrawer}>
          <i className="icon icon-close" />
        </span>
      </div>
    );
  }

  _renderUser() {
    let { name } = this.props.selectedCompany;
    let { classes, selectedCompany } = this.props;
    let { closed, userMoreClosed } = this.state;
    let rightArrowClass = classNames(
      'icon-chevron-right',
      classes.moreRightArrow,
      {
        down: !userMoreClosed,
      }
    );
    return (
      <div className={classes.userWrapper}>
        {closed && (
          <div className={classes.userImageWrapper}>
            <div className={classes.userInitial}>{getFirstLetters(name)}</div>
          </div>
        )}
        {!closed && (
          <div
            className={classes.usernameWrapper}
            onClick={() => {
              this.setState({ userMoreClosed: !this.state.userMoreClosed });
            }}>
            <div className={classes.selectedCompanyName}>{name}</div>
            <i className={rightArrowClass} />
          </div>
        )}
        <Collapse
          component="div"
          className={classes.userMoreWrapper}
          in={!userMoreClosed}
          timeout="auto"
          unmountOnExit>
          {this.props.companies.map((comp, index) => (
            <ButtonBase
              classes={{
                root: classNames(classes.userMoreItem, {
                  selected: comp.id === selectedCompany.id,
                }),
              }}
              style={{ width: '100%' }}
              key={index}
              onClick={() => {
                this.props.onCompanyClick(comp);
                this.setState({ userMoreClosed: true });
              }}>
              {/* <i className={cx('fa fa-gear', classes.goToCompanyIcon)} /> */}
              <div className={classes.companyName}>{comp.name}</div>
              {comp.id === selectedCompany.id && (
                <div className={classes.onlineStatus} />
              )}
            </ButtonBase>
          ))}
          <Link
            to={URL.MANAGE_COMPANIES()}
            onClick={() => {
              this.setState({ userMoreClosed: true });
            }}
            style={{ justifyContent: 'center' }}
            className={classes.userMoreItem}>
            <div className={classes.manageCompanyBtn}>Manage Companies</div>
          </Link>
        </Collapse>
      </div>
    );
  }

  _renderItems() {
    let { classes } = this.props;
    return this.state.menuItems.map((item, index) => {
      let itemClass = classNames(classes.drawerItem, {
        active: this._isActive(item.url),
      });
      return (
        <Link className={itemClass} key={index} to={item.url}>
          <div className={classes.itemIcon}>{item.icon}</div>
          <div className={classes.itemTitle}>{item.title}</div>
        </Link>
      );
    });
  }

  _renderDrawer() {
    let { closed } = this.state;
    let { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.upperPart}>
          {closed && this._renderHamburgerIcon()}
          {!closed && this._renderCloseIcon()}
          {this._renderUser()}
          {this._renderItems()}
        </div>
        <div className={classes.kudooIconWraper}>
          <img
            src={KudooIconImage}
            className={cx(classes.kudooIconImage, { closed: closed })}
          />
        </div>
      </div>
    );
  }

  render() {
    let { classes } = this.props;
    let drawerComponentClasses = classNames(classes.component, {
      closed: this.state.closed,
    });
    return (
      <ErrorBoundary>
        <div className={drawerComponentClasses}>{this._renderDrawer()}</div>
      </ErrorBoundary>
    );
  }
}

export default withRouter(withStyles(styles)(Drawer));
