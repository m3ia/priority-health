import {useState, useEffect} from "react";
import CollectionsCard from "./CollectionsCard";
import CollectionsSearchScroll from "./CollectionsSearchScroll";

const Collections = () => {
  const [collectionsData, setCollectionsData] = useState([]);

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
    <div className="collections-div">
      <h1>Recipes + Recipe Collections</h1>
      <div className="collections-cards-div">
        <div>All Recipes</div>
        <div>Uncategorized Recipes</div>
        <CollectionsSearchScroll collectionsData={collectionsData} />
        {collectionsData.length > 0 &&
          collectionsData.map((collection, ind) => {
            return <CollectionsCard key={ind} collection={collection} />;
          })}
      </div>
    </div>
  );
};

export default Collections;
