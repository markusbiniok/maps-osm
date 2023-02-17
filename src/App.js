import React from 'react';
import { MapContainer, TileLayer, GeoJSON, CircleMarker, Circle } from 'react-leaflet';
import L, { map } from 'leaflet';
import './App.css';
import testData from './testData.json';

function App() {

  const mapCenter = [51.3396955, 12.3730747];

  
  const showCycleTraffic = () => {
    console.log('Button wurde gedrückt!'); 
  }

  const testStyle = () => ({
    
  });

  const circleStyle = {
    radius: 3,
    color: "#ff0000",
    weight: 4,
    opacity: 1,
  }
  
  return (
    
    <main id='main'>
      <div className='mapPart'>
        <div className='map'>
          <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={false}>
            <TileLayer id='map'
              attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
            />
            <GeoJSON data={testData} style={testStyle}/>
            <CircleMarker center={[51.3396955, 12.3730747]} style={circleStyle}/>
          </MapContainer>
        </div>
      </div>
    <div className='button'>
      <button id='btn1' onClick={showCycleTraffic}>Radverkehr</button>
    </div>
    <div id='hinweise'>Legende aus cyclosm.org übernehmen</div>
    </main>
  );
}

export default App;