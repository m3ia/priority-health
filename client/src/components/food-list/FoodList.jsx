import {useState, useEffect} from "react";
import FoodItemView from "./FoodItemView";
import FoodItem from "./FoodItem";

const FoodList = ({foodView, setFoodView}) => {
  const [foods, setFoods] = useState([]);

  const getFoods = async () => {
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
        <>
          <div className="food-list-header">
            <div>
              {/* TODO add form for food list */}
              <h1>Food Tolerance List</h1>
              <h3>Track the foods you can/can't tolerate here.</h3>
            </div>
            <div>
              <div className="new-food-btn">Add a Food</div>
            </div>
          </div>
          <div className="food-list-div">
            <p>food view: {foodView}</p>
            <div className="foods-btns-div">
              {foods.map((food, ind) => {
                return (
                  <FoodItem key={ind} food={food} setFoodView={setFoodView} />
                );
              })}
            </div>
          </div>
        </>
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
