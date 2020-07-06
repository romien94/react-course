import React from "react";
import PropTypes from "prop-types";
import { Logo } from "loft-taxi-mui-theme";
import Link from "@material-ui/core/Link";

class Header extends React.Component {
  static propTypes = {
    changePage: PropTypes.func,
    handleLogOut: PropTypes.func,
  };
  render() {
    return (
      <header className="app-header">
        <div className="app-header__col">
          <a
            href="http"
            className="app-logo"
            onClick={(e) => {
              this.props.changePage(e, "login");
            }}
          >
            <Logo />
          </a>
        </div>
        <div className="app-header__col">
          <nav className="app-nav" id="app-nav" data-testid="nav">
            <ul className="app-nav__list">
              <li className="app-nav__item">
                <Link
                  data-testid="map"
                  href="#"
                  onClick={(e) => {
                    this.props.changePage(e, "map");
                  }}
                  className="app-nav__link"
                >
                  Карта
                </Link>
              </li>
              <li className="app-nav__item">
                <Link
                  data-testid="profile"
                  href="#"
                  onClick={(e) => {
                    this.props.changePage(e, "profile");
                  }}
                  className="app-nav__link"
                >
                  Профиль
                </Link>
              </li>
              <li className="app-nav__item">
                <Link
                  data-testid="exit"
                  href="#"
                  onClick={(e) => {
                    this.props.handleLogout(e);
                  }}
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

export default Header;
