import logo from './logo.svg';
import './App.css';
import './components/games.css';
import GameClicker from './components/GameClicker'

function App() {
  return (
    <div className="App">
      <h1>Click to earn Coins</h1>
    <GameClicker/>
    </div>
  );
}

export default App;
