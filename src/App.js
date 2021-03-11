import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home/home">
          <Home></Home>
        </Route>
        <Route path="/team/:idTeam">
          <TeamDetails></TeamDetails>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
            <NoMatch></NoMatch>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
