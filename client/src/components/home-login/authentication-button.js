// src/components/authentication-button.js

import React, {useEffect} from 'react';

import LoginButton from './login-button';
import LogoutButton from './logout-button';

import { useAuth0 } from '@auth0/auth0-react';

const saveUser = (user) => {
  // console.log('user hereee', user);
  // setSiteUser(prev => ({ ...prev, ...user }))

  return fetch('http://localhost:8080/api/me', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })


}

const AuthenticationButton = ({setSiteUser}) => {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      saveUser(user);
      fetch('http://localhost:8080/api/me')
        .then((res) => res.json())
        .then((res) => {
          setSiteUser(prev => ({...prev, ...res}));
        })
      console.log('isUserAuthenticated? ', isAuthenticated);
  
    }
  }, [isAuthenticated, user, setSiteUser]);

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;