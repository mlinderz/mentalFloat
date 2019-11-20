import React from 'react';
import Button from "./components/Button";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Sleep from './components/sleep';
import Meditate from './components/meditate';
import Motivation from './components/motivation';
import Therapy from './components/therapy';
import Workout from './components/exercise';
import Outside from './components/outside';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/mindfloat.jpeg" className="App-logo" alt="logo" />
        </header>
        <h1>How are you looking to feel better today?</h1>
        <h2></h2>
        <div class="row">
        <div class="column">
        <Button text='Alternative Sleep Support' src="/sleep.jpeg" href="/sleep"/>
        <Button text='Take a Moment to Meditate' src="/meditate.jpeg" href= {Meditate}/>
        </div>
        <div class="column">
        <Button text='Read Something Motivational' src="/motivation.jpeg" href= {Motivation}/>
        <Button text='Find Someone to Talk To' src="/therapy.jpeg" href= {Therapy}/>
        </div>
        <div class="column">
        <Button text='Get Moving' src="/workout.jpeg" href= {Workout}/>
        <Button text='Get Outside' src="/outside.jpeg" href= {Outside}/>
        </div>
        </div>

    </div>
  );
}

export default App;
