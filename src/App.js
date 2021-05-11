import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import MarsAround from "./components/MarsAround";
import Home from "./components/Home";
import CalculatorHome from "./components/calculator/CalculatorHome";
import GameClicker from "./components/clicker/GameClicker";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/restaurant">
            <MarsAround />
          </Route>
          <Route path="/GameClicker">
            <GameClicker />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
