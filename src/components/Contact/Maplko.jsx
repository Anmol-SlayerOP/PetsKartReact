import React from 'react'
import './Maplkocss.css'
// import xlImage from './xl.png';
const Maplko = () => {
  return (<>
    <div className='maplko'>
              <iframe id="mainlkomap" style={{
        borderRadius:'10px',
      }}src="https://maps.google.com/maps?q=Indian+Institute+of+Information+Technology,+Lucknowt=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" allowFullScreen></iframe>
      
    </div>
    {/* <div className='advertisement'>
    
    <img id="responsiveImage" src={xlImage} alt="Responsive Image"></img>

    </div> */}
    </>
  )
}

export default Maplko