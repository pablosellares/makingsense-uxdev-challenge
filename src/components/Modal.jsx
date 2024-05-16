import { useEffect, useState } from "react";
import Chart from "./Chart";

const Modal = ({ onClick, modalData }) => {
  const [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    const storedMode = localStorage.getItem("lightMode");
    if (storedMode === "enabled") {
      setLightMode(storedMode);
    } else {
      setLightMode(null);
    }
  }, []);
  return (
    <>
      <div className="backdrop" onClick={onClick}></div>
      <div className="modal">
        <div key={modalData.id} id={modalData.web}>
          <div className="modal-header">
            <div className="modal-header__left">
              <h1 className="modal-header__title">{`${modalData.web} ${modalData.typeOfPublic}`}</h1>
              <div className="modal-header__logo-username">
                <img
                  className="modal-header__logo"
                  src={`src/assets/${modalData.icono}.svg`}
                  alt=""
                />
                <div className="modal-header__username">{`${modalData.username}`}</div>
              </div>
              <div className="modal-followers__info">
                <div className="modal-followers__info--total">
                  <div className="modal-followers__info--qty">
                    {modalData.followers || modalData.subscribers}
                  </div>
                  <span>
                    <p>Total</p>
                    <p>Followers</p>
                  </span>
                </div>
                <div className="modal-followers__info--pasttendays">
                  <div
                    className={`modal-followers__info--qty ${
                      modalData.followersLast10daysStatus ||
                      modalData.subscribersLast10daysStatus
                    }`}
                  >
                    {modalData.followersLast10days ||
                      modalData.subscribersLast10days}
                  </div>
                  <span>
                    <p>New followers in</p>
                    <p>the past 10 days</p>
                  </span>
                </div>
                <div className="modal-followers__info--today">
                  <div
                    className={`modal-followers__info--qty ${
                      modalData.followersTodayStatus ||
                      modalData.subscribersTodayStatus
                    }`}
                  >
                    {modalData.followersToday || modalData.subscribersToday}
                  </div>
                  <span>
                    <p>New followers</p>
                    <p>TODAY</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="modal-header__right">
              <div className="btn-close" onClick={onClick}></div>
            </div>
          </div>
          <div className="modal-body">
            <h1 className="modal-body__date">May 4 - May 13</h1>
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
