import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header/Header';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  return (
    <Router>

      <Switch>

        <Route exact path='/' >
          <Header></Header>
          <Home></Home>

        </Route>
        <Route path="/home">
          <Header></Header>
          <Home></Home>

        </Route>
        <Route path="/team/:teamId">
          <TeamDetails></TeamDetails>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>

        </Route>
      </Switch>
    </Router>

  );
}

export default App;
