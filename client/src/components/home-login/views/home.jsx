import React, {Fragment} from "react";
import {useNavigate} from "react-router-dom";

const Home = ({user}) => {
  const navigate = useNavigate();
  //     navigate("/recipes");

  return (
    <Fragment>
      <div className="text-center hero home-container">
        <h1>Welcome, {user.given_name}!</h1>
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
          <div className="menu-btns" onClick={() => navigate("/add-new-food")}>
            Add New Food
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
