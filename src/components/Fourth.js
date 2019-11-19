import React from 'react';
import LazyHero from 'react-lazy-hero';
import './Fourth.css'

function Fourth(props) {
  return (
    <div className="Fourth">
      <LazyHero  opacity="0" minHeight="600px"  parallaxOffset="0" imageSrc={ require('../images/facebook-array-lotions.jpg') } className="hero-fourth" isCentered="true" >
      <div className="flex-container-fourth">
          <div className="copy-fourth">
          <h1>Shop <span className="white">now.</span></h1> 
          <button type="button" onClick={props.redirect} >Begin self care</button>
        </div>
      </div>  
      </LazyHero>
    </div>
  );
}

export default Fourth;
