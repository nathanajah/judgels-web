import * as React from 'react';

import './Header.css';

const logo = require('../../assets/images/logo.png');

export const Header = () => (
  <nav className="pt-navbar pt-dark navbar">
    <div className="navbar__wrapper">
      <div className="pt-navbar-group pt-align-left">
        <div>
          <img src={logo} className="navbar__logo"/>
        </div>
        <div className="pt-navbar-heading navbar__title">
          TLX
        </div>
        <span className="pt-navbar-divider"/>
        <div className="navbar__subtitle">
          TOKI Learning Center
        </div>
      </div>

      <div className="pt-navbar-group pt-align-right">
        <div className="navbar__link">
          Log in
        </div>
        <div className="navbar__link">
          Register
        </div>
      </div>
    </div>
  </nav>
);
