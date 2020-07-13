import React, {useContext} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {logOut} from '../../modules/actions';
import {Link} from 'react-router-dom';

import { Logo } from "loft-taxi-mui-theme";
// import Link from "@material-ui/core/Link";

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="app-header__col">
          <Link
            href="http"
            className="app-logo"
            to="/map"
          >
            <Logo />
          </Link>
        </div>
        <div className="app-header__col">
          <nav className="app-nav" id="app-nav" data-testid="nav">
            <ul className="app-nav__list">
              <li className="app-nav__item">
                <Link
                  data-testid="map"
                  className="app-nav__link"
                  to="/map"
                >
                  Карта
                </Link>
              </li>
              <li className="app-nav__item">
                <Link
                  data-testid="profile"
                  className="app-nav__link"
                  to="profile"
                >
                  Профиль
                </Link>
              </li>
              <li className="app-nav__item">
                <Link
                  data-testid="exit"
                  to="/login"
                  onClick = {(e) => this.props.logOut()}
                  className="app-nav__link"
                >
                  Выйти
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default connect(
  null,
  {logOut}
)(Header);
