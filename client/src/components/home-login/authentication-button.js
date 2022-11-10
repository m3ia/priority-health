// src/components/authentication-button.js

import React, {useEffect} from 'react';

import LoginButton from './login-button';

import { useAuth0 } from '@auth0/auth0-react';

const saveUser = (user) => {
  // console.log('user hereee', user);
  // setSiteUser(prev => ({ ...prev, ...user }))

  return fetch('/api/me', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })


}

const AuthenticationButton = () => {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      saveUser(user);
    }
  }, [isAuthenticated, user]);

  return !isAuthenticated && <LoginButton />;
};

export default AuthenticationButton;