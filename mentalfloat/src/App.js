import React from 'react';
import Button from "./components/Button";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Sleep from './pages/sleep';
import Meditate from './pages/meditate';
import Motivation from './pages/motivation';
import Therapy from './pages/therapy';
import Workout from './pages/exercise';
import Outside from './pages/outside';
import Splash from './pages/splash';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route path="/sleep" component={Sleep}/>
          <Route path="/meditate" component={Meditate}/>
          <Route path="/motivation" component={Motivation}/>
          <Route path="/therapy" component={Therapy}/>
          <Route path="/workout" component={Workout}/>
          <Route path="/outside" component={Outside}/>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
