import { NavLink } from "react-router-dom";
import React from "react";
import { useAuth0 } from '@auth0/auth0-react';


const MainNav = ({setFoodView}) => {
  const { logout } = useAuth0();

  return (
    <div className="navbar-nav mr-auto">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
      </NavLink>
      <NavLink
        to="/food-list"
        onClick={() => setFoodView("")}
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Food List
      </NavLink>
      <NavLink
        to="/add-new-recipe"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Add A Recipe
      </NavLink>
      <NavLink
        to="/recipes"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Recipes
      </NavLink>
      <NavLink
        to="/profile"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Profile
      </NavLink>
      <NavLink
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
        onClick={() => 
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log Out
      </NavLink>
    </div>);
};

export default MainNav;
