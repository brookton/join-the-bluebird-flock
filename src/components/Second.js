import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Second.css'

function Second() {
  return (
    <div className="Second">
      <LazyHero  opacity="0" minHeight="600px"  parallaxOffset="0" imageSrc={ require('../images/hemp-sport.jpg') } className="hero-second" isCentered="true" >
        <div className="flex-container">
          <div className="mobile-image">
            <img src={ require('../images/hemp-sport-mobile.jpg') }/>
          </div>
          <div className="copy">
              <h1>Lotions,</h1>
              <h1>Extracts,</h1>
              <h1>Soft gels</h1>
              <h1>and more.</h1> 
            <button type="button" onclick="window.location.href='/page2'" >Shop Now</button>
          </div>
        </div>  
      </LazyHero>
    </div>
  );
}

export default Second;
