import NutritionLabel from "./NutritionLabel";

const FoodItemView = ({foodView, setFoodView}) => {
  return (
    <div className="food-item-view-div">
      <span class="material-symbols-outlined" onClick={() => setFoodView("")}>
        close
      </span>
      <h1>Food Item View</h1>
      <h2>{foodView}</h2>
      <div className="nutrition-label-div">
        <NutritionLabel foodView={foodView} />
      </div>
    </div>
  );
};

export default FoodItemView;
