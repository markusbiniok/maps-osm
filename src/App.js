import './App.css';
import './Map.css';
import bicycle1 from './bicycle1.svg';
import testData from './testData.json';

import React, { useCallback, useState } from 'react';
import L from 'leaflet';
import { LayersControl, MapContainer, TileLayer, GeoJSON, CircleMarker, ZoomControl } from 'react-leaflet';


const mapCenter = [51.3396955, 12.3730747];
const mapZoom = 14;

//show cycle traffic
function DisplayCycleTraffic({ map }) {
  
  const showCycleTraffic = useCallback(() => {
    var markerStyle = {
      radius: 1,
      fillColor: '#ff0000',
      fillOpacity: 1,
      color: '#ff0000',
      weight: 2, 
      opacity: 1
    }

    //geoJSON points to mapLayer
    L.geoJSON (testData, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker (latlng, markerStyle);
      }
    }).addTo(map);
  }, [map]);

  return (
  
    <div className='button'>
      <button id='mapBtn1' onClick={showCycleTraffic}>Radverkehr</button> 
    </div>
  )
}

//from https://react-leaflet.js.org/docs/example-external-state/
//center map
function DisplayPosition({ map }) {

  const centerMap = useCallback(() => {
    map.setView(mapCenter, mapZoom)
  }, [map]);

  return (
    <p>
      <button id='mapBtn2' onClick={centerMap}>Karte zentrieren</button>
    </p>
  )
}

function App() {

  const [map, setMap] = useState(null); 

  return (
    <main id='main'>
      <div className='header'>
        Radverkehrsdaten und Radwegnutzung
      </div>
      <div className='mapPart'>
        <div className='map'>
          <MapContainer ref={setMap} center={mapCenter} zoom={mapZoom} scrollWheelZoom={true} zoomControl={false}>
            <TileLayer id='map'
              attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
            />
            <ZoomControl position='bottomright'/>
            <CircleMarker center={[51.3396955, 12.376]} /> 
            <LayersControl position="topright">
              <LayersControl.Overlay name="Radverkehr">
                <GeoJSON data={testData}/>
              </LayersControl.Overlay>
            </LayersControl>
          </MapContainer>
        </div>
        <div className='legend'>
          <p id='caption'>Legende</p>
          <p id='ut'>Radinfrastruktur</p>
          <div className='pathOptions'>
            <div id='span1'/><div id='p1'>Radweg</div> 
            <div id='span2'/><div id='p2'>Radweg</div> 
            <div id='span3'>
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <line x1="10%" x2="150%" y1="10%" y2="10%" strokeLinecap="butt" strokeDasharray="6,3" stroke="#0000ce" strokeWidth="20%"></line>
                  <line x1="10%" x2="150%" y1="70%" y2="70%" strokeLinecap="butt" stroke="#888" strokeWidth="10%"></line>
                  <rect x="10%" y="10%" width="140%" height="60%" fill="#e3e1e1"></rect></svg>
            </div><div id='p3'>Radfahrstreifen</div> 
            <div id='span4'/><div id='p4'>Fahrradstraße</div> 
          </div>
          <p id='ut'>Straßeninfrastruktur</p>
          <div className='streetInfra'>
            <div id='span5'/><div id='p5'>20 km/h</div> 
            <div id='span6'/><div id='p6'>30 km/h</div> 
            <div id='span7'/><div id='p7'>keine Kfz</div> 
            <div id='span8'/><div id='p8'>Fahrradabstellplatz</div> 
            <div> 
              <img id='span9' src={bicycle1} alt='bicycle icon'/>
            </div>
            <div id='p9'>Fahrradgeschäft</div>          
          </div>
        </div>
      </div>
      <div className='mapButtons'>
        <div className='mapButton1'>
              {map ? <DisplayCycleTraffic map={map} /> : null}   
        </div>
        <div className='mapButton2'> 
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