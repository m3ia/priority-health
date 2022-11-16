import {useEffect, useState} from "react";
// import {isInputElement} from "react-router-dom/dist/dom";
import CollectionSelect from "./CollectionSelect";

const CollectionsSelection = ({
  newRecipe,
  collectionsData,
  // potentialCollections = newRecipe.collections: an empty array that tracks all potential collections for a recipe.
  potentialCollections,
  // setNewRecipe updates the newRecipe object, set in NewRecipeForm.jsx
  setNewRecipe,
}) => {
  // collectionsData = all collections
  // TODO: set a state for potential collections.
  // const [potentialCollections, setPotentialCollections] = useState([]);
  // onSubmit, send those as a post to be added to recipe-collections.

  return (
    <div className="collections-selection-container">
      <h3>Add Recipe to Categories</h3>
      alskdfjl;asjkdfasd
      <div className="selected-collections-btns-div">
        {potentialCollections.map((collectionName, ind) => {
          return (
            <div key={ind} className="selected-collection-btn">
              {collectionName}{" "}
              <span
                className="material-symbols-outlined remove-collection-btn"
                onClick={() =>
                  setNewRecipe((prev) => ({
                    ...prev,
                    collections: potentialCollections.filter(
                      (item) => item !== collectionName
                    ),
                  }))
                }>
                close
              </span>
            </div>
          );
        })}
      </div>
      {/* {potentialCollections.map((item, ind) => {
        return <div key={ind}>{item}</div>;
      })} */}
      <div className="collections-selections-div">
        {collectionsData.map((collection, ind) => {
          return (
            // <div className="collection-select">
            //   <label>
            //     <input
            //       key={ind}
            //       type="checkbox"
            //       value={item.name}
            //       onChange={(e) => checkUncheck(e)}
            //     />
            //     {item.name}
            //   </label>
            // </div>
            <CollectionSelect
              collection={collection}
              key={ind}
              // setPotentialCollections={setPotentialCollections}
              setNewRecipe={setNewRecipe}
              potentialCollections={potentialCollections}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CollectionsSelection;
