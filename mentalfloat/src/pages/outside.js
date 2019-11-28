import React from 'react';
import '../App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// render() {
//   return (
//       <Map
//         google={this.props.google}
//         zoom={8}
//         style={mapStyles}
//         initialCenter={{ lat: 47.444, lng: -122.176}}
//       />
//   );
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCWL27bkwx4JyK9jrnycKqTnc44rtYDSaw'
// })(MapContainer);


function OutsidePage() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/mentalfloat.png" className="App-logo" alt="logo" />
        </header>
        <h1>Outside</h1>
    </div>
  );
}

export default OutsidePage;