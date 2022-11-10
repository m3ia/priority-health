import recipeIcon from "./recipe-book.png";

const CollectionsCard = ({collection}) => {
  return (
    <div className="collections-card-div">
      <h2>{collection.name}</h2>
      <div className="collections-card-body">
        <img src={recipeIcon} alt="recipe-icon" height="75"></img>
        <p>{collection.notes}</p>
      </div>
    </div>
  );
};

export default CollectionsCard;
