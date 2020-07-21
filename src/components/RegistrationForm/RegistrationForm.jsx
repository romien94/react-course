import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../modules/actions";

import FormLabel from "../common/FormLabel";
import Input from "../common/Input";
import { Link } from "react-router-dom";

class RegistrationForm extends React.Component {
  static propTypes = {
    authenticate: PropTypes.func,
  };

  state = {
    email: "",
    password: "",
    firstName: "",
    secondName: "",
  };

  render() {
    return (
      <form className="app-form" onSubmit={e => {
        e.preventDefault();
        const {email, password, firstName, secondName} = this.state;
        this.props.registerUser(email, password, firstName, secondName);
      }}>
        <div className="app-form__wrapper">
          <h2 className="app-form__title">Регистрация</h2>
          <p className="app-form__suggestion">
            Уже зарегистрированы?
            <Link to="/login">Войти</Link>
          </p>
          <div className="app-form__fields">
            <div className="app-form__row">
              <FormLabel>
                <span className="app-form__fieldname">
                  Адрес электронной почты
                </span>
                <Input
                  onChange={(e) => this.setState({ email: e.target.value })}
                  data-testid="email"
                  type="email"
                  className="app-form__input"
                />
              </FormLabel>
            </div>
            <div className="app-form__row">
              <FormLabel>
                <span className="app-form__fieldname">Имя</span>
                <Input
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                  data-testid="name"
                  type="text"
                  className="app-form__input"
                />
              </FormLabel>
              <FormLabel>
                <span className="app-form__fieldname">Фамилия</span>
                <Input
                  onChange={(e) =>
                    this.setState({ secondName: e.target.value })
                  }
                  data-testid="surname"
                  type="text"
                  className="app-form__input"
                />
              </FormLabel>
            </div>
            <div className="app-form__row">
              <FormLabel>
                <span className="app-form__fieldname">Пароль</span>
                <Input
                  onChange={(e) => this.setState({ password: e.target.value })}
                  data-testid="password"
                  type="text"
                  className="app-form__input"
                />
              </FormLabel>
            </div>
          </div>
          <div className="app-form__controls">
            <div className="app-form__row">
              <button
                type="submit"
                data-testid="register"
                className="button app-form__button"
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(state => ({error: state.auth.error}), {registerUser})(RegistrationForm);
