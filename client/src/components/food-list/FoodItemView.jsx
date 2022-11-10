import NutritionLabel from "./NutritionLabel";
import {foodStatusToColor} from "./FoodItem";

const FoodItemView = ({foodView, setFoodView, food}) => {
  return (
    <div className="food-item-view-div">
      <div className="food-item-view-header">
        <h1>
          {foodView.charAt(0).toUpperCase() + foodView.slice(1)} -{" "}
          <span
            style={{
              backgroundColor: `${
                !food[0].status ? "#FFF" : foodStatusToColor(food[0]?.status)
              }`,
              padding: "7px",
            }}>
            {food[0].status ? food[0].status.toUpperCase() : "Not yet labeled"}
          </span>
        </h1>{" "}
        <span
          className="material-symbols-outlined close-btn"
          onClick={() => setFoodView("")}>
          close
        </span>
      </div>
      <div className="food-item-view-body">
        <div className="food-item-notes">
          <h2>Notes:</h2>
          <div className="foot-item-notes-box">
            {food[0].notes ? food[0].notes : "none"}
          </div>
        </div>
        <div className="nutrition-label-div">
          <NutritionLabel foodView={foodView} />
        </div>
      </div>
    </div>
  );
};

export default FoodItemView;
