import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import MarsAround from "./components/MarsAround";
import Home from "./components/Home";
import CalculatorHome from "./components/calculator/CalculatorHome";
import GameClicker from "./components/clicker/GameClicker";
import Menu from "./components/Menu";
import Weather from "./components/Weather";
import MarsGame from "./components/MarsGame";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar isOpen={isOpen} handleChange={handleChange} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route path="/restaurant">
            <MarsAround isOpen={isOpen} handleChange={handleChange} />
          </Route>
          <Route path="/GameClicker">
            <GameClicker />
          </Route>
          <Route path="/calculator">
            <CalculatorHome />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/mars-game">
            <MarsGame />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
