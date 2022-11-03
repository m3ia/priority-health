// src/components/auth-nav.js

import React from 'react';
import AuthenticationButton from './authentication-button';

const AuthNav = ({setSiteUser}) => (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton setSiteUser={setSiteUser} />
  </div>
);

export default AuthNav;