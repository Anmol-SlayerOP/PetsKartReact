import React from 'react'
import './ContactAdvertisementcss.css';
import xlImage from '../../assets/images/contact/xl.png';
import lImage from '../../assets/images/contact/l.png';
// import lImage from './l.png';
import mImage from '../../assets/images/contact/m.png';
import sImage from '../../assets/images/contact/s.png';
import { useState, useEffect } from 'react';

const ContactAdvertisement = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let imageSource = xlImage;
  let adimagestyle = {
    width: '100%',
    aspectRatio: '16/4.5',
}


  if (screenWidth <= 1200 && screenWidth > 720) {
    imageSource = lImage;
    adimagestyle={
        width: '100%',
        aspectRatio: '16/10',        
    }

  } 
  else if (screenWidth <= 720 && screenWidth > 400) {
    imageSource = mImage;
    adimagestyle={
        width: '100%',
        aspectRatio: '4/4.5',        
    }
  }
  else if (screenWidth <= 400)
{
    imageSource = sImage;
    adimagestyle={
        width: '100%',
        aspectRatio: '4/4.5',        
    }
}
else{
    imageSource = xlImage;
    adimagestyle={
        width: '100%',
        aspectRatio: '16/4.5',        
    }
}
  return (
    <div>
    <div className='advertisement'>

<img id="responsiveImage" style={adimagestyle} src={imageSource} alt="Responsive Image"></img>

</div>
  </div>
  );
};

// export default ResponsiveImage;
// const ContactAdvertisement = () => {
//   return (
//     <div>
//           <div className='advertisement'>
    
//     <img id="responsiveImage" src={xlImage} alt="Responsive Image"></img>

//     </div>
//         </div>
//   )
// }

export default ContactAdvertisement