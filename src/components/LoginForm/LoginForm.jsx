import React from "react";
import { connect, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { authenticate } from "../../modules/actions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  required,
  email,
  minLength8,
  maxLength3,
  minLength3,
} from "../../utils/validators";
import styles from './LoginForm.module.css';
import buttonStyles from '../common/Button.module.css';

import FormLabel from "../common/FormLabel";
import Input from "../common/Input";
import Button from "../common/Button";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
  };

  static propTypes = {
    authenticate: PropTypes.func,
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit((val) => {
          const { email, password } = val;
          this.props.authenticate(email, password);
        })}
        className={styles.appForm}
      >
        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Войти</h2>
          <p className={styles.formSuggestion}>
            Новый пользователь?
            <Link className={styles.formLink} to="/register"> Зарегистрироваться</Link>
          </p>
          <div className={styles.formFields}>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className={styles.formName}>Имя пользователя</span>
                <Field
                  type="text"
                  className={styles.formInput}
                  name="email"
                  data-testid="username"
                  component={Input}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  validate={[required, email]}
                ></Field>
              </label>
            </div>
            <div className={styles.formRow}>
              <label className={styles.formLabel}>
                <span className="app-form__fieldname">Пароль</span>
                <Field
                  type="password"
                  className={styles.formInput}
                  name="password"
                  data-testid="password"
                  component={Input}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  validate={[required, minLength3]}
                ></Field>
              </label>
            </div>
            <div className={styles.formRow}>
              <Button
                type="submit"
                className={buttonStyles.button}
                data-testid="button"
              >
                Войти
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const LoginFormConnect = connect((state) => state, { authenticate })(LoginForm);

export default reduxForm({ form: "loginForm" })(LoginFormConnect);
