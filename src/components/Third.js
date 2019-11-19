import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Third.css'

function Third(props) {
  return (
    <div className="Third">
      <LazyHero  opacity="0" minHeight="800px"  parallaxOffset="0" imageSrc={ require('../images/facebook-hemp-lotions.jpg') } className="hero-third" isCentered="true" >
      <div className="flex-container-third">
          <div className="mobile-image-third">
            <img src={ require('../images/facebook-hemp-lotions-mobile.jpg')}/>
          </div>
          <div className="copy-third">
          <h1>Something for</h1> 
          <h1><span className="white">everyone.</span></h1>
          <button type="button" onClick={props.redirect} >Shop Now</button>
        </div>
      </div>  
      </LazyHero>
    </div>
  );
}

export default Third;
