import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="app-header__col">
          <a href="http" className="app-logo">
            Logo
          </a>
        </div>
        <div className="app-header__col">
          <nav className="app-nav">
            <ul className="app-nav__list">
              <li className="app-nav__item">
                <a href="https" onClick={(e) => {this.props.changePage(e, "map")}} className="app-nav__link">
                  Карта
                </a>
              </li>
              <li className="app-nav__item">
                <a href="https" onClick={(e) => {this.props.changePage(e, "profile")}} className="app-nav__link">
                  Профиль
                </a>
              </li>
              <li className="app-nav__item">
                <a href="https" onClick={(e) => {this.props.changePage(e, "login")}} className="app-nav__link">
                  Выйти
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;