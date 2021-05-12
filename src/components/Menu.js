import React from "react";
import "../styles/Home.css";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  // function handleClick() {
  //   history.push("/menu");
  // }
  return (
    <div className="home">
      <div id="menu-container">
        <button className="menu-text" onClick={() => history.push("/")}>
          Home
        </button>
        <button className="menu-text" onClick={() => history.push("/GameClicker")}>
          Gain Money
        </button>
        <br></br>
        <button className="menu-text" onClick={() => history.push("/mars-game")}>
          Kill Earth Game
        </button>
        <br></br>
        <button className="menu-text" onClick={() => history.push("/calculator")}>
          Calculate Mars Age
        </button>
        <br></br>
        <button className="menu-text" onClick={() => history.push("/restaurant")}>
          FOOD SHOP
        </button>
        <br></br>
        <button className="menu-text" onClick={() => history.push("/weather")}>
          Mars Weather
        </button>
        <br></br>
      </div>
    </div>
  );
};

export default Menu;
