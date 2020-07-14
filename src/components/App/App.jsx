import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginForm from "../LoginForm/LoginForm";

import {PrivateRoute} from "./PrivateRoute";
import Header from "../Header/Header";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";

class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
  };

  render() {
    return (
      <div className="app">
        {this.props.isLoggedIn && <Header />}
        <main>
          {
            <Switch>
              {!this.props.isLoggedIn && <Route exact path="/" component={LoginForm}/>}
              <PrivateRoute path="/map" component={Map}></PrivateRoute>
              <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
              <Redirect from="*" to="/"></Redirect>
            </Switch>
          }
        </main>
      </div>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
