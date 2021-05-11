import logo from "./logo.svg";
import "./App.css";
import GameClicker from "./components/clicker/GameClicker";

function App() {
  return (
    <div className="App">
      <h1>Click to earn Coins</h1>
      <GameClicker />
    </div>
  );
}

export default App;
