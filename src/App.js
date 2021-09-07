import './App.css';
import AllGames from './components/AllGames'
import Details from './components/Details'
import { Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path='/details'>
          <Details />
        </Route>
        <Route path='/'>
          <AllGames />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
