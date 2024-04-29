import React from 'react'
import facebook from './../../assets/facebook-lite-icon.jpg'
import instaicon from './../../assets/images/Instagram-Logo.wine.svg'
import whatsapp from './../../assets/png-clipart-whatsapp-graphics-computer-icons-instant-messaging-whatsapp-logo-desktop-wallpaper.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer'>
        <div className='footerone'>
        <h3>اتصل بنا</h3>
        <p>Travel helps companies manage payments easily</p>
            <div className='footer-icons'>
                <a href="http://"><img src={facebook} style={{width:'24px'}}/></a>
                <a href="http://"><img src={instaicon}/></a>
                <a href="http://"><img src={whatsapp} style={{width:'26px', height:'26px'}}/></a>
            </div>
        </div>
        {/* <div className='footertwo'>
        <h3>Company</h3>
            <p>AboutUs</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Pricing</p>
            
        </div>
        <div className='footerthree'>
            <h3>Destinations</h3>
            <p>Maldives</p>
            <p>Los Angelas</p>
            <p>Las Vegas</p>
            <p>Torronto</p>
        </div> */}
        
    </div>
    
    </div>
  )
}

export default Footer