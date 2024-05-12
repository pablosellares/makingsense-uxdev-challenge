import { useRef, useState } from "react";
import Data from "./components/Data";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import Modal from "./components/Modal";
import OverviewCard from "./components/OverviewCard";

import "./styles/main.scss";

function App() {
  const containerRef = useRef(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [modalData, setModalData] = useState([]);

  function handleClick(data) {
    if (!isModalActive) {
      setIsModalActive(true);
      setModalData(data);
      document.body.classList.add("overflow");
      containerRef.current.classList.add("overflow");
    } else {
      setIsModalActive(false);
      setModalData({});
      document.body.classList.remove("overflow");
      containerRef.current.classList.remove("overflow");
    }
  }

  return (
    <>
      {isModalActive ? (
        <Modal modalData={modalData} onClick={handleClick} />
      ) : (
        ""
      )}
      <div ref={containerRef} className="container">
        <div className="top-bg theme"></div>
        <Header />
        <main>
          <div className="dashboard-top">
            {Data.map((data) => (
              <MainCard key={data.id} cardData={data} onClick={handleClick} />
            ))}
          </div>
          <OverviewCard />
        </main>
      </div>
    </>
  );
}

export default App;
