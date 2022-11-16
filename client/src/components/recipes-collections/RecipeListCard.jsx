import recipeIcon from "./menu.png";
import {useState} from "react";
// import getRecipeCollections from "./SingleRecipeView";
import {useEffect} from "react";

// TODO: figure out how to use this function when imported from ./SingleRecipeView. Getting "Invalid hook call: Hooks can only be called inside of the body of a function component" error.
const getRecipeCollections = async (recipeId, stateUpdaterFxn) => {
  const recipeCollections = [];
  await fetch(`/api/recipe-collections/${recipeId}`)
    .then((res) => res.json())
    .then((res) => {
      // TODO remove test line when done testing recipe-collections mult selection

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
  return (
    <div
      className={`recipe-list-card-container ${index}`}
      onClick={() => navToSingleRecipeView(recipe.id)}>
      <div className="recipe-list-card-img">
        <img
          src={recipe.image ? recipe.image : recipeIcon}
          alt="recipe-icon"
          height="80"
        />
      </div>
      <div className="recipe-list-card-details">
        <p>
          <strong>{recipe.name}</strong>
        </p>
        <p>URL: {recipe.url}</p>
        <div>
          <strong>Collections: </strong>{" "}
          <div className="recipe-list-card-collection-div">
            {collectionsList.length === 0
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
