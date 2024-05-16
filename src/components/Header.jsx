import { useState } from "react";

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    if (!isToggled) {
      setIsToggled(true);
      document.body.classList.add("lightMode");
    } else {
      setIsToggled(false);
      document.body.classList.remove("lightMode");
    }
  };

  return (
    <>
      <header>
        <div className="header-left">
          <h1 className="title">Social Media Dashboard</h1>
          <h2 className="subtitles">Total Followers: 23,004</h2>
        </div>
        <div className="header-right">
          <div className="lightModeToggle">
            <span>{isToggled ? "Light Mode" : "Dark Mode"}</span>
            <div className="lightModeToggle-switch" onClick={handleClick}>
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
