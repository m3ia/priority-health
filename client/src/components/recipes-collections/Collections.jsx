import {useState, useEffect} from "react";
import CollectionsCard from "./CollectionsCard";

const Collections = () => {
  const [collectionsData, setCollectionsData] = useState([
    {
      name: "All Recipes",
      notes: "View all your recipes",
    },
    {
      name: "Uncategorized Recipes",
      notes: "All uncategorized recipes",
    },
  ]);

  const getCollections = () => {
    fetch("/api/collections")
      .then((res) => res.json())
      .then((res) => {
        setCollectionsData((prev) => [...prev, ...res]);
      });
  };
  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className="collections-div">
      <h1>Recipe Collections</h1>
      <div className="collections-cards-div">
        {collectionsData.length > 0 &&
          collectionsData.map((collection, ind) => {
            return <CollectionsCard key={ind} collection={collection} />;
          })}
      </div>
    </div>
  );
};

export default Collections;
