import React from "react";

function DisplayContainer({ display, result, backspace, clear }) {
  return (
    <>
      <div className="display-container">
        <div className="display">
          <div className="input-field">{display}</div>
          <div className="answer-field">{result}</div>
        </div>
        <div className="other-btns">
          <button className="colored-btn" onClick={backspace}>
            <img className="btn" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKu7a8E2z81S7qvjaQCHdtFvnJqvH4DooBA&s"} alt="backspace" />

          </button>
          <button onClick={clear} className="AC-btn colored-btn">
            AC
          </button>
        </div>
      </div>
    </>
  );
}

export default DisplayContainer;
