import {useEffect} from "react";
import {useState} from "react";

const CollectionSelect = ({
  collection,
  setPotentialCollections,
  potentialCollections,
}) => {
  const [isChecked, setIsChecked] = useState(
    potentialCollections.includes(collection.name)
  );

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

  useEffect(
    () => setIsChecked(potentialCollections.includes(collection.name)),
    [potentialCollections, collection.name]
  );
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
