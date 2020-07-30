import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { registerUser } from "../../modules/actions";
import {
  required,
  email,
  minLength8,
  maxLength12,
} from "../../utils/validators";

import FormLabel from "../common/FormLabel";
import Input from "../common/Input";
import Button from "../common/Button";
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
      <form
        className="app-form"
        onSubmit={this.props.handleSubmit((val) => {
          const { email, password, firstName, secondName } = val
          this.props.registerUser(email, password, firstName, secondName);
        })}
      >
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
                <Field
                  data-testid="email"
                  type="email"
                  className="app-form__input"
                  component={Input}
                  name="email"
                  validate={[required, email]}
                />
              </FormLabel>
            </div>
            <div className="app-form__row">
              <FormLabel>
                <span className="app-form__fieldname">Имя</span>
                <Field
                  data-testid="name"
                  type="text"
                  className="app-form__input"
                  component={Input}
                  name="name"
                  validate={[required]}
                />
              </FormLabel>
              <FormLabel>
                <span className="app-form__fieldname">Фамилия</span>
                <Field
                  data-testid="surname"
                  type="text"
                  className="app-form__input"
                  component={Input}
                  name="surname"
                  validate={[required]}
                />
              </FormLabel>
            </div>
            <div className="app-form__row">
              <FormLabel>
                <span className="app-form__fieldname">Пароль</span>
                <Field
                  data-testid="password"
                  type="text"
                  className="app-form__input"
                  component={Input}
                  name="password"
                  validate={[required, minLength8, maxLength12]}
                />
              </FormLabel>
            </div>
          </div>
          <div className="app-form__controls">
            <div className="app-form__row">
              <Button
                type="submit"
                data-testid="register"
                className="button app-form__button"
              >
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const RegistrationFormConnect = connect(
  (state) => ({ error: state.auth.error }),
  { registerUser }
)(RegistrationForm);

export default reduxForm({ form: "registrationForm" })(RegistrationFormConnect);
