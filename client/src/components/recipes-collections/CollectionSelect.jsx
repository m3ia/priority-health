import {useState} from "react";

const CollectionSelect = ({collection, setPotentialCollections}) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkUncheck = (e, name) => {
    if (e.target.checked === false) {
      setPotentialCollections((prev) => [
        ...prev.filter((item) => item !== name),
      ]);
      setIsChecked(false);
    } else {
      setPotentialCollections((prev) => [...prev, name]);
      setIsChecked(true);
    }
    // setIsChecked(!e.target.checked);
  };
  return (
    <>
      <div className="collection-select">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => checkUncheck(e, collection.name)}
          />
          {collection.name}
        </label>
      </div>
    </>
  );
};

export default CollectionSelect;
