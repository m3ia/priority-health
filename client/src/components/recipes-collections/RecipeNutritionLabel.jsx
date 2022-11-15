import {useState, useEffect} from "react";
import spinner from "../../spinner.svg";
import {ReactSVG} from "react-svg";

const RecipeNutritionLabel = ({ingredients, selectedRecipe}) => {
  const [nutritionLabelData, setNutritionLabelData] = useState({});
  const [loadExpired, setLoadExpired] = useState(false);
  const [labelData, setLabelData] = useState({
    title: "",
    ingr: [],
    url: "",
    summary: "",
    yield: "",
    time: "",
    img: "",
    prep: "",
  });

  useEffect(() => {
    const getNutritionLabelData = async () => {
      await fetch(
        `https://api.edamam.com/api/nutrition-details?app_id=857e0f4a&app_key=ca9c276c15994bdbdcb18952aabaf50d`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({title: selectedRecipe.name, ingr: ingredients}),
        }
      )
        .then((res) => res.json())
        .then((data) => {
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
  }, [ingredients]);

  useEffect(() => {
    setTimeout(() => {
      if (Object.keys(nutritionLabelData).length === 0) {
        setLoadExpired(true);
      }
    }, 3000);
  }, [nutritionLabelData]);
  return (
    <>
      {Object.keys(nutritionLabelData).length === 0 ? (
        !loadExpired ? (
          <ReactSVG src={spinner} />
        ) : (
          "No nutritional info was fetched, sorry =/."
        )
      ) : (
        <>
          <div className="nutrition-label-header">
            {Object.keys(nutritionLabelData).length > 0 && (
              <>
                <h2>Nutrition Facts</h2>
                <p className="nutrition-label-title">
                  Amount per serving
                  <br />
                  {/* <strong>1 serving:</strong> {food} */}(
                  {nutritionLabelData.weight})
                </p>
                <p className="nutrition-calories">
                  <strong>Calories: </strong>
                  {nutritionLabelData.calories}
                </p>
              </>
            )}
          </div>
          <div className="nutrition-body">
            <p className="nutrition-line">
              <strong>Fat:</strong> {nutritionLabelData.fat}
            </p>
            <p className="nutrition-line">
              <strong>Saturated Fat:</strong> {nutritionLabelData.satFat}
            </p>
            <p className="nutrition-line">
              <strong>Protein:</strong> {nutritionLabelData.protein}
            </p>
            <p className="nutrition-line">
              <strong>Carbohydrates:</strong> {nutritionLabelData.carbs}
            </p>
            <p className="nutrition-line">
              <strong>Cholesterol:</strong> {nutritionLabelData.chole}
            </p>
            <p className="nutrition-line">
              <strong>Ingredients:</strong> {nutritionLabelData.ingrts}
            </p>
          </div>
          <div className="diet-labels-div nutrition-line">
            <strong>Diet Labels:</strong>
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

          <div className="health-labels-div">
            <strong>Health Labels:</strong>{" "}
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
      )}{" "}
    </>
  );
};

export default RecipeNutritionLabel;
