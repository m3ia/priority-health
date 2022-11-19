import {useState, useEffect} from "react";
import CollectionsSearchScroll from "./CollectionsSearchScroll";
import Recipes from "./Recipes";
import {useNavigate} from "react-router-dom";

const Collections = ({siteUser}) => {
  const [collectionsData, setCollectionsData] = useState([]); // Data from /api/collections
  // TODO:
  const [collectionFilter, setCollectionFilter] = useState(""); // A string to filter collection options by
  const [selectedCollection, setSelectedCollection] = useState(""); // Collection user wants to filter recipes for

  const navigate = useNavigate();

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
      <h1>My Recipe Collections</h1>
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
          <CollectionsSearchScroll
            collectionsData={collectionsData}
            setCollectionsData={setCollectionsData}
            collectionFilter={collectionFilter}
            setCollectionFilter={setCollectionFilter}
            selectedCollection={selectedCollection}
            setSelectedCollection={setSelectedCollection}
          />
          <div
            className="add-new-collection-btn btn"
            onClick={() => navigate("/add-new-collection")}>
            Add New Collection
          </div>
        </div>
        <div className="recipes-div">
          <h2>Recipes</h2>
          <Recipes
            collectionFilter={collectionFilter}
            setCollectionFilter={setCollectionFilter}
            collectionsData={collectionsData}
            selectedCollection={selectedCollection}
            setSelectedCollection={setSelectedCollection}
            siteUser={siteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Collections;
