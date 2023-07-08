import React from 'react'
import './AddressDetailscss.css'
const AddressDetails = () => {
  return (
    <div className='adcontainer'>
    <div className='ad'>
     <div className='title'>We Are Always Available For You & Your Pets</div>
     <div className='adwords'>Upgrade your pet's style with our premium accessories, designed for comfort and elegance. Shop now!</div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
          <div class="left-side">
                <div class="address details">
                  <i class="fas adaicon fa-map-marker-alt"></i>
                  <div class="topic" ><div className='topicheading'>Address</div>
                  <a href='https://maps.google.com/?q=Indian+Institute+of+Information+Technology,+Lucknow/' class="text-one">
                    IIIT Lucknow</a><br/>
                  <a href='https://maps.google.com/?q=Indian+Institute+of+Information+Technology,+Lucknow/' class="text-two">Ahmamau Lucknow (UP)</a>
                </div></div>
                <div class="phone details">
                  <i class="fas adaicon fa-phone-alt"></i>
                  {/* <i class="fa-regular fa-phone" style={{color: "#000000"}}></i> */}
                  <div class="topic"><div className='topicheading'>Phone</div>
                  <a href="tel:9555864945"class="text-one">+91 95 5586 4945</a><br/>
                  <a href="tel:9608692240"class="text-two">+91 96 0869 2240</a>
                </div></div>
                <div class="email details">
                  <i class="fas adaicon fa-envelope"></i>
                  <div class="topic"><div className='topicheading'>Email</div>
                  <a href="mailto:iit2022007@iiitl.ac.in" class="text-one">iit2022007@iiitl.ac.in</a><br/>
                  <a href="mailto:info@pettypetskart.com" class="text-two">info@petty.com</a>
                </div></div>
              </div>
              </div>
              </div>
  
  )
}

export default AddressDetails;