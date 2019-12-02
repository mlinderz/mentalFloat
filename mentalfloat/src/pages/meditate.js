import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player';

function MeditatePage() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/mentalfloat.png" className="App-logo" alt="logo" />
        </header>
        <h1>Guided Meditatation</h1>
        <h3> <ReactPlayer url='https://www.youtube.com/watch?v=4EaMJOo1jks' playing /></h3>
    </div>
  );
}

export default MeditatePage;