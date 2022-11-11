import React, { useState } from "react";
import Header from "./components/header/header";
import Keypad from "./components/keypad/keypad";
import "./App.css";
import moonIcon from "./assests/moon.png";
import sunIcon from "./assests/sun.png";

const usedKeyCodes = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
  104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109, 110, 173,
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["-", "*", "+", "/"];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleKeyPress = (keyCode, key) => {
    if (!keyCode) return;
    if (!usedKeyCodes.includes(keyCode)) return;

    if (numbers.includes(key)) {
      console.log("number");
      if (key === "0") {
        if (expression.length === 0) return;
      }
      if (key === ".") {
        if (!expression) return;
        if (expression.slice(-1) === ".") return;
      }
      setExpression(expression + key);
    } else if (operators.includes(key)) {
      console.log("operators");
      if (!expression) return;
      const lastChar = expression.slice(-1);
      if (operators.includes(lastChar)) return;
      if (lastChar === ".") return;
      setExpression(expression + key);
    } else if (keyCode === 8) {
      console.log("backspace");
      if (!expression) return;
      setExpression(expression.slice(0, -1));
    } else if (keyCode === 13) {
      console.log("enter");
      if (!expression) return;
      calculateResult(expression);
    }
  };
  const calculateResult = (exp) => {
    if (!exp) return;
    const lastChar = exp.slice(-1);
    if (!numbers.includes(lastChar)) exp = exp.slice(0, -1);
    const answer = eval(exp).toFixed(2) + "";
    setResult(answer);
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
        <Header
          handleKeyPress={handleKeyPress}
          expression={expression}
          result={result}
        />
        <Keypad handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default App;
