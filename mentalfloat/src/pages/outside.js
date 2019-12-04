import React from 'react';
import '../App.css';
import Button from '../components/Button';


function OutsidePage() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/mentalfloat.png" className="App-logo" alt="logo" />
        </header>
        <h1>Hikes Nearby</h1>
        <iframe width="600" height="450" frameBorder="0" style={{border: 0}} src="https://www.google.com/maps/embed/v1/search?q=hikes%20in%20san%20Francisco%2C%20CA&key=AIzaSyCWL27bkwx4JyK9jrnycKqTnc44rtYDSaw" allowFullScreen></iframe>
        <br></br>
        <Button src="/hike.png" href= "https://www.rei.com/blog/hike/best-bay-area-hikes"/>
    </div>
  );
}

export default OutsidePage;