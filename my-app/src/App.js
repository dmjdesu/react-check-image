import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [isDispaly, setIsDispaly] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const toggleDispaly = () => {
    setIsDispaly(!isDispaly);
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        {isDispaly && (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
        )}
        <img
          width="500px"
          src="https://photo-chips.com/user_data/00009004_1ee9df.jpg"
          alt="logo"
        />
      </div>
      {!isDispaly && <button>ボタン</button>}
      <br />
      <button onClick={toggleDispaly}>Toggle checkbox</button>
    </>
  );
}

export default App;
