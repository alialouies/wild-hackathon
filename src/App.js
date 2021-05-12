import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import MarsAround from "./components/MarsAround";
import Home from "./components/Home";
import CalculatorHome from "./components/calculator/CalculatorHome";
import GameClicker from "./components/clicker/GameClicker";
import Menu from "./components/Menu";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route path="/restaurant">
            <MarsAround />
          </Route>
          <Route path="/GameClicker">
            <GameClicker />
          </Route>
          <Route path="/calculator">
            <CalculatorHome />
          </Route>
          <Route path="/killearth">
            <Menu />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
