import {useState} from "react";
import NutritionLabel from "../NutritionLabel";

const FoodList = () => {
  const [nutritionLabel, setNutritionLabel] = useState({});
  const food = "1 tbsp honey";

  const getNutritionLabel = async () => {
    await fetch(`http://localhost:8080/api/example/${food}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setNutritionLabel((prev) => ({
          ...prev,
          dietLabels: data.dietLabels,
          healthLabels: data.healthLabels,
          calories: data.calories,
        }));
      });
  };

  return (
    <div>
      <h1>Food weewsrser</h1>
      <button onClick={getNutritionLabel}>1 tbsp honey</button>
      {nutritionLabel.dietLabels && (
        <NutritionLabel
          nutritionLabel={nutritionLabel}
          // setNutritionLabel={setNutritionLabel}
          getNutritionLabel={getNutritionLabel}
        />
      )}
      <div>
        {nutritionLabel.calories && (
          <div>
            <h3>{food}</h3>
            <p>calories: {nutritionLabel.calories}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodList;
