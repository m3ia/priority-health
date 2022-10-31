import {useState} from "react";

const FoodList = () => {
  const [nutritionalLabel, setNutritionalLabel] = useState({});
  const getNutritionLabel = async () => {
    const food = "1 tbsp honey";

    await fetch(`http://localhost:8080/api/example/${food}`)
      .then((res) => res.json())
      .then((data) =>
        setNutritionalLabel({
          dietLabels: data.dietLabels,
          healthLabels: data.healthLabels,
        })
      );
  };

  return (
    <div>
      <h1>Food weewsrser</h1>
      <p>
        <button onClick={getNutritionLabel}>1 tbsp honey</button>
        {nutritionalLabel.dietLabels && (
          <ul>
            diet labels:
            {nutritionalLabel.dietLabels.map((item, ind) => {
              return <li key={ind}>{item}</li>;
            })}
          </ul>
        )}
      </p>
    </div>
  );
};

export default FoodList;
