import {useEffect, useState} from "react";
import RecipeListCard from "./RecipeListCard";
import {useNavigate} from "react-router-dom";

const Recipes = ({collectionFilter, setCollectionFilter, collectionsData}) => {
  const [recipes, setRecipes] = useState([]);
  const [searchString, setSearchString] = useState("");

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
        <div className="recipes-searchbar">
          <input
            type="text"
            placeholder="Search for a recipe"
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}></input>
        </div>
        <div className="recipes-form-btn">+</div>
      </div>
      <div className="recipes-view-info">
        <h2>{collectionFilter === "all-recipes" && "All Recipes"}</h2>
      </div>
      <div className="recipe-list-cards-div">
        {searchString.length > 0
          ? recipes
              .filter(
                (recipe) =>
                  recipe.name.includes(searchString) ||
                  recipe.url.includes(searchString)
              )
              .map((recipe, ind) => {
                return (
                  <RecipeListCard
                    key={ind}
                    recipe={recipe}
                    navToSingleRecipeView={navToSingleRecipeView}
                    collectionsData={collectionsData}
                  />
                );
              })
          : recipes.map((recipe, ind) => {
              return (
                <RecipeListCard
                  key={ind}
                  recipe={recipe}
                  navToSingleRecipeView={navToSingleRecipeView}
                  collectionsData={collectionsData}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Recipes;
