import React from 'react';
import LazyHero from 'react-lazy-hero';
import './bCorp.css'

function bCorp(props) {
  return (
    <div className="bCorp">
      <LazyHero  opacity="0" minHeight="700px" opacity="1" parallaxOffset="0" color='#00a6d4' className="hero-bCorp" isCentered="true" >
        <div className="flex-container-bCorp">
          <div className="hemp-classic">
              <img src={ require('../images/classic-extract.png') }/>
          </div>
          <div className="hemp-classic-bcorp">
              <img src={ require('../images/classic-extract-bcorp-2.png') }/>
          </div>
          <div className="copy-bCorp">
              <h1><span className="white">Bluebird</span> is on </h1>
              <h1>a mission.</h1> 
            <button type="button" onClick={props.redirect} >Shop Now</button>
          </div>
          <div className="logo-bCorp">
              <img src={ require('../images/bCorp-logo-S.png') }/>
          </div>
        </div>  
      </LazyHero>
    </div>
  );
}
export default bCorp;