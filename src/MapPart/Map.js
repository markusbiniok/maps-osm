import './Map.css';
import Legend from './Legend.js'
import testData from './testData.json';
import cycleData from './Radmengen_21-22.geojson';

import React, { useCallback, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';


const mapCenter = [51.336, 12.3730747];
const mapZoom = 14;


//show demo-cycle-traffic
function DisplayDemoCycleTraffic({ map }) {
  
  const demoCycleTraffic = useCallback(() => {
    var el = document.getElementById('cb1');
    switch (el.checked) {
      case true:
        L.geoJSON (testData).addTo(map);
        break;
      case false:
        console.log('false');
        break;
      default:
        break;
    }
  }, [map]);

  return (
  
    <div className='mapBtn1'>
      <label className="switch">
        <input type="checkbox" id="cb1" onClick={demoCycleTraffic}/>
        <span className="slider round"/>
      </label>
      <p>Demo Radverkehr</p>
    </div>
  )
}

//show demo-cycle-traffic
function DisplayCycleTraffic({ map }) {
  
  const cycleTraffic = useCallback(() => {
    var el = document.getElementById('cb3');
    switch (el.checked) {
      case true:
        L.geoJSON(JSON.parse(cycleData)).addTo(map);
        break;
      case false:
        console.log('false');
        break;
      default:
        break;
    }
  }, [map]);

  return (
  
    <div className='mapBtn3'>
      <label className="switch">
        <input type="checkbox" id="cb3" onClick={cycleTraffic}/>
        <span className="slider round"/>
      </label>
      <p>Radverkehr</p>
    </div>
  )
}

function DisplayDzs({ map }) {

  const dzs = useCallback(() => {
    const dzs1 = [51.339290, 12.345644]; //Jahnallee
    const dzs2 = [51.346394, 12.376698]; //Gerberstraße
    const dzs3 = [51.326745, 12.373747]; //Karl-Liebknecht-Straße
    const dzs4 = [51.334458, 12.399261]; //Lene-Voigt-Park
    const dzs5 = [51.335879, 12.367335]; //Manetstraße
    const dzs6 = [51.320706, 12.386071]; //Semmelweisstraße

    var el = document.getElementById('cb2');
    
    switch (el.checked) {
      case true:
        //method to show marker of all dzs
        var marker1 = L.marker(dzs1).addTo(map);
        var marker2 = L.marker(dzs2).addTo(map);
        var marker3 = L.marker(dzs3).addTo(map);
        var marker4 = L.marker(dzs4).addTo(map);
        var marker5 = L.marker(dzs5).addTo(map);
        var marker6 = L.marker(dzs6).addTo(map);
        
        marker1.bindPopup("Jahnallee");
        marker1.on('mouseover', function (e) {
          this.openPopup();
        });
        marker1.on('mouseout', function (e) {
            this.closePopup();
        });
        marker2.bindPopup("Gerberstraße");
        marker2.on('mouseover', function (e) {
          this.openPopup();
        });
        marker2.on('mouseout', function (e) {
            this.closePopup();
        });
        marker3.bindPopup("Karl-Liebknecht-Straße");
        marker3.on('mouseover', function (e) {
          this.openPopup();
        });
        marker3.on('mouseout', function (e) {
            this.closePopup();
        });
        marker4.bindPopup("Lene-Voigt-Park");
        marker4.on('mouseover', function (e) {
          this.openPopup();
        });
        marker4.on('mouseout', function (e) {
            this.closePopup();
        });
        marker5.bindPopup("Manetstraße");
        marker5.on('mouseover', function (e) {
          this.openPopup();
        });
        marker5.on('mouseout', function (e) {
            this.closePopup();
        });
        marker6.bindPopup("Semmelweisstraße");
        marker6.on('mouseover', function (e) {
          this.openPopup();
        });
        marker6.on('mouseout', function (e) {
            this.closePopup();
        });
        break;
      case false:
        //method to remove all marker of all dzs
        map.eachLayer(function (layer) {
          if (layer instanceof L.Marker) {
            layer.remove()
          }
        });
        break;
      default:
        break;
    }
  }, [map]);

  return (
  
    <div className='mapBtn2'>
      <label className="switch">
        <input type="checkbox" id="cb2" onClick={dzs}/>
        <span className="slider round"/>
      </label>
      <p>Dauerzählstellen</p>
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
    <div className='mapBtn3'>
      <button id='btn3' onClick={centerMap}>Karte zentrieren</button>
    </div>
  )
}

function Map() {

  const [map, setMap] = useState(null); 

  /*var heatmap = h337.create({
    container: document.getElementsByClassName('map')
  });

  heatmap.setData ({
    max: 5,
    data: [{x: 10, y: 15, value: 5}]
  });*/

  return (
    <main id='mainPart'>
      <div className='mapPart'>
        <div className='map'>
          <MapContainer ref={setMap} center={mapCenter} zoom={mapZoom} scrollWheelZoom={true} zoomControl={false}>
            <TileLayer id='map'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
            />
            <ZoomControl position='bottomright'/>       
          </MapContainer>
        </div>
        <Legend/>
      </div>
      <div className='mapButtons'>
        <div>
          {map ? <DisplayDemoCycleTraffic map={map} /> : null}   
        </div> 
        <div>
          {map ? <DisplayCycleTraffic map={map} /> : null}   
        </div>
        <div>
          {map ? <DisplayDzs map={map} /> : null}   
        </div> 
        <div> 
          {map ? <DisplayPosition map={map} /> : null}  
        </div>
      </div>
    </main>
  )
}

export default Map;