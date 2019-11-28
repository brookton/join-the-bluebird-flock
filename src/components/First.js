import React from 'react';
import LazyHero from 'react-lazy-hero';
import './First.css'

function First(props) {
  return (
    <div className="First">
      <LazyHero  opacity="0" minHeight="600px"  parallaxOffset="0" imageSrc={ require('../images/hemp-classic.jpg') } className="hero-first" isCentered="true" >
        <div className="flex-container-first">
          <div className="mobile-image-first">
            <img src={ require('../images/hemp-classic-mobile.png') }/>
          </div>
          <div className="copy-first">
              <h1><span className="white">SAVE 35%</span> with code</h1>
              <h1>THANKFUL35.</h1> 
              <p>Valid on online orders only that are placed in the U.S. Please note that this discount cannot be used on Bluebird CBD lotion products and cannot be applied to wholesale orders or bulk items.</p>
            <button type="button" onClick={props.redirect} >Shop Now</button>
          </div>
        </div>  
      </LazyHero>
    </div>
  );
}
export default First;