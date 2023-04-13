import './Legend.css';
import bicycle from './images/bicycle_legend.svg';


function Legend() {
    
    return (
    <div className='legend'>
      <p id='caption'>Legende</p>
      <p id='ut'>Radinfrastruktur</p>
      <div className='pathOptions'>
        <div id='span1'/><div id='p1'>Radweg</div> 
        <div id='span2'/><div id='p2'>Radweg evtl. mit FG</div> 
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
        <div id='span7'/><div id='p7'>kein Kfz-Verkehr</div> 
        <div id='span8'/><div id='p8'>Fahrradabstellplatz</div> 
        <div> 
          <img id='span9' src={bicycle} alt='bicycle icon'/>
        </div>
        <div id='p9'>Fahrradgeschäft</div>
        <div id='span10'/><div id='p10'>regionale Radrouten</div> 
        <div id='span11'/><div id='p11'>lokale Radrouten</div>                     
      </div>
      <p id='ut'>Links</p>
      <div className='hyperlink'>
        <a id='link1' href="https://geoportal.leipzig.de/arcgis/apps/experiencebuilder/experience/?id=4fd2c688fa754d55903dcb8acf9dafa7&page=page_0" target='_blank' rel='noopener noreferrer'>Dauerzählstellen Leipzig</a>                    
      </div>
    </div>
    )
}

export default Legend;