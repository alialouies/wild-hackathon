import React from "react";
import Navbar from './components/Navbar'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import MarsAround from './components/MarsAround'
import Home from './components/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/restaurant"><MarsAround/></Route>
    </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
