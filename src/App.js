import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/league/:teamId">
            <LeagueDetail></LeagueDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
