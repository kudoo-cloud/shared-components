import React from 'react';
import PropTypes from 'prop-types';
import SocialLogin from 'react-social-login';

const SocialLoginButton = ({ children, triggerLogin, ...props }) => (
  <button
    style={{
      backgroundColor: 'transparent',
      cursor: 'pointer',
      border: '0px solid',
      outline: 'none',
    }}
    onClick={triggerLogin}
    {...props}>
    {children}
  </button>
);

SocialLoginButton.propTypes = {
  children: PropTypes.any,
  triggerLogin: PropTypes.func,
};

export default SocialLogin(SocialLoginButton);
