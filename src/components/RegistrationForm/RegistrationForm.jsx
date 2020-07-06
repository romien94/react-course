import React from "react";
import PropTypes from "prop-types";

import FormLabel from "../common/FormLabel";
import Input from "../common/Input";

class RegistrationForm extends React.Component {
  static propTypes = {
    authenticate: PropTypes.func,
  };

  render() {
    return (
      <form className="app-form">
        <div className="app-form__wrapper">
          <h2 className="app-form__title">Регистрация</h2>
          <p className="app-form__suggestion">
            Уже зарегистрированы?
            <a href="" className="app-form__link">
              Войти
            </a>
          </p>
          <div className="app-form__fields">
            <div className="app-form__row">
              <FormLabel>
                <span className="app-form__fieldname">
                  Адрес электронной почты
                </span>
                <Input
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
                  data-testid="name"
                  type="text"
                  className="app-form__input"
                />
              </FormLabel>
              <FormLabel>
                <span className="app-form__fieldname">Фамилия</span>
                <Input
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

export default RegistrationForm;