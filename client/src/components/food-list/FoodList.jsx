import {useState, useEffect} from "react";
import FoodItemView from "./FoodItemView";
import FoodItem from "./FoodItem";

const FoodList = ({foodView, setFoodView}) => {
  const [foods, setFoods] = useState([]);

  console.log("foods: ", foods);
  const getFoods = async () => {
    console.log();
    await fetch("/api/myFoods")
      .then((res) => res.json())
      .then((res) => {
        setFoods([...res]);
      });
  };

  // GET request that fetches everything from http://localhost:8080/api/myFoods
  useEffect(() => {
    getFoods();
  }, []);

  return (
    <>
      {foodView === "" ? (
        <div className="food-list-div">
          <h1>Food Tolerance List</h1>
          <p>food view: {foodView}</p>
          <div className="foods-btns-div">
            {foods.map((food, ind) => {
              return (
                <FoodItem key={ind} food={food} setFoodView={setFoodView} />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="food-item-view-container">
          <FoodItemView
            foodView={foodView}
            food={foods.filter((item) => item.food === foodView)}
            setFoodView={setFoodView}
          />
        </div>
      )}
    </>
  );
};

export default FoodList;
