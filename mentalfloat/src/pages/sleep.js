import React from 'react';
import '../App.css';
import Button from "../components/Button";

function SleepPage() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/mentalfloat.png" className="App-logo" alt="logo" />
        </header>
        <h1>Sleep</h1>
        <h2></h2>
        <div class="row">
        <div class="column">
        <Button src="/sajewellness.png" href= "https://www.saje.com/"/>
        </div>
        <div class="column">

        <Button src="/eaze.png" href="https://www.eaze.com/"/>
        </div>
        <div class="column">
        <Button src="/spafinder.png" href= "https://www.spafinder.com/"/>
        </div>
        </div>
    </div>
  );
}

export default SleepPage;