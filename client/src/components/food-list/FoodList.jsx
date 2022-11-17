import {useState, useEffect} from "react";
import FoodItemView from "./FoodItemView";
import FoodItem from "./FoodItem";
import {useNavigate} from "react-router-dom";

const FoodList = ({siteUser, foodView, setFoodView}) => {
  const [foods, setFoods] = useState([]);
  const [foodsToDelete, setFoodsToDelete] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const [userId, setUserId] = useState(0);

  // GET request for all food to list as buttons
  const getFoods = async (userId) => {
    await fetch(`/api/myFoods/${userId}`)
      .then((res) => res.json())
      .then((res) => {
        setFoods([...res]);
      });
  };

  // Function to redirect user to New Food Form
  const navToNewFoodForm = () => navigate("/add-new-food");

  // DELETE request to delete multiple food items
  const deleteFoodItems = async () => {
    if (foodsToDelete.length > 0) {
      const itemsToDelete = {
        userId: siteUser.userId,
        items: [...foodsToDelete],
      };
      await fetch("/api/delete-foods", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemsToDelete),
      });

      setEditMode(false);
      setFoodsToDelete([]);
      getFoods();
      // navigate(0);
    } else {
      setEditMode(false);
    }
  };
  useEffect(() => {
    setUserId(siteUser.userId);
  }, [siteUser]);
  // GET request that fetches everything from http://localhost:8080/api/myFoods
  useEffect(() => {
    getFoods(siteUser.userId);
  }, [siteUser]);

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
              <div
                className="new-food-btn btn"
                onClick={() => navToNewFoodForm()}>
                Add a Food
              </div>
              <div
                className="delete-foods-btn btn"
                onClick={() => setEditMode(true)}>
                Edit Foods
              </div>
            </div>
          </div>
          <div className="food-list-div">
            <div>
              {editMode && <button onClick={deleteFoodItems}>Save</button>}
            </div>
            <div className="foods-btns-div">
              {foods.map((food, ind) => {
                return (
                  <div key={ind}>
                    <FoodItem food={food} setFoodView={setFoodView} />
                    {editMode && (
                      <span
                        className="material-symbols-outlined delete-food-item-btn"
                        onClick={() => {
                          setFoods((prev) =>
                            prev.filter((item) => item.id !== food.id)
                          );
                          setFoodsToDelete((prev) => [...prev, food.id]);
                        }}>
                        remove
                      </span>
                    )}
                  </div>
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
