import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const NewFoodForm = ({siteUser}) => {
  const [newFood, setNewFood] = useState({
    food: "",
    userId: siteUser.userId,
    status: "",
    notes: "",
  });

  const navigate = useNavigate();

  // POST for adding a new food item on submit
  const addNewFood = async (e) => {
    e.preventDefault();

    // TODO: update server with /api/new-food
    await fetch("/api/new-food", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFood),
    });
    setNewFood({
      food: "",
      userId: siteUser.userId,
      status: "",
      notes: "",
    });

    navigate("/food-list");
    navigate(0);
  };

  return (
    <div className="new-food-form-container form-container">
      <h1>Add A New Food Item</h1>
      <div className="new-food-form-div">
        <div className="food-form-input-div-container">
          <div className="food-form-input-divs">
            <label>
              Food Name:
              <br />
              <input
                required
                className="food-form-input food-name-input"
                type="text"
                id="add-name"
                value={newFood.food}
                placeholder="Food Name"
                onChange={(e) => {
                  setNewFood((prev) => ({
                    ...prev,
                    food: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
          <div className="food-form-input-divs">
            <label>
              General Tolerance Level: <br />
              <select
                className="food-form-input food-status-select"
                onChange={(e) =>
                  setNewFood((prev) => ({
                    ...prev,
                    status: e.target.value,
                  }))
                }>
                <option className="food-status-option" value="">
                  Unknown/Not sure
                </option>
                <option className="food-status-option" value="ok">
                  Always OK
                </option>
                <option className="food-status-option" value="mod">
                  Moderately OK
                </option>
                <option className="food-status-option" value="avoid">
                  Avoid
                </option>
              </select>
            </label>
          </div>
          <div className="food-form-input-divs">
            <label>
              Notes:
              <br />
              <textarea
                className="food-form-input"
                type="text"
                id="add-notes"
                value={newFood.notes}
                placeholder="Notes"
                onChange={(e) => {
                  setNewFood((prev) => ({
                    ...prev,
                    notes: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="form-submit-btn btn" onClick={(e) => addNewFood(e)}>
        {" "}
        <h3>Submit</h3>
      </div>
    </div>
  );
};

export default NewFoodForm;
