import React, {Fragment, useEffect, useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import FiveRecCards from "./FiveRecCards";

const Home = ({user, siteUser}) => {
  const [dietInfo, setDietInfo] = useState({
    userId: siteUser.userId,
    allergies: "",
    dietPref: "",
    dietRest: "",
  });
  // const [allergies, setAllergies] = useState("");
  // const [dietPref, setDietPref] = useState("");
  // const [dietRest, setDietRest] = useState("");
  const [editAllergies, setEditAllergies] = useState(false);

  const navigate = useNavigate();
  //     navigate("/recipes");

  const updateDietInfo = async () => {
    const dietBody = {
      userId: siteUser.userId,
      allergies: dietInfo.allergies,
      dietPref: dietInfo.dietPref,
      dietRest: dietInfo.dietRest,
    };
    await fetch("/api/me", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dietBody),
    });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // setDietInfo((prev) => ({...prev, allergies: e.target.value}));
      updateDietInfo();
      // Add logic to send patch req here
      setEditAllergies(false);
    }
  };

  // Get user info
  useEffect(() => {
    const getDietInfo = async () => {
      await fetch(`/api/me`)
        .then((res) => res.json())
        .then((res) => {
          if (!res[0].allergies || !res[0].diet_pref || !res[0].diet_restr) {
            setEditAllergies(true);
          }
          setDietInfo({
            allergies: res[0].allergies,
            dietPref: res[0].diet_pref,
            dietRest: res[0].diet_restr,
          });
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
                {!editAllergies ? (
                  <span
                    className="diet-info-input"
                    onClick={() => setEditAllergies(true)}>
                    {dietInfo.allergies}
                  </span>
                ) : (
                  <input
                    type="text"
                    placeholder="Click enter to submit"
                    value={dietInfo.allergies}
                    onChange={(e) =>
                      setDietInfo((prev) => ({
                        ...prev,
                        allergies: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => handleKeyDown(e)}></input>
                )}
              </div>
              <div>
                Current Dietary Preferences:{" "}
                {!editAllergies ? (
                  <span
                    className="diet-info-input"
                    onClick={() => setEditAllergies(true)}>
                    {dietInfo.dietPref}
                  </span>
                ) : (
                  <input
                    type="text"
                    placeholder="Click enter to submit"
                    value={dietInfo.dietPref}
                    onChange={(e) =>
                      setDietInfo((prev) => ({
                        ...prev,
                        dietPref: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => handleKeyDown(e)}></input>
                )}
                {/* Current Dietary Preferences:{" "}
                {dietInfo.dietPref ? dietInfo.dietPref : <input></input>} */}
              </div>
              <div>
                Current Dietary Restrictions:{" "}
                {!editAllergies ? (
                  <span
                    className="diet-info-input"
                    onClick={() => setEditAllergies(true)}>
                    {dietInfo.dietRest}
                  </span>
                ) : (
                  <input
                    type="text"
                    placeholder="Click enter to submit"
                    value={dietInfo.dietRest}
                    onChange={(e) =>
                      setDietInfo((prev) => ({
                        ...prev,
                        dietRest: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => handleKeyDown(e)}></input>
                )}
                {/* Current Dietary Restrictions:{" "}
                {dietInfo.dietRest ? dietInfo.dietRest : <input></input>} */}
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
