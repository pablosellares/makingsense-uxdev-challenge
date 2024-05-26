import { useState } from "react";
import Data from "./Data";
import { getImagesURL } from "../utils/getImages";

const OverviewCard = () => {
  const [overviewData, setOverviewData] = useState(Data);

  return (
    <>
      <h1 className="overview-title">Overview - Today</h1>
      <ul className="overview-cards_container">
        {overviewData.map((item) => (
          <li key={item.id} className="overview-cards">
            <div className="overview-card">
              <div className="overview-card_top">
                <span className="overview-card_top--title">
                  {item.overviewToday.pageViews ||
                    item.overviewToday.retweets ||
                    item.overviewToday.profileViews ||
                    item.overviewToday.totalViews}
                </span>
                <img
                  className="overview-card_top--logo"
                  src={getImagesURL(item.icono)}
                  alt={item.web}
                />
              </div>
              <div className="overview-card_bottom">
                <span className="general-qty">
                  {item.overviewToday.viewsQty ||
                    item.overviewToday.retweetsQty}
                </span>
                <span
                  className={`overview-firstPercentage ${item.overviewToday.percentageType} `}
                >
                  {item.overviewToday.firstPercentage}
                </span>
              </div>
            </div>
            <div className="overview-card">
              <div className="overview-card_top">
                <span className="overview-card_top--title">
                  {item.overviewToday.likes}
                </span>
                <img
                  className="overview-card_top--logo--likes"
                  src={getImagesURL(item.icono)}
                  alt={item.web}
                />
              </div>
              <div className="overview-card_bottom">
                <span className="general-qty">
                  {item.overviewToday.likesQty}
                </span>
                <span
                  className={`overview-secondPercentage ${item.overviewToday.secondPercentageType}`}
                >
                  {item.overviewToday.secondPercentage} %
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default OverviewCard;
