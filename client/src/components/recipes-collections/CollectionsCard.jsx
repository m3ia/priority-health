import recipeIcon from "./menu.png";
import collectionsIcon from "./cookbook.png";
const CollectionsCard = ({collection}) => {
  return (
    <div className="collections-card-div">
      <h2>{collection.name}</h2>
      <div className="collections-card-body">
        <img
          className="recipe-card-icon vector-icons"
          src={recipeIcon}
          alt="recipe-icon"></img>
        <img
          className="collections-card-icon vector-icons"
          src={collectionsIcon}
          alt="collections-icon"></img>
        <p>{collection.notes}</p>
      </div>
    </div>
  );
};

export default CollectionsCard;
