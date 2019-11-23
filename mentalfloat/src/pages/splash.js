import React from 'react';
import Button from "../components/Button";




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
        <Button text='Take a Moment to Meditate' src="/meditate.jpeg" href= "/meditate"/>
        </div>
        <div class="column">
        <Button text='Read Something Motivational' src="/motivation.jpeg" href= "/motivation"/>
        <Button text='Find Someone to Talk To' src="/therapy.jpeg" href= "/therapy"/>
        </div>
        <div class="column">
        <Button text='Get Moving' src="/workout.jpeg" href= "/workout"/>
        <Button text='Get Outside' src="/outside.jpeg" href= "/outside"/>
        </div>
        </div>

    </div>
  );
}

export default App;