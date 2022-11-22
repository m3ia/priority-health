export const foodStatusToColor = (status) => {
  switch (status) {
    case "ok":
      return "#829566";
    case "avoid":
      return "#A83027";
    case "mod":
      return "#DB8D35";
    default:
      return "#FFF";
  }
};

const FoodItem = ({
  food,
  setFoodView,
  editMode,
  setFoodsToDelete,
  setFoods,
}) => {
  return (
    <div>
      {editMode && (
        <span
          className="material-symbols-outlined delete-food-item-btn"
          onClick={() => {
            setFoods((prev) => prev.filter((item) => item.id !== food.id));
            setFoodsToDelete((prev) => [...prev, food.id]);
          }}>
          remove
        </span>
      )}
      <div
        className="food-item-div"
        onClick={() => setFoodView(food.food)}
        style={{
          backgroundColor: `${
            food.status ? foodStatusToColor(food?.status) : "#FFF"
          }`,
          color: !food.status && "black",
        }}>
        <p>{food.food}</p>
      </div>
    </div>
  );
};

export default FoodItem;
