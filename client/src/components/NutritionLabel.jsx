const NutritionLabel = (nutritionLabel) => {
  console.log("nutritionLabel", nutritionLabel);
  nutritionLabel = nutritionLabel.nutritionLabel;
  return (
    <>
      <div>
        diet labels:
        {nutritionLabel.dietLabels && (
          <ul>
            {nutritionLabel.dietLabels.map((item, ind) => {
              return <li key={ind}>{item.toLowerCase().replace(/_/, " ")}</li>;
            })}
          </ul>
        )}
      </div>
      <div>
        health labels:{" "}
        {nutritionLabel.healthLabels && (
          <ul>
            {nutritionLabel.healthLabels.map((item, ind) => {
              return <li key={ind}>{item.toLowerCase().replace(/_/g, " ")}</li>;
            })}
          </ul>
        )}
      </div>
      <div>calories: {nutritionLabel.calories}</div>
    </>
  );
};

export default NutritionLabel;
