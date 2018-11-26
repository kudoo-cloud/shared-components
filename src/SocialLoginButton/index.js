import React from 'react';
import PropTypes from 'prop-types';
import SocialLogin from 'react-social-login';
import './styles.scss';

const SocialLoginButton = ({ children, triggerLogin, ...props }) => (
  <button className="social-button" onClick={triggerLogin} {...props}>
    {children}
  </button>
);

SocialLoginButton.propTypes = {
  children: PropTypes.any,
  triggerLogin: PropTypes.func,
};

export default SocialLogin(SocialLoginButton);
