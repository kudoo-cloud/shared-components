import * as React from 'react';
import cx from 'classnames';
import { DrawerProps } from './types';
import classNames from 'classnames';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link, withRouter } from 'react-router-dom';
import URL from 'components/config/urls';
import { mobileAndTabletcheck, getFirstLetters } from 'components/helpers';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import Collapse from '@material-ui/core/Collapse';
import KudooIconImage from 'images/kudoo-icon.png';
import styles from './styles';

type State = {
  closed: boolean;
  userMoreClosed: boolean;
};

class Drawer extends React.Component<DrawerProps, State> {
  items: any;

  static defaultProps = {
    companies: [],
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
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.closed !== prevProps.closed) {
      this.setState({
        closed: this.props.closed,
      });
    }
  }

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

  _renderCompany() {
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
            }}
          >
            <div className={classes.selectedCompanyName}>{name}</div>
            <i className={rightArrowClass} />
          </div>
        )}
        <Collapse
          component="div"
          className={classes.userMoreWrapper}
          in={!userMoreClosed}
          timeout="auto"
          unmountOnExit
        >
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
              }}
            >
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
            className={classes.userMoreItem}
          >
            <div className={classes.manageCompanyBtn}>Manage Companies</div>
          </Link>
        </Collapse>
      </div>
    );
  }

  _renderItems() {
    let { classes, renderMenuItem, menuItems } = this.props;
    return menuItems.map((item, index) => {
      let dom = (
        <React.Fragment>
          <div className={classes.drawerItem} key={index}>
            <div className={classes.itemTitle}>{item.name}</div>
          </div>
        </React.Fragment>
      );
      if (renderMenuItem) {
        dom = renderMenuItem(item);
      }
      return dom;
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
          {this._renderCompany()}
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

export default withRouter(withStyles<DrawerProps>(styles)(Drawer));
