import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block login-btn"
      onClick={() => loginWithRedirect({screen_hint: "signup"})}
    >
      <span>Log In</span>
    </button>
  );
};

export default LoginButton;