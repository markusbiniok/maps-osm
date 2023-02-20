import React from 'react';
import { LayersControl, Popup, MapContainer, TileLayer, GeoJSON, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import './App.css';
import testData from './testData.json';

function App() {

  const center = [51.3396955, 12.3730747];

  const showCycleTraffic = () => {
    console.log('Button wurde gedrückt!'); 
  }

  const myIcon = L.icon ({
    iconUrl: require('./circle.png'),
    iconSize: [15, 15]
  });
  
  /*const map = useMap();
  L.map('map').setView([51.3396955, 12.3730747], 12);
  L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);*/


  return (
    <main id='main'>
      <div className='mapPart'>
        <div className='map'>
        <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
            <TileLayer id='map'
              attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
            />
          <LayersControl position="topright" collapsed={false} >
            <LayersControl.Overlay name="Test Cycle Data">
              <GeoJSON data={testData} coordsToLatLng/>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Marker as Image 'Circle'">
              <Marker position={[51.35, 12.3730747]} icon={myIcon}/>            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
        </div>
      </div>
    <div id='hinweise'>Legende aus cyclosm.org übernehmen</div>
    </main>
  );
  
}

export default App;

//<CircleMarker center={[51.3396955, 12.3730747]} style={circleStyle}/>
