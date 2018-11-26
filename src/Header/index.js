/* @flow */
import React, { Component } from 'react';
import Logo from 'components/Logo/Logo';
import HeaderNavMenu from 'components/HeaderNavMenu/HeaderNavMenu';
import ErrorBoundary from 'components/ErrorBoundary';
import './index.scss';

type Props = {};
type State = {};

class Header extends Component<any, State> {
  render() {
    return (
      <ErrorBoundary>
        <header>
          <div className="fluid-container">
            <div className="header clearfix">
              <Logo {...this.props} />
              <div className="nav clearfix">
                <HeaderNavMenu {...this.props} />
              </div>
            </div>
          </div>
        </header>
      </ErrorBoundary>
    );
  }
}
export default Header;
