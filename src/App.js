import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import L, { map } from 'leaflet';
import { LayersControl, Popup, MapContainer, TileLayer, GeoJSON, Marker, useMap, Circle, CircleMarker, useMapEvent } from 'react-leaflet';
import './App.css';
import testData from './testData.json';


const mapCenter = [51.3396955, 12.3730747];
const mapZoom = 13;


//from https://react-leaflet.js.org/docs/example-external-state/
function DisplayPosition({ map }) {

  const onClick = useCallback(() => {
    map.setView(mapCenter, mapZoom)
  }, [map]);

  return (
    <p>
      <button onClick={onClick}>Karte zentrieren</button>
    </p>
  )
}

function DisplayCycleTraffic({ map }) {
  
  const onClick = useCallback(() => {
    var markerStyle = {
      radius: 1,
      fillColor: '#ff0000',
      fillOpacity: 1,
      color: '#ff0000',
      weight: 2, 
      opacity: 1
    }
  
    L.geoJSON (testData, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker (latlng, markerStyle);
      }
    }).addTo(map);
  }, [map]);

  return (
    <p>
      <button onClick={onClick}>Radverkehr</button>
    </p>
  )
}



function App() {
  const [map, setMap] = useState(null);

  const showCycleTraffic = () => {
    console.log('Button wurde gedrückt');
  }

  return (
    <main id='main'>
      <div className='header'>
        Radverkehrsdaten und Radwegnutzung
      </div>
      <div className='mapPart'>
        <div className='map'>
        <MapContainer ref={setMap} center={mapCenter} zoom={mapZoom} scrollWheelZoom={false}>
          <TileLayer id='map'
            attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
          />
          <CircleMarker center={[51.3396955, 12.376]} /> 
        </MapContainer>
        </div>
        <div className='legend'>
          <p id='caption'>Legende</p>
          <p id='ut'>Radinfrastruktur</p>
          <div className='pathOptions'>
            <p><span id='span1'/> Radweg</p>
            <p><span id='span4'/> ausgewiesener Radweg</p>
            <p><span id='span2'>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <line x1="10%" x2="150%" y1="10%" y2="10%" strokeLinecap="butt" strokeDasharray="6,3" stroke="#0000ce" strokeWidth="20%"></line>
                  <line x1="10%" x2="150%" y1="70%" y2="70%" strokeLinecap="butt" stroke="#888" strokeWidth="10%"></line>
                  <rect x="10%" y="10%" width="140%" height="60%" fill="#e3e1e1"></rect>
              </svg>
            </span> Radfahrstreifen</p>
            <p><span id='span3'/> Fahrradstraße</p>
          </div>
        </div>
        </div>
        <div className='buttons'> 
          <div id='btn1'>
            {map ? <DisplayCycleTraffic map={map} /> : null}        
          </div>
          <div id='btn2'>
            {map ? <DisplayPosition map={map} /> : null}        
          </div>
        </div>
      <div id='hinweise'>
        Legende aus cyclosm.org übernehmen
      </div>
    </main>
  )
}

export default App;

//<CircleMarker center={[51.3396955, 12.3730747]} style={circleStyle}/>