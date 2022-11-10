import {useState, useEffect} from "react";
import CollectionsCard from "./CollectionsCard";
import CollectionsSearchScroll from "./CollectionsSearchScroll";
import Recipes from "./Recipes";

const Collections = () => {
  const [collectionsData, setCollectionsData] = useState([]);
  // TODO:
  const [collectionFilter, setCollectionFilter] = useState("all-recipes");

  const getCollections = () => {
    fetch("/api/collections")
      .then((res) => res.json())
      .then((res) => {
        setCollectionsData([...res]);
      });
  };
  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className="recipes-collections-container">
      <h1>Recipes + Recipe Collections</h1>
      <div className="recipes-collections-div">
        <div className="collections-div">
          <div
            className="recipes-btn"
            onClick={() => setCollectionFilter("all-recipes")}>
            All Recipes
          </div>
          <div
            className="recipes-btn"
            onClick={() => setCollectionFilter("uncategorized-recipes")}>
            Uncategorized Recipes
          </div>
          <CollectionsSearchScroll collectionsData={collectionsData} />
          {collectionsData.length > 0 &&
            collectionsData.map((collection, ind) => {
              return <CollectionsCard key={ind} collection={collection} />;
            })}
        </div>
        <div className="recipes-div">
          <h2>Recipes</h2>
          <Recipes />
        </div>
      </div>
    </div>
  );
};

export default Collections;
