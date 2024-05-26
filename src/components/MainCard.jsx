import { getImagesURL } from "../utils/getImages";

const Card = ({ cardData, onClick }) => {
  return (
    <>
      <div
        className="social-media__card--container"
        onClick={() => onClick(cardData)}
      >
        <div
          className="social-media__card"
          onClick={onClick}
          key={cardData.id}
          id={cardData.web}
        >
          <div
            className="card-color-top"
            style={{ background: `${cardData.topColor}` }}
          ></div>
          <div className="card-top">
            <img
              className="card-top_logo"
              src={getImagesURL(cardData.icono)}
              alt=""
            />
            <p className="card-top_username">{cardData.username}</p>
          </div>
          <div className="card-info">
            <div className="card-info_followers">
              <div className="card-info_followers-qty">
                {cardData.followers || cardData.subscribers}
              </div>
              <span>{cardData.typeOfPublic}</span>
            </div>
          </div>
          <div className="card-bottom">
            <p
              className={`card-bottom_followers-today ${cardData.overviewToday.percentageType}`}
            >
              {cardData.followersToday || cardData.subscribersToday} Today
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
