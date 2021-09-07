import './App.css';
import AllGames from './components/AllGames'
import GameDetails from './components/GameDetails'
import { Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path='/GameDetails'>
          <GameDetails />
        </Route>
        <Route path='/'>
          <AllGames />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
