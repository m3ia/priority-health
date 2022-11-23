import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const FiveRecCards = ({siteUser}) => {
  const [recentFive, setRecentFive] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`/api/recent-recipes/${siteUser?.userId}`)
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
                <div className="recent-card-img">
                  {card.image && <img src={card.image} alt="the recipe meal" />}
                </div>
              </div>
              <div>
                <div className="recipe-list-card-title">
                  <strong>{card.name}</strong>
                </div>
                <div className="">
                  {card.prep_time && (
                    <span>
                      <span className="material-symbols-outlined prep-icon">
                        timer
                      </span>{" "}
                      <span>{card.prep_time}</span>
                    </span>
                  )}
                </div>
                <div className="">
                  {card.cook_time && (
                    <span>
                      <span className="material-symbols-outlined cook-icon">
                        cooking
                      </span>
                      <span> {card.cook_time}</span>
                    </span>
                  )}
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
