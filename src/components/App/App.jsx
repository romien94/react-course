import React from "react";
import {withAuth} from './AuthContext';
import PropTypes from 'prop-types';

import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

import Header from "../Header/Header";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";

class App extends React.Component {
  state = {
    activePage: "login",
  };

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
    logOut: PropTypes.func
  }

  renderPages = (page) => {
    switch (page) {
      case "login":
        return <LoginForm changePage={this.changePage} />;
      case "registration":
        return <RegistrationForm changePage={this.changePage} />;
      case "map":
        return <Map />;
      case "profile":
        return <Profile />;
      default:
        return <LoginForm changePage={this.changePage} />;
    }
  };

  changePage = (e, page) => {
    e.preventDefault();
    if (this.props.isLoggedIn) {
      return this.setState({activePage: page})
    }
    return this.setState({activePage: 'login'})
  }

  render() {
    return (
      <div className="app">
        {this.state.activePage === "login" ||
        this.stateActivePage === "registration" ? null : (
          <Header changePage={this.changePage} />
        )}
        {this.renderPages(this.state.activePage)}
      </div>
    );
  }
}

export default withAuth(App);
