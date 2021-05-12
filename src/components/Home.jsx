import React from "react";
import "../styles/Home.css";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  function handleClick() {
    history.push("/menu");
  }
  return (
    <>
      <div className="home">
        <div id="home-container">
          <button className="home-text" onClick={handleClick}>
            MARS first web
          </button>
          <div className="home-txt">Welcome to the first Web network on Mars!</div>
        </div>
      </div>
    </>
  );
}

export default Home;
