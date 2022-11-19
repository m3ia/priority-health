export const foodStatusToColor = (status) => {
  switch (status) {
    case "ok":
      return "#309F77";
    case "avoid":
      return "#C41817";
    case "mod":
      return "#f9e04f";
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
        }}>
        <p>{food.food}</p>
      </div>
    </div>
  );
};

export default FoodItem;
