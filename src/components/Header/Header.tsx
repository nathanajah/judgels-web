import * as React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import UserWidgetContainer from '../UserWidget/UserWidget';

const logo = require('../../assets/images/logo.png');

export interface HeaderProps {
  userWidget: JSX.Element;
}

export const Header = (props: HeaderProps) => (
  <nav className="pt-navbar header">
    <div className="header__wrapper">
      <div className="pt-navbar-group pt-align-left">
        <div>
          <Link to="/">
            <img src={logo} className="header__logo" />
          </Link>
        </div>
        <div className="pt-navbar-heading header__title">{(window as any).env.APP_NAME}</div>
        <span className="pt-navbar-divider" />
        <div className="header__subtitle">{(window as any).env.APP_SLOGAN}</div>
      </div>

      {props.userWidget}
    </div>
  </nav>
);

const HeaderContainer = () => <Header userWidget={<UserWidgetContainer />} />;
export default HeaderContainer;
