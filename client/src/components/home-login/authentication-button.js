// src/components/authentication-button.js

import React, {useEffect} from 'react';

import LoginButton from './login-button';
import LogoutButton from './logout-button';

import { useAuth0 } from '@auth0/auth0-react';

const saveUser = (user) => {
  return fetch('http://localhost:8080/api/me', {
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

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;