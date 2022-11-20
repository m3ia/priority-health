import {NavLink} from "react-router-dom";
import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const MainNav = ({setFoodView}) => {
  const {logout} = useAuth0();

  return (
    <div className="navbar-nav mr-auto">
      <NavLink
        to="/"
        exact='true'
        className={(navData) =>
          navData.isActive ? "router-link-exact-active" : "nav-link"
        }>
        Home
      </NavLink>
      <NavLink
        to="/food-list"
        onClick={() => setFoodView("")}
        exact='true'
        className={(navData) =>
          navData.isActive ? "router-link-exact-active" : "nav-link"
        }>
        Food List
      </NavLink>
      <NavLink
        to="/add-new-recipe"
        exact='true'
        className={(navData) =>
          navData.isActive ? "router-link-exact-active" : "nav-link"
        }>
        Add A Recipe
      </NavLink>
      <NavLink
        to="/recipes"
        exact='true'
        className={(navData) =>
          navData.isActive ? "router-link-exact-active" : "nav-link"
        }>
        Recipes
      </NavLink>
      <NavLink
        to="/profile"
        exact='true'
        className={(navData) =>
          navData.isActive ? "router-link-exact-active" : "nav-link"
        }>
        Profile
      </NavLink>
      <NavLink
        exact='true'
        className={(navData) =>
          navData.isActive ? "router-link-exact-active" : "nav-link"
        }
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }>
        Log Out
      </NavLink>
    </div>
  );
};

export default MainNav;
