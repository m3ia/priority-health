import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import CollectionsSelection from "./CollectionsSelection";

// Checks if all required inputs are filled out
export const validateRecipeForm = (recipe) => {
  if (!recipe.name) {
    alert("A recipe requires a name!");
    return false;
  } else if (!recipe.ingredients) {
    alert("A recipe requires ingredients!");
    return false;
  } else if (!recipe.instructions) {
    alert("A recipe requires instructions!");
    return false;
  } else {
    return true;
  }
};
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
    if (!validateRecipeForm(newRecipe)) {
      return;
    } else {
      try {
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
      } catch (e) {
        navigate("/add-new-recipe");
        console.log("New Recipe Form error: ", e);
      }
    }
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
      <div className="new-recipe-form-div">
        <div className="recipe-form-input-div-container">
          <div className="small-recipe-inputs">
            <div className="recipe-form-input-divs">
              <label>
                <strong>
                  Recipe Name<span className="required-asterisk">*</span>:
                </strong>
                <br />
                <input
                  className="recipe-form-input recipe-name-input"
                  type="text"
                  id="add-name"
                  value={newRecipe.name}
                  placeholder="Lasagna"
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
                <strong>Recipe URL:</strong>
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
              {" "}
              <label>
                <strong>Image URL:</strong>
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
          </div>
          <div className="recipe-form-input-divs">
            <label>
              <strong>Description:</strong> <br />
              <textarea
                className="recipe-form-input recipe-description-input"
                type="text"
                id="add-summary"
                placeholder="A little background story about this recipe..."
                value={newRecipe.summary}
                // placeholder="Description"
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
              <strong>
                Ingredients<span className="required-asterisk">*</span>:
              </strong>
              <br />
              <textarea
                className="recipe-form-input"
                type="text"
                id="add-ingredients"
                value={newRecipe.ingredients}
                placeholder="Sugar, spice, and everything nice..."
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
              <strong>
                Instructions<span className="required-asterisk">*</span>:
              </strong>
              <br />
              <textarea
                className="recipe-form-input"
                type="text"
                id="add-instructions"
                value={newRecipe.instructions}
                placeholder="Feel free to structure your instructions with HTML!"
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
            <label>
              <strong>Prep Time:</strong>
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
              <strong>Cook Time:</strong>
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
            <strong>Yield:</strong>
            <br />
            <input
              className="recipe-form-input"
              min="0"
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

      <div className="submit-div">
        <div className="form-submit-btn btn" onClick={(e) => addNewRecipe(e)}>
          {" "}
          <h3>Submit</h3>
        </div>
      </div>
    </div>
  );
};

export default NewRecipeForm;
