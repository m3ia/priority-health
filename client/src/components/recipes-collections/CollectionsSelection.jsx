import {useEffect, useState} from "react";
// import {isInputElement} from "react-router-dom/dist/dom";
import CollectionSelect from "./CollectionSelect";

const CollectionsSelection = ({
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
      <div className="collections-selection-header">
        <p>
          <strong>Add Recipe to Collections</strong>
        </p>
      </div>
      <div className="selected-collections-btns-div">
        {!potentialCollections.length && (
          <em>Selected collections show here.</em>
        )}
        {potentialCollections.map((collectionName, ind) => {
          return (
            <span key={ind} className="selected-collection-btn">
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
              </span>{" "}
              {collectionName}
            </span>
          );
        })}
      </div>
      {/* {potentialCollections.map((item, ind) => {
        return <div key={ind}>{item}</div>;
      })} */}
      <div className="collections-selections-div">
        {collectionsData
          .filter((item) => !potentialCollections.includes(item.name))
          .map((collection, ind) => {
            return (
              <CollectionSelect
                collection={collection}
                key={ind}
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
