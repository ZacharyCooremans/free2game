import './App.css';
import AllGames from './components/AllGames'
import Favorites from './components/Favorites'
import Navigation from './components/Navigation'
import GameDetails from './components/GameDetails'
import { Route, Switch} from "react-router-dom"
import React, { useState} from 'react'


function App() {
  const [fav, setFav] = useState([])
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <Switch>

        <Route path='/Favorites'>
          <Favorites />
        </Route>

        <Route path='/GameDetails/:id'>
          <GameDetails fav={fav} setFav={setFav} />
        </Route>

        <Route path='/'>
          <AllGames />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
