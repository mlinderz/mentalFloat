import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>How are you looking to feel better today?</h1>
        <h2></h2>
        <button>Sleep Better</button>
        <button>Take Better Care of Yourself</button>
        <button>Take a moment to meditate</button>
        <button>Read something Motivational</button>
        <button>Find someone to talk to</button>
        <button>Locate Recreational Support</button>
      </header>
    </div>
  );
}

export default App;
