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
  const [searchedFood, setSearchedFood] = useState("");

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
    setUserId(siteUser?.userId);
  }, [siteUser]);
  // GET request that fetches everything from http://localhost:8080/api/myFoods
  useEffect(() => {
    getFoods(siteUser?.userId);
  }, [siteUser]);

  return (
    <>
      {foodView === "" ? (
        <>
          <div className="food-list-header">
            <div>
              {/* TODO add form for food list */}
              <h1>Food Tolerance List</h1>
              <h3>Track the foods you can/can't tolerate here. </h3>
              <div className="filter-foods">
                <input
                  type="text"
                  placeholder="Filter by food name"
                  onChange={(e) => setSearchedFood(e.target.value)}></input>
              </div>
            </div>
            <div>
              <div
                className="new-food-btn btn"
                onClick={() => navToNewFoodForm()}>
                Add a Food
              </div>
              <div
                className="delete-foods-btn btn"
                onClick={() => {
                  if (editMode) {
                    deleteFoodItems();
                  } else {
                    setEditMode(true);
                  }
                }}>
                {editMode ? "Save" : "Remove Food"}
              </div>
            </div>
          </div>
          <div className="food-list-div">
            <div className="foods-btns-container ok-foods-div">
              <div className="foods-div-header">
                <div className="feeling-cells food-cell good-cell"></div>Always
                OK
              </div>
              <div className="foods-btns-div">
                {searchedFood.length === 0
                  ? foods
                      .filter((item) => item.status === "ok")
                      .map((food, ind) => {
                        return (
                          <div className="food-btn-delete-div" key={ind}>
                            <FoodItem
                              food={food}
                              setFoodView={setFoodView}
                              editMode={editMode}
                              setFoods={setFoods}
                              setFoodsToDelete={setFoodsToDelete}
                            />
                          </div>
                        );
                      })
                  : foods
                      .filter((item) => item.status === "ok")
                      .filter((item) => item.food.includes(searchedFood))
                      .map((food, ind) => {
                        return (
                          <div className="food-btn-delete-div" key={ind}>
                            <FoodItem
                              food={food}
                              setFoodView={setFoodView}
                              editMode={editMode}
                              setFoods={setFoods}
                              setFoodsToDelete={setFoodsToDelete}
                            />
                          </div>
                        );
                      })}
              </div>
            </div>
            <div className="foods-btns-container mod-foods-div">
              <div className="foods-div-header">
                <div className="feeling-cells food-cell ok-cell"></div>OK In
                Moderation
              </div>
              <div className="foods-btns-div">
                {searchedFood.length === 0
                  ? foods
                      .filter((item) => item.status === "mod")
                      .map((food, ind) => {
                        return (
                          <div className="foot-btn-delete-div" key={ind}>
                            <FoodItem
                              food={food}
                              setFoodView={setFoodView}
                              editMode={editMode}
                              setFoods={setFoods}
                              setFoodsToDelete={setFoodsToDelete}
                            />
                          </div>
                        );
                      })
                  : foods
                      .filter((item) => item.status === "mod")
                      .filter((item) => item.food.includes(searchedFood))
                      .map((food, ind) => {
                        return (
                          <div className="foot-btn-delete-div" key={ind}>
                            <FoodItem
                              food={food}
                              setFoodView={setFoodView}
                              editMode={editMode}
                              setFoods={setFoods}
                              setFoodsToDelete={setFoodsToDelete}
                            />
                          </div>
                        );
                      })}
              </div>
            </div>
            <div className="foods-btns-container avoid-foods-div">
              <div className="foods-div-header">
                <div className="feeling-cells food-cell bad-cell"></div>Avoid
              </div>
              <div className="foods-btns-div">
                {searchedFood.length === 0
                  ? foods
                      .filter((item) => item.status === "avoid")
                      .map((food, ind) => {
                        return (
                          <div className="foot-btn-delete-div" key={ind}>
                            <FoodItem
                              food={food}
                              setFoodView={setFoodView}
                              editMode={editMode}
                              setFoods={setFoods}
                              setFoodsToDelete={setFoodsToDelete}
                            />
                          </div>
                        );
                      })
                  : foods
                      .filter((item) => item.status === "avoid")
                      .filter((item) => item.food.includes(searchedFood))
                      .map((food, ind) => {
                        return (
                          <div className="foot-btn-delete-div" key={ind}>
                            <FoodItem
                              food={food}
                              setFoodView={setFoodView}
                              editMode={editMode}
                              setFoods={setFoods}
                              setFoodsToDelete={setFoodsToDelete}
                            />
                          </div>
                        );
                      })}
              </div>
            </div>
            <div className="foods-btns-container uncat-foods-div">
              <div className="foods-div-header">
                <div className="feeling-cells food-cell uncat-cell"></div>
                Uncategorized/Unknown{" "}
              </div>
              <div className="foods-btns-div">
                {searchedFood.length === 0
                  ? foods
                      .filter((item) => !item.status)
                      .map((food, ind) => {
                        return (
                          <div className="foot-btn-delete-div" key={ind}>
                            <FoodItem
                              food={food}
                              setFoodView={setFoodView}
                              editMode={editMode}
                              setFoods={setFoods}
                              setFoodsToDelete={setFoodsToDelete}
                            />
                          </div>
                        );
                      })
                  : foods
                      .filter((item) => !item.status)
                      .filter((item) => item.food.includes(searchedFood))
                      .map((food, ind) => {
                        return (
                          <div className="foot-btn-delete-div" key={ind}>
                            <FoodItem
                              food={food}
                              setFoodView={setFoodView}
                              editMode={editMode}
                              setFoods={setFoods}
                              setFoodsToDelete={setFoodsToDelete}
                            />
                          </div>
                        );
                      })}
              </div>
            </div>
          </div>
          {/* <div className="foods-btns-div">
              {searchedFood.length === 0
                ? foods.map((food, ind) => {
                    return (
                      <div className="food-btn-delete-div" key={ind}>
                        <FoodItem
                          food={food}
                          setFoodView={setFoodView}
                          editMode={editMode}
                          setFoods={setFoods}
                          setFoodsToDelete={setFoodsToDelete}
                        />
                      </div>
                    );
                  })
                : foods
                    .filter((item) => item.food.includes(searchedFood))
                    .map((food, ind) => {
                      return (
                        <div className="food-btn-delete-div" key={ind}>
                          <FoodItem
                            food={food}
                            setFoodView={setFoodView}
                            editMode={editMode}
                            setFoods={setFoods}
                            setFoodsToDelete={setFoodsToDelete}
                          />
                        </div>
                      );
                    })}
            </div> */}
          {/* </div> */}
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
