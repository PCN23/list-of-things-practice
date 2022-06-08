import './App.css';
import { candies } from './candies.js';
import CandiesList from './CandiesList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <CandiesList candies={candies}/>
    </div>
  );
}

export default App;
