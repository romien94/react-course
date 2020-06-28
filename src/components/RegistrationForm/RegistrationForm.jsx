import React from "react";

class RegistrationForm extends React.Component {
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
              <label className="app-form__field">
                <span className="app-form__fieldname">
                  Адрес электронной почты
                </span>
                <input type="email" className="app-form__input" />
              </label>
            </div>
            <div className="app-form__row">
              <label className="app-form__field">
                <span className="app-form__fieldname">Имя</span>
                <input type="text" className="app-form__input" />
              </label>
              <label className="app-form__field">
                <span className="app-form__fieldname">Фамилия</span>
                <input type="text" className="app-form__input" />
              </label>
            </div>
            <div className="app-form__row">
              <label className="app-form__field">
                <span className="app-form__fieldname">Пароль</span>
                <input type="password" className="app-form__input" />
              </label>
            </div>
          </div>
          <div className="app-form__controls">
            <div className="app-form__row">
              <button className="button app-form__button">
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