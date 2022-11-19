import React, {Fragment, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import FiveRecCards from "./FiveRecCards";

const Home = ({user, siteUser}) => {
  const [allergies, setAllergies] = useState("");
  const [dietPref, setDietPref] = useState("");
  const [dietRest, setDietRest] = useState("");

  const navigate = useNavigate();
  //     navigate("/recipes");

  // Get user info
  useEffect(() => {
    const getDietInfo = async () => {
      await fetch(`/api/me`)
        .then((res) => res.json())
        .then((res) => {
          setAllergies(res[0].allergies);
          setDietPref(res[0].diet_pref);
          setDietRest(res[0].diet_restr);
        });
    };
    getDietInfo();
  }, []);
  return (
    <Fragment>
      <div className="text-center hero home-container">
        <h1>Welcome, {user.given_name}!</h1>
        <div className="home-section-1">
          <div className="home-section-left">
            <div className="user-diet-info">
              <div>
                Current Allergies:{" "}
                {allergies ? `${allergies}` : <input></input>}
              </div>
              <div>
                Current Dietary Preferences:{" "}
                {dietPref ? dietPref : <input></input>}
              </div>
              <div>
                Current Dietary Restrictions:{" "}
                {dietRest ? dietRest : <input></input>}
              </div>
            </div>
            <div className="meal-check-in-div">
              <div>
                <p className="check-in-text">How I felt since my last meal:</p>
                <p className="check-in-btns-p">
                  <span className="check-in-btn">😋</span>
                  <span className="check-in-btn">😐</span>
                  <span className="check-in-btn">😔</span>
                </p>
              </div>
              <div>
                Meal: <input></input>
              </div>
              <div>
                Notes: <textarea></textarea>
              </div>
              <button>submit</button>
            </div>
          </div>

          <div>
            <h2>Most Recent Recipes</h2>
            <FiveRecCards siteUser={siteUser} />
          </div>
        </div>

        <div className="home-section-2"></div>
        <div className="home-section-3">
          <h3>Food Log</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
