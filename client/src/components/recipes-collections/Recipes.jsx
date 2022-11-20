import {useEffect, useState} from "react";
import RecipeListCard from "./RecipeListCard";
import {useNavigate} from "react-router-dom";

const Recipes = ({
  siteUser, // siteUser
  collectionFilter, // A string the user is filtering collections by. If empty, show all recipes.
  setCollectionFilter, // function to reset the collection filter string
  collectionsData, // Contains all the collections data from /api/collecitons,
  selectedCollection, // The collection selected by the user to filter recipes by,
  setSelectedCollection, // Function to update (clear) the selected collection
}) => {
  const [recipes, setRecipes] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
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

  useEffect(() => {
    // Filter recipes by collection
    const getRecipesByCollection = async () => {
      try {
        if (selectedCollection.length > 0) {
          await fetch(
            `/api/recipes-filtered/${siteUser.userId}/${selectedCollection}`
          )
            .then((res) => res.json())
            .then((res) => {
              setRecipes([...res]);
            });
          // setRecipes((prev) =>
          //   prev.filter((item) => {
          //     for (let i of filtered) {
          //       if (item.name === i.recipe_name) {
          //         return item;
          //       }
          //     }
          //   })
          // );
        } else {
          getRecipes();
        }
      } catch (e) {
        console.log(e);
      }
    };
    getRecipesByCollection();
  }, [selectedCollection]);

  return (
    <div className="recipes-container">
      <div className="recipes-search-form-div">
        <div className="recipes-searchbar">
          <input
            type="text"
            placeholder="Filter by recipe name"
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}></input>
        </div>
        {/* TODO: decide if i need a btn to add a new form here */}
        <div
          className="recipes-form-btn"
          onClick={() => navigate("/add-new-recipe")}>
          Add New Recipe
        </div>
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
