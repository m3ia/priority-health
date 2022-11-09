const FoodItem = ({food, setFoodView}) => {
  return (
    <div
      className="food-item-div"
      onClick={() => setFoodView(food.food)}
      style={{
        backgroundColor: `${
          (food.status === "ok" && "#309F77") ||
          (food.status === "avoid" && "#C41817") ||
          // (food.status === "mod" && "#fdc338")
          // (food.status === "mod" && "#fcb508")
          // (food.status === "mod" && "#fab102")
          // (food.status === "mod" && "#FFD635")
          (food.status === "mod" && "#f9e04f") ||
          // (food.status === "mod" && "#e0c52f")
          // (food.status === "mod" && "#f7ef62")
          // (food.status === "mod" && "#f7ec27")
          // (food.status === "mod" && "#f2ec85")
          (!food.status && "#FFF")
        }`,
      }}>
      <h3>{food.food}</h3>
    </div>
  );
};

export default FoodItem;
