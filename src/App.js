import './App.css';
import { candies } from './candies.js';
import { soccerBall } from './soccerBall.js';
import { transportation } from './transportation.js';
import CandiesList from './CandiesList';
import SoccerList from './SoccerList';
import TransportationList from './TransportationList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <CandiesList candies={candies} />
      <hr />
      <SoccerList soccerBalls={soccerBall}/>
      <hr />
      <TransportationList transportations={transportation}/>

    </div>
  );
}

export default App;
