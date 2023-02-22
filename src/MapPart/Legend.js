import './Legend.css';
import bicycle1 from './bicycle1.svg';


function Legend() {
    
    return (
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
    )
}

export default Legend;