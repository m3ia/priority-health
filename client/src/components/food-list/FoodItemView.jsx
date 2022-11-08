import NutritionLabel from "./NutritionLabel";

const FoodItemView = ({foodView, setFoodView}) => {
  return (
    <div className="food-item-view-div">
      <div className="food-item-view-header">
        <h1>Food Item View</h1>{" "}
        <span class="material-symbols-outlined" onClick={() => setFoodView("")}>
          close
        </span>
      </div>
      <h2>{foodView}</h2>
      <div className="nutrition-label-div">
        <NutritionLabel foodView={foodView} />
      </div>
    </div>
  );
};

export default FoodItemView;
