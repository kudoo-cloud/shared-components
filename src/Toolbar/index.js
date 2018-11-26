import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ErrorBoundary from 'components/ErrorBoundary';
import './index.scss';

type Props = {
  location: Object,
};

type State = {};

class Toolbar extends Component<Props, State> {
  static propTypes = {
    location: PropTypes.object,
  };

  constructor() {
    super();
    const isMenuVisible = window.innerWidth > 767;
    this.state = {
      isMenuVisible: isMenuVisible,
    };
  }

  render() {
    const location = this.props.location.pathname;
    const { isMenuVisible } = this.state;
    return (
      <ErrorBoundary>
        <header>
          <div className="container">
            <div className="header clearfix">
              <div className="logo">
                <Link to="/">
                  <img src={require('images/kudoo-log_v1.png')} alt="" />
                </Link>
              </div>
              <div className="nav clearfix">
                <div className="menus">
                  <div
                    className="mobile_nav"
                    onClick={() =>
                      this.setState({ isMenuVisible: !isMenuVisible })
                    }>
                    <a href="#">
                      <i className="fa fa-bars" aria-hidden="true">
                        {' '}
                      </i>
                    </a>
                  </div>
                  <ul
                    style={
                      isMenuVisible ? { display: 'block' } : { display: 'none' }
                    }>
                    <li
                      className={
                        location.includes('/features') ? 'active' : ''
                      }>
                      <Link to="/features/">Features</Link>
                    </li>
                    <li
                      className={
                        location.includes('/partners') ? 'active' : ''
                      }>
                      <Link to="/partners/">Partners</Link>
                    </li>
                    <li
                      className={location.includes('/contact') ? 'active' : ''}>
                      <Link to="/contact/">Contact</Link>
                    </li>
                    <li
                      className={location.includes('/support') ? 'active' : ''}>
                      <Link to="/support/">Support</Link>
                    </li>
                    <li className="parter_menu">
                      <Link to="/login/">Login</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </ErrorBoundary>
    );
  }
}

export default withRouter(Toolbar);
