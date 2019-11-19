import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Third.css'

function Third(props) {
  return (
    <div className="Third">
      <LazyHero  opacity="0" minHeight="600px"  parallaxOffset="0" imageSrc={ require('../images/third-banner.jpg') } className="hero-third" isCentered="true" >
      <div className="flex-container-third">
          <div className="mobile-image-third">
            <img src={ require('../images/third-banner-mobile-grf.jpg')}/>
          </div>
          <div className="copy-third">
          <h1>Something</h1> 
          <h1>for everyone.</h1>
          <button type="button" onClick={props.redirect}>Shop CBD Now</button>
        </div>
      </div>  
      </LazyHero>
    </div>
  );
}

export default Third;
