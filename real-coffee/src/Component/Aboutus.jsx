import React from 'react';
import { Link } from 'react-router-dom';
import './css/Aboutus.css';

function Aboutus() {

  return (
    <div className="container">
      <div className="our-story-heading">Our Story</div>
      <div>
        <p className='paragraph-ke-liye'>
          At Quick Coffee, we believe that coffee is more than just a beverage; it's an experience that brings people together, ignites conversations, and creates memorable moments. That's why we've curated a selection of premium coffees sourced from diverse regions, each with its own unique flavor profile and story to tell.
        </p>
        <p className='paragraph-ke-liye'>
          Whether you're a connoisseur seeking single-origin beans from the highlands of Ethiopia or a lover of rich blends crafted for that perfect espresso shot, we have something for every coffee enthusiast. From bold and intense to smooth and mellow, our range caters to every palate and preference.
        </p>
      </div>
      <div className="login-section">
        <div>Login as admin</div>
        <button className="login-button">
          {/* <Link to='/AddproductsHolder'>Login</Link> */}
          <Link to='/suplimentry/adminauth'>Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Aboutus;
