import React from 'react';
import LazyHero from 'react-lazy-hero';
import './First.css'

function First() {
  return (
    <div className="First">
      <LazyHero  opacity="0" minHeight="600px"  parallaxOffset="0" imageSrc={ require('../images/hemp-classic.jpg') } isCentered="true" >
        <div className="flex-container">
          <div className="copy">
              <h1>This is your </h1>
              <h1>first step.</h1> 
            <button type="button"  class="btn btn-primary">Shop CBD Now</button>
          </div>
        </div>
      </LazyHero>
    </div>
  );
}
export default First;
