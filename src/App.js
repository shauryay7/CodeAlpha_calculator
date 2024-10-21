import React, { useState } from "react";
import ButtonsContainer from "./components/ButtonsContainer";
import DisplayContainer from "./components/DisplayContainer";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  function handleClick(e) {
    const targetValue = e.target.name;
    setDisplay(display + targetValue);
  }

  function operatorClick(operator) {
    let lastCharacter = display.slice(-2);
    let operatorsArray = ["+ ", "- ", "* ", "/ "];

    if (display === "" || operatorsArray.includes(lastCharacter)) return;

    setDisplay((prevDisplay) => prevDisplay + " " + operator + " ");
  }

  function handleEqual() {
    // Avoid calculation if the expression ends with an operator
    let lastCharacter = display.slice(-1);
    if (["+", "-", "*", "/"].includes(lastCharacter)) return;

    try {
      const resultValue = calculate(display);
      setResult(resultValue);
    } catch (error) {
      setDisplay("Error");
    }
  }

  function calculate(expression) {
    const tokens = expression.split(" ");
    let resultValue = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextNumber = parseFloat(tokens[i + 1]);

      switch (operator) {
        case "+":
          resultValue += nextNumber;
          break;
        case "-":
          resultValue -= nextNumber;
          break;
        case "*":
          resultValue *= nextNumber;
          break;
        case "/":
          if (nextNumber === 0) {
            return "Error (Div by 0)";
          }
          resultValue /= nextNumber;
          break;
        default:
          resultValue = "Error";
      }
    }
    return resultValue;
  }

  function clear() {
    setDisplay("");
    setResult("");
  }

  function backspace() {
    if (display.length > 0) {
      setDisplay(display.trim().slice(0, -1));
    }
  }

  return (
      <>
        <div className="container">
          <div className="calculator">
            <DisplayContainer
                display={display}
                result={result}
                backspace={backspace}
                clear={clear}
            />
            <ButtonsContainer
                operatorClick={operatorClick}
                handleClick={handleClick}
                handleEqual={handleEqual}
            />
          </div>
        </div>
      </>
  );
}

export default App;