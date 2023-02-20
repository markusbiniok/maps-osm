import React, { useEffect, useRef } from 'react';
import L, { map } from 'leaflet';
import { LayersControl, Popup, MapContainer, TileLayer, GeoJSON, Marker, useMap } from 'react-leaflet';
import './App.css';
import testData from './testData.json';
import cycleMarker from './circle.png';


function App() {

  const mapRef = useRef();
  const center = [51.3396955, 12.3730747];

  const customIcon1 = L.icon ({
    iconUrl: require('./circle.png'),
    iconSize: [15, 15]
  });

  const centerMap = () => {
    console.log('Button wurde gedrückt');
  }
  

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    var markerStyle = {
      radius: 2,
      fillColor: '#ff0000',
      fillOpacity: 1,
      color: '#ff0000',
      weight: 1, 
      opacity: 1
    }
  
    L.geoJSON (testData, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker (latlng, markerStyle);
      }
    }).addTo(map);
  }, []);

  const showCycleTraffic = () => {
    console.log('Button wurde gedrückt');
  }

  return (
    <main id='main'>
      <div className='mapPart'>
        <div className='map'>
        <MapContainer ref={mapRef} center={center} zoom={13} scrollWheelZoom={false}>
            <TileLayer id='map'
              attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
            />
            <Marker position={[51.35, 12.3730747]} icon={customIcon1}/> 
        </MapContainer>
        </div>
        <div className='buttons'>
          <div className='button1'>
            <button id='btn1' onClick={showCycleTraffic}>Radverkehr</button>
          </div>
          <div className='button2'>
            <button id='btn2' onClick={centerMap}>Map zentrieren</button>
          </div>
        </div>
      </div>
    <div id='hinweise'>Legende aus cyclosm.org übernehmen</div>
    </main>
  );
  
}

export default App;

//<CircleMarker center={[51.3396955, 12.3730747]} style={circleStyle}/>

//<Marker position={[51.35, 12.3730747]} icon={customIcon1}/> 
