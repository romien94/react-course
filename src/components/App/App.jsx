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
        return <LoginForm authenticate={this.authenticate} />;
      case "registration":
        return <RegistrationForm authenticate={this.authenticate} />;
      case "map":
        return <Map />;
      case "profile":
        return <Profile />;
      default:
        return <LoginForm authenticate={this.authenticate} />;
    }
  };

  authenticate = (e, fields) => {
    e.preventDefault();
    const email = fields[0].value;
    const password = fields[1].value;

    this.props.logIn(email, password);
    return this.setState({activePage: 'map'})
  }

  handleLogOut = (e) => {
    e.preventDefault();
    this.props.logOut();
    console.log(this.props);
    return this.setState({activePage: 'login'})
  }

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
          <Header changePage={this.changePage} handleLogout={this.handleLogOut} />
        )}
        {this.renderPages(this.state.activePage)}
      </div>
    );
  }
}

export default withAuth(App);
