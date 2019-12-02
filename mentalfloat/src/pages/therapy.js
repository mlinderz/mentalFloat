import React from 'react';
import '../App.css';

function TherapyPage() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/mentalfloat.png" className="App-logo" alt="logo" />
        </header>
        <h1>Therapy</h1>
        <iframe width="600" height="450" frameBorder="0" style={{border: 0}} src="https://www.google.com/maps/embed/v1/search?q=therapists%20in%2094105%2C%20CA&key=AIzaSyCWL27bkwx4JyK9jrnycKqTnc44rtYDSaw" allowFullScreen></iframe>

    </div>
  );
}

export default TherapyPage;