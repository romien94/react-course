import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Switch, Route} from 'react-router-dom';

import LoginForm from "../LoginForm/LoginForm";

import {PrivateRoute} from './PrivateRoute';
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
        {this.props.isLoggedIn ? <Header /> : <LoginForm />}
        <main>{<Switch>
          <PrivateRoute path="/map" component={Map}></PrivateRoute>
          <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
          </Switch>}</main>
      </div>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
