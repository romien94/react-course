import React from "react";

class PaymentForm extends React.Component {
  render() {
    return (
      <form className="app-profile__form app-form">
        <div className="app-form__wrapper">
          <div className="app-form__cols">
            <div className="app-form__col">
              <div className="app-form__row">
                <label className="app-form__field">
                  <span className="app-form__name">Номер карты:</span>
                  <input type="text" className="app-form__input" />
                </label>
              </div>
              <div className="app-form__row">
                <label className="app-form__field">
                  <span className="app-form__name">Срок действия:</span>
                  <input type="text" className="app-form__input" />
                </label>
              </div>
            </div>
            <div className="app-form__col">
              <div className="app-form__row">
                <label className="app-form__field">
                  <span className="app-form__name">Имя владельца:</span>
                  <input type="text" className="app-form__input" />
                </label>
              </div>
              <div className="app-form__row">
                <label className="app-form__field">
                  <span className="app-form__name">CVC:</span>
                  <input type="password" className="app-form__input" />
                </label>
              </div>
            </div>
          </div>
          <div className="app-form__controls">
            <div className="app-form__row">
              <button type="submit" className="button app-form__button">
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default PaymentForm;