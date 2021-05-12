import React, { useState } from "react";
import "./CalculatorHome.css";

const CalculatorHome = () => {
  const [text, setText] = useState("");
  const [textTwo, setTextTwo] = useState("");

  const updateSubmit = (e) => {
    e.preventDefault();
    setTextTwo(text);
  };
  const marsAge = (textTwo * 365) / 687;
  console.log(textTwo);
  return (
    <div className="home-text" idName="calculator">
      <form className="home-text" onSubmit={updateSubmit}>
        <label>
          <input
            text="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button className="home-text" type="submit">
          CALCULATE
        </button>
      </form>

      <p>Your mars age is: {marsAge.toFixed(2)}</p>
    </div>
  );
};

export default CalculatorHome;
