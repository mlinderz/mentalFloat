import React from 'react';
import '../App.css';
let place= "san%20Francisco"
function ExercisePage() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(data=>console.log("we have geolocation",data))
    
  }else{console.log("no geolocation")}

  return (
    <div className="App">
      <header className="App-header">
      <img src="/mentalfloat.png" className="App-logo" alt="logo" />
        </header>
        <h1>Exercise</h1>
        <iframe width="600" height="450" frameBorder="0" style={{border: 0}} src={`https://www.google.com/maps/embed/v1/search?q=workout%20classes%20in%20${place}%2C%20CA&key=AIzaSyCWL27bkwx4JyK9jrnycKqTnc44rtYDSaw`} allowFullScreen></iframe>

    </div>
  );
}

export default ExercisePage;