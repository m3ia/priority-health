import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const SingleRecipeView = ({siteUser}) => {
  const {recipeId} = useParams();
  const [selectedRecipe, setSelectedRecipe] = useState({});

  useEffect(() => {
    // Fetch data for a single recipe
    const viewRecipe = async (recipeId) => {
      console.log("im in there");
      await fetch(`/api/recipe/${recipeId}`)
        .then((res) => res.json())
        .then((res) => {
          console.log("recipeId: ", recipeId);
          console.log("ressssy: ", res);
          setSelectedRecipe({...res[0]});
        });
    };
    viewRecipe(recipeId);
  }, [recipeId]);

  return (
    <div className="single-recipe-container">
      <div className="recipe-header">
        <div className="recipe-name">Name: {selectedRecipe.name}</div>
        <div className="recipe-photo">
          {" "}
          Image: {selectedRecipe.image}
          <br />
          Source link: {selectedRecipe.url}
        </div>
      </div>
      <div className="recipe-body">
        <div className="recipe-body-left">
          <div className="recipe-summary">
            Summary: {selectedRecipe.summary}
          </div>

          <div className="recipe-instructions">
            Instructions: {selectedRecipe.instructions}
          </div>
        </div>
        <div className="recipe-body-right">
          <div className="recipe-servings-info">
            <h2>Ingredients</h2>
            Prep Time: {selectedRecipe.prep_time}
            <br />
            Cook Time: {selectedRecipe.cook_time}
            <br /> Yields: {selectedRecipe.yield}
            <div className="recipe-ingredients">
              Ingredients: {selectedRecipe.ingredients}
            </div>
          </div>
          <div className="recipe-nutrition-label">
            <h2>nutrition label</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeView;
