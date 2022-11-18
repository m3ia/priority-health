import {useEffect, useState} from "react";
import RecipeListCard from "./RecipeListCard";
import {useNavigate} from "react-router-dom";

const Recipes = ({
  collectionFilter, // A string the user is filtering collections by. If empty, show all recipes.
  setCollectionFilter, // function to reset the collection filter string
  collectionsData, // Contains all the collections data from /api/collecitons,
  selectedCollection, // The collection selected by the user to filter recipes by,
  setSelectedCollection, // Function to update (clear) the selected collection
}) => {
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

  // Filter recipes by collection
  const getRecipesByCollection = async () => {
    await fetch('/api/recipes/)
  }
  
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
        {/* TODO: decide if i need a btn to add a new form here */}
        {/* <div className="recipes-form-btn">+</div> */}
      </div>
      <div className="recipes-view-info">
        {selectedCollection === "" && collectionFilter === "" ? (
          <h2>All Recipes</h2>
        ) : (
          <h2>
            {selectedCollection}{" "}
            <button onClick={() => setSelectedCollection("")}>clear</button>
          </h2>
        )}
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
                    index={ind}
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
