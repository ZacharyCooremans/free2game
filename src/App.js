import './App.css';
import Search from './components/Search'
import AllGames from './components/AllGames'
import Favorites from './components/Favorites'
import Navigation from './components/Navigation'
import GameDetails from './components/GameDetails'
import { Route, Switch} from "react-router-dom"

function App() {
  const fav = []
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <Switch>

        <Route path='/Search'>
          <Search />
        </Route>

        <Route path='/Favorites'>
          <Favorites />
        </Route>

        <Route path='/GameDetails/:id'>
          <GameDetails fav={fav} />
        </Route>

        <Route path='/'>
          <AllGames />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
