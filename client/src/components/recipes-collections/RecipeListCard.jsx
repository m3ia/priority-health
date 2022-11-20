import recipeIcon from "./menu.png";
import {useState} from "react";
// import getRecipeCollections from "./SingleRecipeView";
import {useEffect} from "react";

// TODO: figure out how to use this function when imported from ./SingleRecipeView. Getting "Invalid hook call: Hooks can only be called inside of the body of a function component" error.
const getRecipeCollections = async (recipeId, stateUpdaterFxn) => {
  // Gets the list of collection names each recipe is part of
  const recipeCollections = [];
  await fetch(`/api/recipe-collections/${recipeId}`)
    .then((res) => res.json())
    .then((res) => {
      recipeCollections.push(...res);
    });

  stateUpdaterFxn([...recipeCollections]);
};

const RecipeListCard = ({
  recipe,
  viewRecipe,
  navToSingleRecipeView,
  collectionsData,
  index,
}) => {
  const [collectionsList, setCollectionsList] = useState([]);

  useEffect(() => {
    getRecipeCollections(recipe.id, setCollectionsList);
  }, [recipe]);
  console.log("recipe", recipe);
  return (
    <div
      className={`recipe-list-card-container ${index}`}
      onClick={() => navToSingleRecipeView(recipe.id)}>
      <div className="recipe-list-card-img ">
        {recipe.image && (
          <img
            src={recipe.image}
            alt="recipe-icon"
            // height="80"
            // className={!recipe.image && "recipe-icon"}
            // style={{width: !recipe.image && "100px !important"}}
          />
        )}
      </div>
      <div className="recipe-list-card-details">
        <p>
          <strong>{recipe.name}</strong>
          <br />
          {recipe.prep_time && (
            <span className="recipe-list-card-icon-div">
              <span class="material-symbols-outlined prep-icon">timer</span>
              <span>{recipe.prep_time} </span>
            </span>
          )}
          {/* <br /> */}
          {recipe.cook_time && (
            <span className="recipe-list-card-icon-div">
              <span className="material-symbols-outlined cook-icon">
                cooking
              </span>
              <span>{recipe.cook_time} </span>
            </span>
          )}
          {/* <br /> */}
          {recipe.yield !== "0" && recipe.yield !== 0 && (
            <span>
              <strong>Yields:</strong> {recipe.yield}
            </span>
          )}
        </p>
        <div>
          <div className="recipe-list-card-collection-div">
            {collectionsData.length === 0
              ? "None"
              : collectionsList.map((item, ind) => (
                  <div key={ind} className="recipe-list-card-collection-item">
                    {item.name}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeListCard;
