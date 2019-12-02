import React from 'react';
import Button from "../components/Button";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/mentalfloat.png" className="App-logo" alt="logo" />
        </header>
        <h1>How are you looking to feel better today?</h1>
        <h2></h2>
        <div class="row">
        <div class="column">
        <Button src="/meditate.jpeg" href= "/meditate"/>
        <Button src="/motivation.jpeg" href= "/motivation"/>
        </div>
        <div class="column">
        <Button src="/sleep.jpeg" href="/sleep"/>
        <Button src="/therapy.jpeg" href= "/therapy"/>
        </div>
        <div class="column">
        <Button src="/workout.png" href= "/workout"/>
        <Button src="/outside.png" href= "/outside"/>
        </div>
        </div>

    </div>
  );
}

export default App;