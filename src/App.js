import React, { useEffect, useRef } from 'react';
import L, { map } from 'leaflet';
import { LayersControl, Popup, MapContainer, TileLayer, GeoJSON, Marker, useMap } from 'react-leaflet';
import './App.css';
import testData from './testData.json';
import cycleMarker from './circle.png';



function App() {

  const mapRef = useRef();
  const center = [51.3396955, 12.3730747];

  const showCycleTraffic = () => {
    console.log('Button wurde gedrückt!'); 
  }

  const customIcon1 = L.icon ({
    iconUrl: require('./circle.png'),
    iconSize: [15, 15]
  });

  
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    /*const cycleIcon = new L.Icon ({
      iconUrl: cycleMarker
    });

    const cycleTrafficGeojson = new L.GeoJSON (testData, {
      pointToLayer: (feature, latlng) => {
        return L.marker (latlng, {
          icon: cycleIcon
        });
      }
    });

    cycleTrafficGeojson.addTo(map);*/
    
  
    function createCustomIcon (feature, latlng) {
      let myIcon = L.icon ({
        iconUrl: cycleMarker,
        iconSize: [7, 7]
      })
      return L.marker (latlng, {icon: myIcon});
    }
  
    let myLayerOptions = {
      pointToLayer: createCustomIcon
    }
    L.geoJSON (testData, myLayerOptions).addTo(map);

  
  }, []);

  return (
    <main id='main'>
      <div className='mapPart'>
        <div className='map'>
        <MapContainer ref={mapRef} center={center} zoom={13} scrollWheelZoom={false}>
            <TileLayer id='map'
              attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
            />
            
        </MapContainer>
        </div>
      </div>
    <div id='hinweise'>Legende aus cyclosm.org übernehmen</div>
    </main>
  );
  
}

export default App;

//<CircleMarker center={[51.3396955, 12.3730747]} style={circleStyle}/>

//<Marker position={[51.35, 12.3730747]} icon={customIcon1}/> 
