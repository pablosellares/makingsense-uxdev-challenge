import { useEffect, useState } from "react";
import Data from "./Data";

const OverviewCard = () => {
  const [overviewData, setOverviewData] = useState(Data);

  // useEffect(() => {
  //   fetch("/data/data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOverviewData(data);
  //     });
  // }, []);
  return (
    <>
      <h1 className="overview-title theme">Overview - Today</h1>
      <ul className="overview-cards_container">
        {overviewData.map((item) => (
          <li key={item.id} className="overview-cards">
            <div className="overview-card theme">
              <div className="overview-card_top">
                <span className="overview-card_top--title theme">
                  {item.overviewToday.pageViews ||
                    item.overviewToday.retweets ||
                    item.overviewToday.profileViews ||
                    item.overviewToday.totalViews}
                </span>
                <img
                  className="overview-card_top--logo"
                  src={`/src/assets/${item.icono}.svg`}
                  alt={item.web}
                />
              </div>
              <div className="overview-card_bottom">
                <span className="general-qty theme">
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
            <div className="overview-card theme">
              <div className="overview-card_top">
                <span className="overview-card_top--title theme">
                  {item.overviewToday.likes}
                </span>
                <img
                  className="overview-card_top--logo--likes"
                  src={`/src/assets/${item.icono}.svg`}
                  alt={item.web}
                />
              </div>
              <div className="overview-card_bottom">
                <span className="general-qty theme">
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
