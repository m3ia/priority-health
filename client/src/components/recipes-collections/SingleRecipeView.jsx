import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Interweave} from "interweave";
import {parseIngredient} from "parse-ingredient";
import spinner from "./spinner.svg";
import {ReactSVG} from "react-svg";
import RecipeNutritionLabel from "./RecipeNutritionLabel";
import IngListInput from "./IngListInput";

const parseIngredients = (recipeFromDB, setSelectedRecipe, setIngredients) => {
  const parsedIngredients = [...parseIngredient(recipeFromDB.ingredients)];
  const processedRecipe = {...recipeFromDB, ingredients: parsedIngredients};
  setSelectedRecipe(processedRecipe);
  const filteredParsedIngredients = parsedIngredients
    .filter((item) => item.isGroupHeader === false)
    .map((ing) => {
      return (
        `${ing.quantity ? ing.quantity : null} ` +
        `${ing.quantity2 ? "- " + ing.quantity2 : null}${
          ing.unitOfMeasure ? ing.unitOfMeasure : null
        } ${ing.description ? ing.description : null}`
      )
        .replaceAll("null", "")
        .replaceAll("  ", " ")
        .trim();
    });
  setIngredients(filteredParsedIngredients);
};

const SingleRecipeView = ({siteUser}) => {
  const {recipeId} = useParams();
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [recipeCollectionsForView, setRecipeCollectionsForView] = useState([]);
  const [singleRecipeID, setSingleRecipeID] = useState(0);
  const [ingView, setIngView] = useState(true);

  useEffect(() => {
    // Fetch data for a single recipe
    const viewRecipe = async (recipeId) => {
      await fetch(`/api/recipe/${recipeId}`)
        .then((res) => res.json())
        .then((res) => {
          parseIngredients(res[0], setSelectedRecipe, setIngredients);
        });
    };

    viewRecipe(recipeId);
    setSingleRecipeID(recipeId);
  }, [recipeId, setSingleRecipeID]);

  // useEffect for capturing recipe-collections from DB after user is signed in
  useEffect(() => {
    // Function that gets recipe collections for specific recipes. stateUpdateFxn is any function meant to update any state
    const getRecipeCollections = async (recipeId) => {
      const recipeCollections = [];
      await fetch(`/api/recipe-collections/${recipeId}`)
        .then((res) => res.json())
        .then((res) => {
          recipeCollections.push(...res);
        });

      setRecipeCollectionsForView([...recipeCollections]);
    };
    getRecipeCollections(singleRecipeID);
  }, [singleRecipeID]);

  return (
    <div className="single-recipe-container">
      {Object.keys(selectedRecipe).length === 0 ? (
        <ReactSVG src={spinner} />
      ) : (
        <>
          <div className="recipe-header">
            <div className="recipe-title">
              <span className="recipe-name">{selectedRecipe.name}</span>
            </div>
            <div className="recipe-header-details">
              <div className="recipe-photo">
                {" "}
                <figure>
                  {selectedRecipe.image && (
                    <img
                      src={selectedRecipe.image}
                      alt="recipe-hero-img"
                      width="500"
                    />
                  )}
                  <br />
                  {selectedRecipe.url && (
                    <figcaption>
                      Source link:{" "}
                      <a
                        href={selectedRecipe.url}
                        target="_blank"
                        rel="noreferrer">
                        {selectedRecipe.url}
                      </a>
                    </figcaption>
                  )}
                </figure>
              </div>
              <div className="recipe-summary">
                <h2>{selectedRecipe.summary}</h2>
              </div>
            </div>
          </div>
          <div className="recipe-body">
            <div className="recipe-body-left">
              <div className="recipe-instructions">
                <h2>Instructions</h2>
                <Interweave content={selectedRecipe.instructions} />
              </div>
              {/* Contains list of collections this recipe is a member of in button-size cards */}
              <div className="recipe-collections-list-div">
                <div className="">
                  {recipeCollectionsForView && (
                    <>
                      <h2>Current Collections:</h2>
                      <div className="recipe-collections-list-cards-div">
                        {recipeCollectionsForView.map((item, ind) => (
                          <div key={ind} className="collections-cards-view">
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="recipe-body-right">
              <button
                className="ing-btn"
                onClick={() => setIngView(ingView === true ? false : true)}
                style={{
                  backgroundColor: `${ingView === false ? "#FFF" : "#DB8D35"}`,
                  color: `${ingView === false ? "#2D2B2B" : "#FFF"}`,
                  // border: `${
                  //   ingView === false ? "1px solid #2D2B2B" : "#DB8D35"
                  // }`,
                }}>
                {ingView ? "View Nutrition Info" : "View Ingredients"}
              </button>
              {ingView ? (
                <div className="recipe-servings-info">
                  <h2>Ingredients</h2>
                  Prep Time: {selectedRecipe.prep_time}
                  <br />
                  Cook Time: {selectedRecipe.cook_time}
                  <br /> Yields: {selectedRecipe.yield}
                  <p />
                  <div className="recipe-ingredients">
                    {selectedRecipe.ingredients.map((ing, ind) => {
                      return ing.isGroupHeader ? (
                        <h3 key={ind}>{ing.description}</h3>
                      ) : (
                        <li key={ind}>
                          <IngListInput ing={ing} index={ind} />
                        </li>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="recipe-nutrition-label-container">
                  <RecipeNutritionLabel
                    ingredients={ingredients}
                    selectedRecipe={selectedRecipe}
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleRecipeView;
