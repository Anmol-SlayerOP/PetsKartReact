import React from 'react'
import AddressDetails from './AddressDetails';
import Contactform from './Contactform.jsx';
// import Maplko from '../Maplko';
import Maplko from './Maplko.jsx'
import ContactAdvertisement from './ContactAdvertisement';
const Maincontactus = () => {
  return (
    <div> <Contactform/>
    <AddressDetails/>
    <Maplko/>
    <ContactAdvertisement/></div>
  )
}

export default Maincontactus