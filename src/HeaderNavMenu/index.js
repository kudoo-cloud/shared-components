/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from 'components/ErrorBoundary';
import Button from 'components/Button';

type Props = {
  location: Object,
};
type State = {};

class HeaderNavMenu extends Component<Props, State> {
  static propTypes = {
    location: PropTypes.object,
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="kudoo-app">
          <div className="menus">
            <div className="mobile_nav">
              <a href="#">
                <i className="fa fa-bars" aria-hidden="true">
                  {' '}
                </i>
              </a>
            </div>
            <ul>
              <li className="parter_menu">
                <Button
                  title="Login"
                  href={'https://app.kudoo.io/#/login'}
                  applyBorderRadius
                  width="150px"
                />
              </li>
              <li className="parter_menu">
                <Button
                  title="Signup"
                  href={'https://app.kudoo.io/#/login'}
                  applyBorderRadius
                  width="150px"
                />
              </li>
            </ul>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default HeaderNavMenu;
