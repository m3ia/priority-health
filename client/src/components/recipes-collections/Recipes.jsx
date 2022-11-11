import {useEffect, useState} from "react";
import RecipeListCard from "./RecipeListCard";
import {useNavigate} from "react-router-dom";

const Recipes = ({siteUser}) => {
  const [recipes, setRecipes] = useState([]);
  const [singleRecipeId, setSingleRecipeId] = useState(null);

  const navigate = useNavigate();

  // Fetch all recipes
  const getRecipes = async () => {
    await fetch("/api/recipes")
      .then((res) => res.json())
      .then((res) => {
        // console.log("res: ", res);
        setRecipes([...res]);
      });
  };

  // Fetch data for a single recipe
  // const viewRecipe = async (recipeId) => {
  //   console.log("im in there");
  //   await fetch(`/api/recipe/${recipeId}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("recipeId: ", recipeId);
  //       console.log("ressssy: ", res);
  //       setSingleRecipeId(recipeId);
  //       navigate(`/recipe/${recipeId}`);
  //     });
  // };recipeId

  const navToSingleRecipeView = (recipeId) => navigate(`/recipe/${recipeId}`);

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="recipes-container">
      <div className="recipes-search-form-div">
        <div className="recipes-searchbar">seachbar</div>
        <div className="recipes-form-btn">+</div>
      </div>
      <div className="recipes-view-info">
        {/* Category: {collection.category} Info: {collection.notes} */}
        recipes-view-info
      </div>
      <div className="recipe-list-cards-div">
        {recipes.map((recipe, ind) => {
          return (
            <RecipeListCard
              key={ind}
              recipe={recipe}
              navToSingleRecipeView={navToSingleRecipeView}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
