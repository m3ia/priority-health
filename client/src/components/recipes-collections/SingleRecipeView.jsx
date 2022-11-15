import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Interweave} from "interweave";
import {parseIngredient} from "parse-ingredient";
import spinner from "./spinner.svg";
import {ReactSVG} from "react-svg";
import RecipeNutritionLabel from "./RecipeNutritionLabel";

const parseIngredients = (recipeFromDB, setSelectedRecipe, setIngredients) => {
  const parsedIngredients = [...parseIngredient(recipeFromDB.ingredients)];
  const processedRecipe = {...recipeFromDB, ingredients: parsedIngredients};
  setSelectedRecipe(processedRecipe);
  console.log("parsed ingredients: ", parsedIngredients);
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
  }, [recipeId]);

  return (
    <div className="single-recipe-container">
      {Object.keys(selectedRecipe).length === 0 ? (
        <ReactSVG src={spinner} />
      ) : (
        <>
          <div className="recipe-header">
            <span className="recipe-name">{selectedRecipe.name}</span>
            <div className="recipe-header-details">
              <div className="recipe-photo">
                {" "}
                <figure>
                  <img
                    src={selectedRecipe.image}
                    alt="recipe-hero-img"
                    width="500"
                  />
                  <br />
                  <figcaption>
                    Source link:{" "}
                    <a
                      href={selectedRecipe.url}
                      target="_blank"
                      rel="noreferrer">
                      {selectedRecipe.url}
                    </a>
                  </figcaption>
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
            </div>
            <div className="recipe-body-right">
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
                        {ing.quantity} {ing.quantity2 && `- ${ing.qauntity2}`}
                        {ing.unitOfMeasure} {ing.description}
                      </li>
                    );
                  })}
                </div>
              </div>
              <div className="recipe-nutrition-label-container">
                <RecipeNutritionLabel
                  ingredients={ingredients}
                  selectedRecipe={selectedRecipe}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleRecipeView;