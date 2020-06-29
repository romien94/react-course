import React from "react";

import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

import Header from "../Header/Header";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";

class App extends React.Component {
  state = {
    activePage: "login",
  };

  renderPages = (page) => {
    switch (page) {
      case "login":
        return <LoginForm hideLogin={this.hideLogin} />;
      case "registration":
        return <RegistrationForm hideLogin={this.hideLogin} />;
      case "map":
        return <Map />;
      case "profile":
        return <Profile />;
      default:
        return <LoginForm hideLogin={this.hideLogin} />;
    }
  };

  hideLogin = (e) => {
    e.preventDefault();
    this.setState({ activePage: "map" });
  };

  changePage = (e, page) => {
    e.preventDefault();
    this.setState({activePage: page})
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

export default App;
