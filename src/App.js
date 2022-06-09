import './App.css';
import { candies } from './candies.js';
import { soccerBall } from './soccerBall.js';
import { transportation } from './transportation.js';
import { fruits } from './fruits.js';
import CandiesList from './CandiesList';
import SoccerList from './SoccerList';
import TransportationList from './TransportationList';
import FruitsList from './FruitsList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <CandiesList candies={candies} />
      <hr />
      <SoccerList soccerBalls={soccerBall}/>
      <hr />
      <TransportationList transportations={transportation}/>
      <hr />
      <FruitsList fruits={fruits}/>

    </div>
  );
}

export default App;
