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
            weight: data.ingredients[0].parsed[0].weight.toFixed(0) + "g",
            fat:
              data.totalNutrients.FAT.quantity.toFixed(2) +
              data.totalNutrients.FAT.unit,
            satFat:
              data.totalNutrients.FASAT.quantity.toFixed(2) +
              data.totalNutrients.FASAT.unit,
            protein:
              data.totalNutrients.PROCNT.quantity.toFixed(2) +
              data.totalNutrients.PROCNT.unit,
            carbs:
              data.totalNutrients.CHOCDF.quantity.toFixed(2) +
              data.totalNutrients.CHOCDF.unit,
            chole:
              data.totalNutrients.CHOLE.quantity.toFixed(2) +
              data.totalNutrients.CHOLE.unit,
            ingrts: data.ingredients[0].text,
          }));
        });
    };
    getNutritionLabelData();
  }, [food]);

  return (
    <>
      <div className="nutrition-label-div">
        <h3>Nutrition Facts</h3>
        <div className="nutrition-label-header">
          {nutritionLabelData.calories && (
            <div>
              <h3>1 serving: {food}</h3>
              <p>calories: {nutritionLabelData.calories}</p>
              <p>weight: {nutritionLabelData.weight}</p>
            </div>
          )}
        </div>
        <div className="nutrition-body">
          Fat: {nutritionLabelData.fat}
          <br />
          Saturated Fat: {nutritionLabelData.satFat}
          <br />
          Protein: {nutritionLabelData.protein}
          <br />
          Carbohydrates: {nutritionLabelData.carbs}
          <br />
          Cholesterol: {nutritionLabelData.chole}
          <br />
          Ingredients: {nutritionLabelData.ingrts}
        </div>
        <div className="diet-labels-div">
          diet labels:
          {nutritionLabelData.dietLabels && (
            <ul>
              {nutritionLabelData.dietLabels.map((item, ind) => {
                return (
                  <li key={ind}>{item.toLowerCase().replace(/_/, " ")}</li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="health-labels-div">
        health labels:{" "}
        <div className="health-labels-list">
          {" "}
          {nutritionLabelData.healthLabels && (
            <ul>
              {nutritionLabelData.healthLabels.map((item, ind) => {
                return (
                  <li key={ind}>{item.toLowerCase().replace(/_/g, " ")}</li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default NutritionLabel;
