import {useState} from "react";

// Gets imported into Collections.jsx
// collectionsData contains data about all collections from http://localhost:8080/api/collections, example:
/*
[
  {
    id: 1,
    name: "Autumn Recipes",
    user_id: 3,
    notes: "Lots of squash, pomegranates, and Japanese cuisine."
  },
  {
    id: 2,
    name: "Low Acid Recipes",
    user_id: 3,
    notes: "Mostly basic foods that include white rice, bread, and low-fat meals."
  },
...,
]

*/
const CollectionsSearchScroll = ({collectionsData}) => {
  const [collectionFilter, setCollectionFilter] = useState("");
  return (
    <div className="collections-search-div">
      <div className="collections-searchbar">
        <input
          type="text"
          placeholder="filter collections"
          value={collectionFilter}
          onChange={(e) => setCollectionFilter(e.target.value)}></input>
      </div>
      <div className="collections-scroll-section">
        {collectionFilter.length === 0
          ? collectionsData.map((collection, ind) => {
              return (
                <div className="collection-bar" key={ind}>
                  {collection.name}
                </div>
              );
            })
          : collectionsData
              .filter((collection) =>
                collection.name
                  .toLowerCase()
                  .includes(collectionFilter.toLowerCase())
              )
              .map((collection, ind) => {
                return (
                  <div className="collection-bar" key={ind}>
                    {collection.name}
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default CollectionsSearchScroll;
