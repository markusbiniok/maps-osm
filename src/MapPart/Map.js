import './Map.css';
import Legend from './Legend.js'
import testData from './testData.json';
import cycleData from './Radmengen_21-22.json';
import React, { useCallback, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';


//show demo-cycle-traffic
function DisplayDemoCycleTraffic({ map }) {
  
  const demoCycleTraffic = useCallback(() => {
    var el = document.getElementById('cb1');
    switch (el.checked) {
      case true:
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
        break;
      case false:
        map.eachLayer(function (layer) {
          if (layer instanceof L.CircleMarker) {
            layer.remove()
          }
        });
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
//manual counting on certain sections of the road network in the city of Leipzig
function DisplayCycleTraffic({ map }) {
  
  const cycleTraffic = useCallback(() => {
    var el = document.getElementById('cb2');
    switch (el.checked) {
      case true:
        var cycleDataStyle = {
          color: 'red'
        }
        L.geoJSON(cycleData, cycleDataStyle).addTo(map);
        break;
      case false:
        map.eachLayer(function (layer) {
          if (layer instanceof L.Polyline) {
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
        <input type="checkbox" id="cb2" onClick={cycleTraffic}/>
        <span className="slider round"/>
      </label>
      <p>Radverkehr</p>
    </div>
  )
}

function DisplayDzs({ map }) {

  const dzs = useCallback(() => {
    const dzs1 = [51.361892, 12.367823]; //Georg-Schumann-Straße
    const dzs2 = [51.346394, 12.376698]; //Gerberstraße
    const dzs3 = [51.338337, 12.383056]; //Grimmaischer Steinweg
    const dzs4 = [51.339290, 12.345644]; //Jahnallee
    const dzs5 = [51.326745, 12.373747]; //Karl-Liebknecht-Straße
    const dzs6 = [51.334458, 12.399261]; //Lene-Voigt-Park
    const dzs7 = [51.327305, 12.307163]; //Lützner Straße
    const dzs8 = [51.335879, 12.367335]; //Manetstraße
    const dzs9 = [51.330434, 12.354736]; //Sachsenbrücke
    const dzs10 = [51.320706, 12.386071]; //Semmelweisstraße
    const dzs11 = [51.340034, 12.408337]; //Wurzner Straße

    var el = document.getElementById('cb3');
    
    switch (el.checked) {
      case true:
        //method to show marker of all dzs
        var marker1 = L.marker(dzs1).addTo(map);
        var marker2 = L.marker(dzs2).addTo(map);
        var marker3 = L.marker(dzs3).addTo(map);
        var marker4 = L.marker(dzs4).addTo(map);
        var marker5 = L.marker(dzs5).addTo(map);
        var marker6 = L.marker(dzs6).addTo(map);
        var marker7 = L.marker(dzs7).addTo(map);
        var marker8 = L.marker(dzs8).addTo(map);
        var marker9 = L.marker(dzs9).addTo(map);
        var marker10 = L.marker(dzs10).addTo(map);
        var marker11 = L.marker(dzs11).addTo(map);
        
        marker1.bindPopup("Georg-Schumann-Straße");
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
        marker3.bindPopup("Grimmaischer Steinweg");
        marker3.on('mouseover', function (e) {
          this.openPopup();
        });
        marker3.on('mouseout', function (e) {
            this.closePopup();
        });
        marker4.bindPopup("Jahnallee");
        marker4.on('mouseover', function (e) {
          this.openPopup();
        });
        marker4.on('mouseout', function (e) {
            this.closePopup();
        });
        marker5.bindPopup("Karl-Liebknecht-Straße");
        marker5.on('mouseover', function (e) {
          this.openPopup();
        });
        marker5.on('mouseout', function (e) {
            this.closePopup();
        });
        marker6.bindPopup("Lene-Voigt-Park");
        marker6.on('mouseover', function (e) {
          this.openPopup();
        });
        marker6.on('mouseout', function (e) {
            this.closePopup();
        });
        marker7.bindPopup("Lützner Straße");
        marker7.on('mouseover', function (e) {
          this.openPopup();
        });
        marker7.on('mouseout', function (e) {
            this.closePopup();
        });
        marker8.bindPopup("Manetstraße");
        marker8.on('mouseover', function (e) {
          this.openPopup();
        });
        marker8.on('mouseout', function (e) {
            this.closePopup();
        });
        marker9.bindPopup("Sachsenbrücke");
        marker9.on('mouseover', function (e) {
          this.openPopup();
        });
        marker9.on('mouseout', function (e) {
            this.closePopup();
        });
        marker10.bindPopup("Semmelweisstraße");
        marker10.on('mouseover', function (e) {
          this.openPopup();
        });
        marker10.on('mouseout', function (e) {
            this.closePopup();
        });
        marker11.bindPopup("Wurzner Straße");
        marker11.on('mouseover', function (e) {
          this.openPopup();
        });
        marker11.on('mouseout', function (e) {
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
  
    <div className='mapBtn3'>
      <label className="switch">
        <input type="checkbox" id="cb3" onClick={dzs}/>
        <span className="slider round"/>
      </label>
      <p>Dauerzählstellen</p>
    </div>
  )
}

//from https://react-leaflet.js.org/docs/example-external-state/
//center map

const mapCenter = [51.336, 12.3730747];
const mapZoom = 14;

function MapCenter({ map }) {

  const centerMap = useCallback(() => {
    map.setView(mapCenter, mapZoom)
  }, [map]);
  
  return (
    <div className='mapBtn3'>
      <button id='btn3' onClick={centerMap}>Karte zentrieren</button>
    </div>
  )
}

function MapClear({ map }) {

  const clearMap = useCallback(() => {
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker) {
        layer.remove()
      }
    });
    map.eachLayer(function (layer) {
      if (layer instanceof L.Polyline) {
        layer.remove()
      }
    });
    map.eachLayer(function (layer) {
      if (layer instanceof L.CircleMarker) {
        layer.remove()
      }
    });
    document.getElementById('cb1').checked = false;
    document.getElementById('cb2').checked = false;
    document.getElementById('cb3').checked = false;
  }, [map]);
  
  return (
    <div className='mapBtn4'>
      <button id='btn4' onClick={clearMap}>clear map</button>
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
          {map ? <MapCenter map={map} /> : null}  
        </div>
        <div> 
          {map ? <MapClear map={map} /> : null}  
        </div>
      </div>
    </main>
  )
}

export default Map;