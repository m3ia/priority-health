const FoodItem = ({food, setFoodView}) => {
  return (
    <div
      className="food-item-div"
      onClick={() => setFoodView(food.food)}
      style={{
        backgroundColor: `${
          (food.status === "ok" && "green") ||
          (food.status === "avoid" && "red") ||
          (food.status === "mod" && "orange")
        }`,
      }}>
      <h3>{food.food}</h3>
    </div>
  );
};

export default FoodItem;
