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
import styles from './RegistrationForm.module.css';
import buttonStyles from '../common/Button.module.css';

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
        className={styles.appForm}
        onSubmit={this.props.handleSubmit((val) => {
          const { email, password, firstName, secondName } = val
          this.props.registerUser(email, password, firstName, secondName);
        })}
      >
        <div className="app-form__wrapper">
          <h2 className={styles.formTitle}>Регистрация</h2>
          <p className={styles.formSuggestion}>
            Уже зарегистрированы?
            <Link className={styles.formLink} to="/login">Войти</Link>
          </p>
          <div className="app-form__fields">
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className="app-form__fieldname">
                  Адрес электронной почты
                </span>
                <Field
                  data-testid="email"
                  type="email"
                  className={styles.formInput}
                  component={Input}
                  name="email"
                  validate={[required, email]}
                />
              </label>
            </div>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className="app-form__fieldname">Имя</span>
                <Field
                  data-testid="name"
                  type="text"
                  className={styles.formInput}
                  component={Input}
                  name="name"
                  validate={[required]}
                />
              </label>
              <label className={styles.formLabel}>
                <span className="app-form__fieldname">Фамилия</span>
                <Field
                  data-testid="surname"
                  type="text"
                  className={styles.formInput}
                  component={Input}
                  name="surname"
                  validate={[required]}
                />
              </label>
            </div>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className="app-form__fieldname">Пароль</span>
                <Field
                  data-testid="password"
                  type="text"
                  className={styles.formInput}
                  component={Input}
                  name="password"
                  validate={[required, minLength8, maxLength12]}
                />
              </label>
            </div>
          </div>
          <div className="app-form__controls">
            <div className={styles.formRow}>
              <Button
                type="submit"
                data-testid="register"
                className={buttonStyles.button}
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
