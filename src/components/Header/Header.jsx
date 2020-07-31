import React, { useContext } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logOut, fetchAddresses } from "../../modules/actions";
import { Link} from "react-router-dom";
import styles from "./Header.module.css";

import { Logo } from "loft-taxi-mui-theme";
// import Link from "@material-ui/core/Link";

class Header extends React.Component {
  static propTypes = {
    logOut: PropTypes.func,
  };

  render() {
    return (
      <header className={styles.appHeader}>
        <div className={styles.headerWrapper}>
          <div className="app-header__col">
            <Link href="http" className="app-logo" to="/map">
              <Logo />
            </Link>
          </div>
          <div className="app-header__col">
            <nav className="app-nav" id="app-nav" data-testid="nav">
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link
                    className={styles.navLink}
                    data-testid="map"
                    to="/map"
                  >
                    Карта
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link
                    className={styles.navLink}
                    data-testid="profile"
                    to="profile"
                  >
                    Профиль
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link
                    className={styles.navLink}
                    data-testid="exit"
                    to="/login"
                    onClick={(e) => this.props.logOut()}
                  >
                    Выйти
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default connect(null, { logOut, fetchAddresses })(Header);
