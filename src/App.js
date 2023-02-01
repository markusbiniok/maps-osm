import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import radwege from './cyclePath.geojson';

function App() {

  const position = [51.3396955, 12.3730747];

  const showCycle = () => {
    console.log('Button wurde gedrückt!'); 
  }

  return (
    <main id='main'>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
      />
    </MapContainer>
    <div className='button'>
      <button id='btn1' onClick={showCycle}>Radverkehr</button>
    </div>
    </main>
  );
}

export default App;


//<GeoJSON data={radwege} /> nach TileLayer