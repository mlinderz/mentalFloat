import React from 'react';
import Button from "./components/Button"
import './App.css';

function SleepPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/mindfloat.jpeg" className="App-logo" alt="logo" />
        </header>
        <h1>Sleep</h1>
        <h2></h2>
        <div class="row">
        <div class="column">
        <Button text='Alternative Sleep Support' src="/sleep.jpeg" href="/sleep"/>
        <Button text='Take a Moment to Meditate' src="/meditate.jpeg" href="https://www.google.com"/>
        </div>
        </div>

    </div>
  );
}

export default SleepPage;