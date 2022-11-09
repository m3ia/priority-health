import NutritionLabel from "./NutritionLabel";

const FoodItemView = ({foodView, setFoodView, food}) => {
  return (
    <div className="food-item-view-div">
      <div className="food-item-view-header">
        <h1>
          {foodView.charAt(0).toUpperCase() + foodView.slice(1)} -{" "}
          <span
            style={{
              backgroundColor: `${
                (food[0].status === "ok" && "#309F77") ||
                (food[0].status === "avoid" && "#C41817") ||
                (food[0].status === "mod" && "#f9e04f")
              }`,
              padding: "7px",
            }}>
            {food[0].status.toUpperCase()}
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
