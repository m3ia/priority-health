import {useEffect, useState} from "react";
import RecipeListCard from "./RecipeListCard";
import {useNavigate} from "react-router-dom";

const Recipes = ({siteUser}) => {
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();

  // Fetch all recipes
  const getRecipes = async () => {
    await fetch("/api/recipes")
      .then((res) => res.json())
      .then((res) => {
        setRecipes([...res]);
      });
  };

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
      <div className="recipes-view-info">recipes-view-info</div>
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
