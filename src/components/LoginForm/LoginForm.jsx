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
        className="app-form"
      >
        <div className="app-form__wrapper">
          <h2 className="app-form__title">Войти</h2>
          <p className="app-form__suggestion">
            Новый пользователь?
            <Link to="/register">Зарегистрироваться</Link>
          </p>
          <div className="app-form__fields">
            <div className="app-form__row">
              <FormLabel>
                <span className="app-form__fieldname">Имя пользователя</span>
                <Field
                  type="text"
                  className="app-form__input"
                  name="email"
                  data-testid="username"
                  component={Input}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  validate={[required, email]}
                ></Field>
              </FormLabel>
            </div>
            <div className="app-form__row">
              <FormLabel>
                <span className="app-form__fieldname">Пароль</span>
                <Field
                  type="password"
                  className="app-form__input"
                  name="password"
                  data-testid="password"
                  component={Input}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  validate={[required, minLength3]}
                ></Field>
              </FormLabel>
            </div>
            <div className="app-form__row">
              <Button
                type="submit"
                className="button app-form__button"
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
