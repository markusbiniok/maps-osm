import './Map.css';
import Legend from './Legend.js'
import testData from './testData.json';

import React, { useCallback, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, ZoomControl, Marker, LayersControl, LayerGroup } from 'react-leaflet';


const mapCenter = [51.336, 12.3730747];
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

function Map() {

  const [map, setMap] = useState(null); 
  const dzs1 = [51.339290, 12.345644];
  const dzs2 = [51.346394, 12.376698];
  const dzs3 = [51.326745, 12.373747];
  const dzs4 = [51.334458, 12.399261];
  const dzs5 = [51.335879, 12.367335];
  const dzs6 = [51.320706, 12.386071];

  return (
    <main id='mainPart'>
      <div className='mapPart'>
        <div className='map'>
          <MapContainer ref={setMap} center={mapCenter} zoom={mapZoom} scrollWheelZoom={true} zoomControl={false}>
            <TileLayer id='map'
              attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
            />
            <ZoomControl position='bottomright'/>
            <LayersControl position="topright">
              <LayersControl.Overlay name="Dauerzählstellen">
                <LayerGroup>
                  <Marker position={dzs1}/>
                  <Marker position={dzs2}/>
                  <Marker position={dzs3}/>
                  <Marker position={dzs4}/>
                  <Marker position={dzs5}/>
                  <Marker position={dzs6}/>
                </LayerGroup>
              </LayersControl.Overlay>
            </LayersControl>
          </MapContainer>
        </div>
        <Legend/>
      </div>
      <div className='mapButtons'>
        <div className='mapButton1'>
              {map ? <DisplayCycleTraffic map={map} /> : null}   
        </div>
        <div className='mapButton2'> 
            {map ? <DisplayPosition map={map} /> : null}  
        </div>
      </div>
    </main>
  )
}

export default Map;


//<CircleMarker center={[51.3396955, 12.376]} /> 

/*<LayersControl position="topright">
<LayersControl.Overlay name="Radverkehr">
<GeoJSON data={testData}/>
</LayersControl.Overlay>
</LayersControl>*/