import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Fourth.css'

function Fourth(props) {
  return (
    <div className="Fourth">
      <LazyHero  opacity="0" minHeight="600px"  parallaxOffset="0" imageSrc={ require('../images/third-banner.jpg') } className="hero-fourth" isCentered="true" >
      <div className="flex-container-fourth">
          <div className="mobile-image-fourth">
            <img src={ require('../images/third-banner-mobile-grf.jpg')}/>
          </div>
          <div className="copy-fourth">
          <h1>Something</h1> 
          <h1>for everyone.</h1>
          <button type="button" onClick={props.redirect} >Shop CBD Now</button>
        </div>
      </div>  
      </LazyHero>
    </div>
  );
}

export default Fourth;
