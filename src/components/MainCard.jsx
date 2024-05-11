const Card = ({ cardData, onClick }) => {
  return (
    <>
      <div
        className="social-media__card--container"
        onClick={() => onClick(cardData)}
      >
        <div
          className="social-media__card theme"
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
              src={`/src/assets/${cardData.icono}.svg`}
              alt=""
            />
            <p className="card-top_username theme">{cardData.username}</p>
          </div>
          <div className="card-info">
            <div className="card-info_followers">
              <div className="card-info_followers-qty theme">
                {cardData.followers || cardData.subscribers}
              </div>
              <span className="theme">{cardData.typeOfPublic}</span>
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
