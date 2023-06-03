import './App.css';
import { Country } from './component/city/country';
import { Cardlist } from './component/cards/Cardlist';
import { Randomcard } from './component/cards/Randomcard';

function App() {
  return (
    <div className="App">
      <Country />
      <Randomcard />
      <Cardlist />
    </div>
  );
}

export default App;
