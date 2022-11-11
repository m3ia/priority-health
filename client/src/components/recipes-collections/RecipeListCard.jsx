import recipeIcon from "./menu.png";

const RecipeListCard = ({recipe, viewRecipe, navToSingleRecipeView}) => {
  return (
    <div
      className="recipe-list-card-container"
      onClick={() => navToSingleRecipeView(recipe.id)}>
      <div className="recipe-list-card-img">
        <img
          src={!recipe.image ? recipe.image : recipeIcon}
          alt="recipe-icon"
          height="80"
        />
      </div>
      <div className="recipe-list-card-details">
        <p>Name: {recipe.name}</p>
        <p>URL: {recipe.url}</p>
      </div>
    </div>
  );
};

export default RecipeListCard;
