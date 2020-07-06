import React from "react";
import PropTypes from "prop-types";

import FormLabel from "../common/FormLabel";
import Input from "../common/Input";
import Button from "../common/Button";

class LoginForm extends React.Component {
  static propTypes = {
    authenticate: PropTypes.func
  }

  render() {
    return (
      <form onSubmit={(e) => {this.props.authenticate(e, {...e.target})}} className="app-form">
        <div className="app-form__wrapper">
          <h2 className="app-form__title">Войти</h2>
          <p className="app-form__suggestion">
            Новый пользователь?
            <a href="" className="app-form__link">
              Зарегистрироваться
            </a>
          </p>
          <div className="app-form__fields">
            <div className="app-form__row">
              <FormLabel>
                <span className="app-form__fieldname">Имя пользователя</span>
                <Input type="text" className="app-form__input" data-testid="username" />
              </FormLabel>
            </div>
            <div className="app-form__row">
              <FormLabel>
                <span className="app-form__fieldname">Пароль</span>
                <Input type="password" className="app-form__input" data-testid="password"/>
              </FormLabel>
            </div>
            <div className="app-form__row">
              <Button type="submit" className="button app-form__button" data-testid="button">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
