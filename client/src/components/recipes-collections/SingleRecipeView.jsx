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
      Single Recipe Div
      <div className="recipe-header">{selectedRecipe.name}</div>
      <div className="recipe-">
        <div className="recipe-body">
          <div className="recipe-body-l;eft">left</div>
          <div className="recipe-body-right">right</div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeView;
