import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const FiveRecCards = ({siteUser}) => {
  const [recentFive, setRecentFive] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`/api/recent-recipes/${siteUser.userId}`)
      .then((res) => res.json())
      .then((res) => {
        setRecentFive([...res]);
      });
  }, [siteUser]);
  return (
    <div className="five-recent-cards">
      {recentFive &&
        recentFive.map((card, ind) => {
          return (
            <div
              key={ind}
              className="recent-card"
              onClick={() => navigate(`/recipe/${card.id}`)}>
              <div className="five-recent-info">
                {card.image && <img src={card.image} alt="the recipe meal" />}
              </div>
              <div>
                <div>
                  <strong>{card.name}</strong>
                </div>
                <div className="">
                  {card.prep_time && `Prep time: ${card.prep_time}`}
                </div>
                <div className="">
                  {card.cook_time && `Cook time: ${card.cook_time}`}
                </div>
                <div className="">
                  {card.yield > 0 && `Yields: ${card.yield}`}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FiveRecCards;
