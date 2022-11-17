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

const FoodItem = ({food, setFoodView}) => {
  return (
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
  );
};

export default FoodItem;
