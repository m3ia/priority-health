import React, {Fragment} from "react";
import {useNavigate} from "react-router-dom";
import FiveRecCards from "./FiveRecCards";

const Home = ({user, siteUser}) => {
  const navigate = useNavigate();
  //     navigate("/recipes");

  return (
    <Fragment>
      <div className="text-center hero home-container">
        <h1>Welcome, {user.given_name}!</h1>
        <div className="home-section-1">
          <div className="home-menu-btns">
            <div className="menu-btns" onClick={() => navigate("/food-list")}>
              Food Tolerance List
            </div>
            <div className="menu-btns" onClick={() => navigate("/recipes")}>
              View Recipes and Collections
            </div>
            <div
              className="menu-btns"
              onClick={() => navigate("/add-new-recipe")}>
              Add A Recipe
            </div>
            <div
              className="menu-btns"
              onClick={() => navigate("/add-new-food")}>
              Add New Food
            </div>
          </div>
          <div>
            <FiveRecCards siteUser={siteUser} />
          </div>
        </div>
        <div className="home-section-2">
          <div>
            Current Allergies: <input></input>
          </div>
          <div>
            Current Dietary Preferences: <input></input>
          </div>
          <div>
            Current Dietary Restrictions: <input></input>
          </div>
        </div>
        <div className="home-section-3">
          <h3>Food Log</h3>
          <div className="meal-check-in-div">
            <span className="check-in-text">
              How I felt since my last meal:
            </span>
            <span className="check-in-btn">😋</span>
            <span className="check-in-btn">😐</span>
            <span className="check-in-btn">😔</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
