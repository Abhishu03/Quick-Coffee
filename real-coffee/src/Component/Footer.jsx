import React from 'react'
import './css/Footer.css'
import Clogo from '../Banner/logo-color.png';
import YT from '../Banner/youtube-8172151_1280.png';
import TW from '../Banner/twitter-8212571_1280.png';
import IG from '../Banner/instagram-3814080_1280.webp';
import FB from '../Banner/facebook-2170419_1280.webp';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='main'>
      <div className='logo'>
        <img  className='Clogo' src={Clogo} />
      </div>
      <div>
        <div className='social-holder'>
            <Link to='https://www.youtube.com/'><img  className='social-logo' src={YT} /></Link>
            <Link to='https://www.facebook.com/'><img  className='social-logo-a' src={FB} /></Link>
            <Link to='https://twitter.com/?lang=en'><img  className='social-logo-a' src={TW} /></Link>
            <Link to= 'https://www.instagram.com/'><img  className='social-logo' src={IG} /></Link>
        </div>
      </div>
      <div className='thankyou'>
        <div>Thank you for visiting our website</div>
        <div>Email us - Coffee@gmail.com</div>
      </div>
    </div>
  )
}

export default Footer
