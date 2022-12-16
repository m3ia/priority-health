import {useState} from "react";

const IngListInput = ({ing, index}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        className={isChecked && "checked"}
        onChange={() => setIsChecked(isChecked === false ? true : false)}
        checked={isChecked}
      />
      <span
        style={{textDecoration: `${isChecked ? "line-through" : "none"}`}}
        onClick={() => setIsChecked(isChecked === false ? true : false)}>
        {ing.quantity} {ing?.quantity2 && `- ${ing?.quantity2}`}
        {ing.unitOfMeasure} {ing.description}
      </span>
    </>
  );
};

export default IngListInput;
