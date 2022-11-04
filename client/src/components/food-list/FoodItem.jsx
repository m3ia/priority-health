const FoodItem = ({food, setFoodView}) => {
  return (
    <div className="food-item-div" onClick={() => setFoodView(food.food)}>
      <h3>{food.food}</h3>
    </div>
  );
};

export default FoodItem;
