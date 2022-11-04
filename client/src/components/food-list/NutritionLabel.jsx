import {useState, useEffect} from "react";

const NutritionLabel = ({foodView}) => {
  const [nutritionLabelData, setNutritionLabelData] = useState({});

  // const food = "1 tbsp honey";
  const food = foodView;

  useEffect(() => {
    const getNutritionLabelData = async () => {
      await fetch(`http://localhost:8080/api/example/${food}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          setNutritionLabelData((prev) => ({
            ...prev,
            dietLabels: data.dietLabels,
            healthLabels: data.healthLabels,
            calories: data.calories,
          }));
        });
    };
    getNutritionLabelData();
  }, [food]);

  return (
    <>
      <div className="nutrition-label-div">
        <h3>Nutrition Facts</h3>
        <div>
          {nutritionLabelData.calories && (
            <div>
              <h3>1 serving: {food}</h3>
              <p>calories: {nutritionLabelData.calories}</p>
            </div>
          )}
        </div>
        diet labels:
        {nutritionLabelData.dietLabels && (
          <ul>
            {nutritionLabelData.dietLabels.map((item, ind) => {
              return <li key={ind}>{item.toLowerCase().replace(/_/, " ")}</li>;
            })}
          </ul>
        )}
      </div>
      <div>
        health labels:{" "}
        {nutritionLabelData.healthLabels && (
          <ul>
            {nutritionLabelData.healthLabels.map((item, ind) => {
              return <li key={ind}>{item.toLowerCase().replace(/_/g, " ")}</li>;
            })}
          </ul>
        )}
      </div>
      <div>calories: {nutritionLabelData.calories}</div>
    </>
  );
};

export default NutritionLabel;
