import { useState, useRef, useEffect } from "react";

export default function Header() {
  const myRef = useRef([]);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    myRef.current = Array.from(document.querySelectorAll(".theme"));
  }, []);

  const enableLightMode = () => {
    myRef.current.forEach((element) => {
      element.classList.add("lightMode");
    });
    document.body.classList.add("lightMode");
    localStorage.setItem("lightMode", "enabled");
  };

  const disableLightMode = () => {
    myRef.current.forEach((element) => {
      element.classList.remove("lightMode");
    });
    document.body.classList.remove("lightMode");
    localStorage.setItem("lightMode", null);
  };

  const handleClick = () => {
    if (!isToggled) {
      setIsToggled(true);
      enableLightMode();
    } else {
      setIsToggled(false);
      disableLightMode();
    }
  };

  return (
    <>
      <header>
        <div className="header-left">
          <h1 className="title theme">Social Media Dashboard</h1>
          <h2 className="subtitle theme">Total Followers: 23,004</h2>
        </div>
        <div className="header-right">
          <div className="lightModeToggle">
            <span className="theme">
              {isToggled ? "Light Mode" : "Dark Mode"}
            </span>
            <div className="lightModeToggle-switch theme" onClick={handleClick}>
              <div
                className={
                  isToggled ? "switch-circle toggled" : "switch-circle "
                }
              ></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
