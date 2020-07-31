import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from './App.module.css';

import LoginForm from "../LoginForm/LoginForm";

import { PrivateRoute } from "./PrivateRoute";
import Header from "../Header/Header";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    token: PropTypes.string,
    error: PropTypes.string
  };

  render() {
    return (
      <div className={styles.app}>
        {this.props.isLoggedIn && <Header />}
        {this.props.error && <div>{this.props.error}</div>}
        <main className={styles.main}>
          {/* {!this.props.isLoggedIn && <img src="./logo.png"></img>} */}
          {
            <Switch>
              {/* {this.props.isLoggedIn && <PrivateRoute path="/map" component={Map}></PrivateRoute>} */}
              <Route path="/register" component={RegistrationForm}></Route>
              {!this.props.isLoggedIn && (
                <Route exact path="*" component={LoginForm} />
              )}
              <PrivateRoute path="/map" component={Map}></PrivateRoute>
              <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
              <PrivateRoute path="/" component={Map}></PrivateRoute>
              {/* <Route path="/login" component={LoginForm}></Route> */}
              <Redirect from="*" to="/"></Redirect>
            </Switch>
          }
        </main>
      </div>
    );
  }
}

export default connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  token: state.auth.token,
  error: state.auth.error,
}))(App);
