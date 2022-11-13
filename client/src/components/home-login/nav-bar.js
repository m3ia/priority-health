
import React from 'react';
import MainNav from './main-nav';
import AuthNav from './auth-nav';

const NavBar = ({setFoodView}) => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="nav-inner-container">
          <div className="navbar-brand logo" />
          <MainNav setFoodView={setFoodView} />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;