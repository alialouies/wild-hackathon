import "./App.css";
import GameClicker from "./components/clicker/GameClicker";
import React from "react";
import Navbar from './components/Navbar'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import MarsAround from './components/MarsAround'
import Home from './components/Home'

function App() {

  return (<>
    <div className="App">
    <br></br>
     
    
  
    
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/restaurant"><MarsAround/></Route>
      <Route path="/GameClicker"><GameClicker/></Route>
    </Switch>
    </BrowserRouter></div>
     
      
    </>)
  
}

export default App;
