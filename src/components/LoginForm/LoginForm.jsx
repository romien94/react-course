import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.hideLogin} className="app-form">
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
              <label className="app-form__field">
                <span className="app-form__fieldname">Имя пользователя</span>
                <input type="text" className="app-form__input" />
              </label>
            </div>
            <div className="app-form__row">
              <label className="app-form__field">
                <span className="app-form__fieldname">Пароль</span>
                <input type="password" className="app-form__input" />
              </label>
            </div>
            <div className="app-form__row">
              <button type="submit" className="button app-form__button">
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
