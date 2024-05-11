import Data from "./components/Data";
import MainCard from "./components/MainCard";
import Header from "./components/Header";

import "./styles/main.scss";
import OverviewCard from "./components/OverviewCard";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalData, setModalData] = useState([]);

  function handleClick(data) {
    if (!isModalActive) {
      setIsModalActive(true);
      setModalData(data);
    } else {
      setIsModalActive(false);
      setModalData({});
    }
  }

  return (
    <>
      {isModalActive ? (
        <Modal modalData={modalData} onClick={handleClick} />
      ) : (
        ""
      )}
      <div className="container">
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
