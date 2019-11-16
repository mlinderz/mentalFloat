import React from 'react';
import Button from "./components/Button"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/meditate.jpeg" className="App-logo" alt="logo" />
        <h1>How are you looking to feel better today?</h1>
        <h2></h2>
        <button>Sleep Better</button>
        <button>Take Better Care of Yourself</button>
        <Button text='Take a moment to meditate' src="/meditate.jpeg" href="https://www.google.com"/>
        <button>Read something Motivational</button>
        <button>Find someone to talk to</button>
        <button>Locate Recreational Support</button>
      </header>
    </div>
  );
}

export default App;
