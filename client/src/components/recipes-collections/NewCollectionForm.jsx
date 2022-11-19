import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import CollectionsSelection from "./CollectionsSelection";

const NewCollectionForm = ({siteUser}) => {
  const [collection, setCollection] = useState({
    userId: siteUser.userId,
    name: "",
    notes: "",
  });

  const navigate = useNavigate();

  const addNewCollection = async (e) => {
    e.preventDefault();

    await fetch("/api/new-collection", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collection),
    });
    // redirect users to back to recipes view
    setCollection({
      userId: siteUser.userId,
      name: "",
      notes: "",
    });
  };

  return (
    <div className="new-collection-form-container">
      <h1>Add a New Collection</h1>
      <p>HTML is OK!</p>
      <div className="new-collection-form-div">
        <div className="collection-form-input-div-container">
          <div className="collection-form-input-divs">
            <label>
              Collection Name:
              <br />
              <input
                className="collection-form-input recipe-name-input"
                type="text"
                id="add-name"
                value={collection.name}
                placeholder="Collection Name"
                onChange={(e) => {
                  setCollection((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
          <div className="collection-form-input-divs">
            <label>
              Notes: <br />
              <textarea
                className="collection-form-input collection-description-input"
                type="text"
                id="add-summary"
                value={collection.notes}
                placeholder="Notes"
                onChange={(e) => {
                  setCollection((prev) => ({
                    ...prev,
                    notes: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div
        className="form-submit-btn"
        onClick={(e) => {
          addNewCollection(e);
          navigate("/recipes");
        }}>
        {" "}
        <h3>Submit</h3>
      </div>
    </div>
  );
};

export default NewCollectionForm;
