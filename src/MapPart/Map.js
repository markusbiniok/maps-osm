import './Map.css';
import './ButtonDesign.css';
import 'leaflet.heat';
import Legend from './Legend.js';
import React, {  useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet';
import cycleData from './data/Radmengen_21-22.json';
import locationIcon from './images/icon_location.png';
//import testData from './data/testData.json';
//import centerIcon from '.images/icon_center.png';


const mapCenter = [51.336, 12.3730747];
const mapZoom = 14;


//show demo-cycle-traffic
/*function DisplayDemoCycleTraffic({ map }) //external state
{
  const demoCycleTraffic = () => {

    switch (document.getElementById('cb1').checked) {
      case true:
        var markerDemoCycleTraffic = {
          radius: 1,
          fillColor: '#8a1c82',
          fillOpacity: 1,
          color: '#8a1c82',
          weight: 2, 
          opacity: 1
        }
        //geoJSON points to mapLayer
        L.geoJSON (testData, {
          pointToLayer: function (feature, latlng) {
            return L.circleMarker (latlng, markerDemoCycleTraffic);
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
  };

  return (
    <div className='btnDemoCycleTraffic'>
      <label className='switch'>
        <input type='checkbox' id='cb1' onClick={demoCycleTraffic}/>
        <span className='slider round'/>
      </label>
      <p>Demo Radverkehr</p>
    </div>
  )
}*/

//show cycle-traffic
//manual counting on certain sections of the road network in the city of Leipzig
function DisplayCycleTraffic({ map }) {
  
  const showCycleTraffic = () => {
    var cycleDataStyle = {
      color: 'red'
    }
    L.geoJSON(cycleData, cycleDataStyle).addTo(map);

      /*case false:
        map.eachLayer(function (layer) {
          if (layer instanceof L.Polyline) {
            layer.remove()
          }
        });
        break;
      default:
        break;
    }*/
  };

  return (
    <div className='btnCycleTraffic'>
      <button id='cycleTraffic' onClick={showCycleTraffic}>Radverkehr</button>
    </div>
  )
}

function DisplayDzs({ map }) {

  const dzs = () => {
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

    const markerDzs = new L.Icon({
      iconUrl: require("./images/icon_dzs.png"),
      iconSize: [35, 35]
    });

    var marker1 = L.marker(dzs1, {icon: markerDzs}).addTo(map);
    var marker2 = L.marker(dzs2, {icon: markerDzs}).addTo(map);
    var marker3 = L.marker(dzs3, {icon: markerDzs}).addTo(map);
    var marker4 = L.marker(dzs4, {icon: markerDzs}).addTo(map);
    var marker5 = L.marker(dzs5, {icon: markerDzs}).addTo(map);
    var marker6 = L.marker(dzs6, {icon: markerDzs}).addTo(map);
    var marker7 = L.marker(dzs7, {icon: markerDzs}).addTo(map);
    var marker8 = L.marker(dzs8, {icon: markerDzs}).addTo(map);
    var marker9 = L.marker(dzs9, {icon: markerDzs}).addTo(map);
    var marker10 = L.marker(dzs10, {icon: markerDzs}).addTo(map);
    var marker11 = L.marker(dzs11, {icon: markerDzs}).addTo(map);
    
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
  };

  return (
    <div className='btnDzs'>
      <button id='dzs' onClick={dzs}>Dauerzählstellen</button>
    </div>
  )
}

function DisplayHeatmap({ map }) {

  const showHeatmap = () => {
    window.alert('Heatmap anzeigen');
  }
  
  return (
    <div className='btnHeatmap'>
      <button id='heatmap' onClick={showHeatmap}>Heatmap</button>
    </div>
  )
}

function MapClear({ map }) {

  const clearMap = () => {
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
    map.setView(mapCenter, mapZoom);
  };
  
  return (
    <div className='btnClear'>
      <button id='clearAll' onClick={clearMap}>clear map</button>
    </div>
  )
}

//from https://react-leaflet.js.org/docs/example-external-state/
//center map
/*function MapCenter({ map }) {

  const centerMap = () => {
    map.setView(mapCenter, mapZoom)
  };
  
  return (
    <div className="mapBtn5">
      <button type="button" class="btnCenter" onClick={centerMap}><img src={centerIcon} width="30" height="30" alt ="center icon"/></button>
    </div>
  )
}*/


function Map() {

  const [map, setMap] = useState(null); 
  const [position, setPosition] = useState(null);


  function DisplayGeolocation () {

    return position === null ? null : (
      <Marker position={position} eventHandlers={{
        mouseover: (event) => event.target.openPopup(),
        mouseout: (event) => event.target.closePopup(),
      }}>
        <Popup>Sie sind hier</Popup>
      </Marker>
    )
  }

  const showGeolocation = () => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom()+2);
    });
  }

  return (
    <main id='app'>
      <div className='header'>
        <div className='caption'>Radverkehrsdaten und Radwegnutzung</div>
        <div className='headerButtons'>
          <div className='btnLocation'>
            <button type="button" id='loactionButton' onClick={showGeolocation}><img src={locationIcon} width="30" height="30" alt ="location icon"/></button> 
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='map'>
          <MapContainer ref={setMap} center={mapCenter} zoom={mapZoom} scrollWheelZoom={true} zoomControl={true}>
          <TileLayer id='map'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
          />
          <DisplayGeolocation/>
          </MapContainer>
        </div>
        <Legend/>
      </div>
      <div className='dataButtons'> 
        <div>
          {map ? <DisplayCycleTraffic map={map} /> : null}   
        </div>
        <div>
          {map ? <DisplayDzs map={map} /> : null}   
        </div>
        <div> 
          {map ? <DisplayHeatmap map={map} /> : null}  
        </div>
        <div> 
          {map ? <MapClear map={map} /> : null}  
        </div>
      </div>        
    </main>
  )
}

export default Map;

/*
<div>
  {map ? <DisplayDemoCycleTraffic map={map} /> : null}   
</div>  */