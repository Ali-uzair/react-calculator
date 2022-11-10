import React, { useState } from "react";
import Header from "./components/header/header";
import Keypad from "./components/keypad/keypad";
import "./App.css";
import moonIcon from "./assests/moon.png";
import sunIcon from "./assests/sun.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleKeyPress = (keyCode, key) => {
    console.log(keyCode, key);
  };
  return (
    <div
      className="App"
      tabIndex="0"
      onKeyDown={(event) => handleKeyPress(event.keyCode, event.key)}
      data-theme={darkMode ? "dark" : ""}
    >
      <div className="calculator">
        <div className="navbar">
          <div className="navbar-toggle" onClick={() => setDarkMode(!darkMode)}>
            <div
              className={`navbar-circle ${
                darkMode ? "navbar-circle-active" : ""
              }`}
            >
              <img src={darkMode ? moonIcon : sunIcon} alt="mode" />
            </div>
          </div>
        </div>
        <Header handleKeyPress={handleKeyPress} />
        <Keypad handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default App;
