import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className="Header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="https://bluebirdbotanicals.com">
      <img className="Logo" src={ require('../images/color-logo.png') } alt="Bluebird Botanicals" aria-label="Bluebird Botanicals"/>
    </a>
    </nav>
    </div>
  );
}

export default Header;
