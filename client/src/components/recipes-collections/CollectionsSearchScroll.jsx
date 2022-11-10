const CollectionsSearchScroll = ({collectionsData}) => {
  return (
    <div className="collections-search-div">
      <div className="collections-searchbar">
        <input type="text" placeholder="filter collections"></input>
      </div>
      <div className="collections-scroll-section">
        {collectionsData.map((collection, ind) => {
          return <div className="collection-bar">{collection.name}</div>;
        })}
      </div>
    </div>
  );
};

export default CollectionsSearchScroll;
