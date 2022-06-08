import './App.css';
import { candies } from './candies.js';
import CandiesList from './CandiesList';
// import your arrays here

console.log(candies);
function App() {
  return (
    <div className="App">
      <CandiesList />
    </div>
  );
}

export default App;
