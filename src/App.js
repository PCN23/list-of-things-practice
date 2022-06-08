import './App.css';
import { candies } from './candies.js';
import { soccerBall } from './soccerBall.js';
import CandiesList from './CandiesList';
import SoccerList from './SoccerList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <CandiesList candies={candies} />
      <hr />
      <SoccerList soccerBalls={soccerBall}/>

    </div>
  );
}

export default App;
