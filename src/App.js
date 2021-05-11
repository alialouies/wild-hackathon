import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            {/* <Home /> */}
          </Route>
          <Route path="/game">
            {/* <Game /> */}
          </Route>
          <Route path="/weather">
            {/* <Weather /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
