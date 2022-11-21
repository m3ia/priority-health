import React, {Fragment, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import FiveRecCards from "./FiveRecCards";
import {format} from "date-fns";

const Home = ({user, siteUser}) => {
  const [dietInfo, setDietInfo] = useState({
    userId: siteUser.userId,
    allergies: "",
    dietPref: "",
    dietRest: "",
  });

  const [editAllergies, setEditAllergies] = useState(false);
  const [entryFeeling, setEntryFeeling] = useState("");
  const [logEntry, setLogEntry] = useState({
    userId: siteUser.userId,
    feeling: entryFeeling,
    meal: "",
    notes: "",
  });
  const [logs, setLogs] = useState([]);
  const [latestFeelings, setLatestFeelings] = useState([]);

  const navigate = useNavigate();

  const convFeeling = (feeling) => {
    switch (feeling) {
      case "good":
        return "😋";
      case "ok":
        return "😐";
      case "bad":
        return "😔";
      default:
        return "";
    }
  };
  // GET for log entries
  const getLogEntries = async () => {
    await fetch(`/api/logs/${siteUser.userId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("res", res[0].feeling);
        let feelings = [];
        for (let i = 0; i < Math.min(60, res.length); i++) {
          if (res[i].feeling) {
            feelings.push(res[i].feeling);
          }
        }
        setLatestFeelings([...feelings]);
        setLogs([...res]);
      });
  };

  // POST for blog entries
  const addNewLog = async (e) => {
    e.preventDefault();
    await fetch("/api/new-log", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logEntry),
    });

    setLogEntry({
      userId: siteUser.userId,
      feeling: "",
      meal: "",
      notes: "",
    });
    getLogEntries();
  };
  // POST for updating user diet info
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
  // Allows user to submit diet info after clicking ENTER key
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
            allergies: res[0].allergies || "",
            dietPref: res[0].diet_pref || "",
            dietRest: res[0].diet_restr || "",
          });
        });
    };

    getDietInfo();
    getLogEntries();
  }, []);
  return (
    <Fragment>
      <div className="text-center hero home-container">
        <h1>Welcome, {user.given_name}!</h1>
        <div className="home-section-1">
          <div className="home-section-left">
            <div className="user-diet-info">
              <div>
                <strong>Current Allergies:</strong>{" "}
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
                <strong>Current Dietary Preferences:</strong>{" "}
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
                <strong>Current Dietary Restrictions:</strong>{" "}
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
                  <span
                    className={`check-in-btn ${
                      entryFeeling === "good" && "selectedEntry"
                    }`}
                    onClick={() => {
                      setEntryFeeling("good");
                      setLogEntry((prev) => ({
                        ...prev,
                        feeling: "good",
                      }));
                    }}>
                    😋
                  </span>
                  <span
                    className={`check-in-btn ${
                      entryFeeling === "ok" && "selectedEntry"
                    }`}
                    onClick={() => {
                      setEntryFeeling("ok");
                      setLogEntry((prev) => ({
                        ...prev,
                        feeling: "ok",
                      }));
                    }}>
                    😐
                  </span>
                  <span
                    className={`check-in-btn ${
                      entryFeeling === "bad" && "selectedEntry"
                    }`}
                    onClick={() => {
                      setEntryFeeling("bad");
                      setLogEntry((prev) => ({
                        ...prev,
                        feeling: "bad",
                      }));
                    }}>
                    😔
                  </span>
                </p>
              </div>
              <div>
                Meal:{" "}
                <input
                  type="text"
                  value={logEntry.meal}
                  onChange={(e) =>
                    setLogEntry((prev) => ({
                      ...prev,
                      meal: e.target.value,
                    }))
                  }></input>
              </div>
              <div>
                Notes:{" "}
                <textarea
                  type="text"
                  value={logEntry.notes}
                  onChange={(e) =>
                    setLogEntry((prev) => ({
                      ...prev,
                      notes: e.target.value,
                    }))
                  }></textarea>
              </div>
              <button onClick={(e) => addNewLog(e)}>submit</button>
            </div>
          </div>

          <div>
            <h2>Most Recent Recipes</h2>
            <FiveRecCards siteUser={siteUser} />
          </div>
        </div>
        <div className="home-section-3">
          <h3>Food Log</h3>
          <div className="feeling-cells-div">
            {latestFeelings &&
              latestFeelings.map((feeling, ind) => {
                return (
                  <div
                    className={`feeling-cells ${feeling}-cell`}
                    key={ind}></div>
                );
              })}
          </div>
          <div className="logs-div">
            {logs &&
              logs.map((log, ind) => {
                return (
                  <div className="diet-entry" key={ind}>
                    <p>Date: {format(new Date(log.date), "MM/dd/yyyy")}</p>
                    <p>Feeling: {convFeeling(log.feeling)}</p>

                    <p>Meal: {log.meal}</p>
                    <p>Notes: {log.notes}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
