import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import CollectionsSelection from "./CollectionsSelection";

const NewRecipeForm = ({
  siteUser,
  recipeCollectionsForView,
  getRecipeCollections,
}) => {
  const [collectionsData, setCollectionsData] = useState([]);
  // const [potentialCollections, setPotentialCollections] = useState([]);

  const navigate = useNavigate();

  const [newRecipe, setNewRecipe] = useState({
    userId: siteUser.userId,
    name: "",
    summary: "",
    ingredients: "",
    instructions: "",
    image: "",
    url: "",
    prep_time: "",
    cook_time: "",
    yield: 0,
    collections: [],
  });

  const addNewRecipe = async (e) => {
    e.preventDefault();

    await fetch("/api/new-recipe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });

    // getRecipes();
    setNewRecipe({
      userId: siteUser.userId,
      name: "",
      summary: "",
      ingredients: "",
      instructions: "",
      image: "",
      url: "",
      prep_time: "",
      cook_time: "",
      yield: 0,
      collections: [],
    });

    // TODO: redirect user to single recipe view
    navigate("/recipes");
  };

  useEffect(() => {
    const getCollections = () => {
      fetch("/api/collections")
        .then((res) => res.json())
        .then((res) => {
          setCollectionsData([...res]);
        });
    };
    getCollections();
  }, []);
  return (
    <div className="new-recipe-form-container">
      <h1>Add a New Recipe</h1>
      <p>HTML is OK!</p>
      <div className="new-recipe-form-div">
        <div className="recipe-form-input-div-container">
          <div className="recipe-form-input-divs">
            <label>
              Recipe Name:
              <br />
              <input
                className="recipe-form-input recipe-name-input"
                type="text"
                id="add-name"
                value={newRecipe.name}
                placeholder="Recipe Name"
                onChange={(e) => {
                  setNewRecipe((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
          <div className="recipe-form-input-divs">
            <label>
              Description: <br />
              <textarea
                className="recipe-form-input recipe-description-input"
                type="text"
                id="add-summary"
                value={newRecipe.summary}
                placeholder="Description"
                onChange={(e) => {
                  setNewRecipe((prev) => ({
                    ...prev,
                    summary: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
          <div className="recipe-form-input-divs">
            <label>
              Ingredients:
              <br />
              <textarea
                className="recipe-form-input"
                type="text"
                id="add-ingredients"
                value={newRecipe.ingredients}
                placeholder="Ingredients with HTML"
                onChange={(e) => {
                  setNewRecipe((prev) => ({
                    ...prev,
                    ingredients: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
          <div className="recipe-form-input-divs">
            <label>
              Instructions:
              <br />
              <textarea
                className="recipe-form-input"
                type="text"
                id="add-instructions"
                value={newRecipe.instructions}
                placeholder="Instructions"
                onChange={(e) => {
                  setNewRecipe((prev) => ({
                    ...prev,
                    instructions: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
          <div className="recipe-form-input-divs">
            {" "}
            <label>
              Image URL:
              <br />
              <input
                className="recipe-form-input recipe-input-image"
                type="text"
                id="add-image"
                value={newRecipe.image}
                placeholder="Image URL"
                onChange={(e) => {
                  setNewRecipe((prev) => ({
                    ...prev,
                    image: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
          <div className="recipe-form-input-divs">
            <label>
              Recipe URL:
              <br />
              <input
                className="recipe-form-input"
                type="text"
                id="add-url"
                value={newRecipe.url}
                placeholder="Recipe URL"
                onChange={(e) => {
                  setNewRecipe((prev) => ({
                    ...prev,
                    url: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
          <div className="recipe-form-input-divs">
            <label>
              Prep Time:
              <br />
              <input
                className="recipe-form-input"
                type="text"
                id="add-prep_time"
                value={newRecipe.prep_time}
                placeholder="Prep Time"
                onChange={(e) => {
                  setNewRecipe((prev) => ({
                    ...prev,
                    prep_time: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
          <div className="recipe-form-input-divs">
            <label>
              Cook Time:
              <br />
              <input
                className="recipe-form-input"
                type="text"
                id="add-cook_time"
                value={newRecipe.cook_time}
                placeholder="Cook Time"
                onChange={(e) => {
                  setNewRecipe((prev) => ({
                    ...prev,
                    cook_time: e.target.value,
                  }));
                }}
              />
            </label>
          </div>
          <div className="recipe-form-input-divs">
            Yield:
            <br />
            <input
              className="recipe-form-input"
              type="number"
              id="add-yield"
              value={newRecipe.yield}
              onChange={(e) => {
                setNewRecipe((prev) => ({
                  ...prev,
                  yield: e.target.value,
                }));
              }}
            />
          </div>
        </div>
        <div className="collections-selection">
          <CollectionsSelection
            newRecipe={newRecipe}
            collectionsData={collectionsData}
            potentialCollections={newRecipe.collections}
            setNewRecipe={setNewRecipe}
          />
        </div>
      </div>
      <div className="form-submit-btn" onClick={(e) => addNewRecipe(e)}>
        {" "}
        <h3>Submit</h3>
      </div>
    </div>
  );
};

export default NewRecipeForm;
