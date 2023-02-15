import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker } from 'react-leaflet';
import L from 'leaflet';
import './App.css';
import testData from './testData.json';

function App() {

  const position = [51.3396955, 12.3730747];

  
  const showCycleTraffic = () => {
    console.log('Button wurde gedrückt!'); 
  }

  const markerStyle = {
    backgroundColor: "blue",
    width: "10px",
    height: "10px",
    borderRadius: "50px"
  }

  return (
    
    <main id='main'>
      <div className='mapPart'>
        <div className='map'>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
            />
            <GeoJSON data={testData} icon={markerStyle}/>
          </MapContainer>
        </div>
        <div className='legend'>
          Legende
          <td>
            <tr>
              eigener Radweg
            </tr>
            <tr>
              Hallo
            </tr>
            <tr>
              Hallo
            </tr>
          </td>
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