import React from "react";

import FormLabel from "../common/FormLabel";
import Input from "../common/Input";
import Button from "../common/Button";


class PaymentForm extends React.Component {
  render() {
    return (
      <form className="app-profile__form app-form">
        <div className="app-form__wrapper">
          <div className="app-form__cols">
            <div className="app-form__col">
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Номер карты:</span>
                  <Input type="text" data-testid="number" className="app-form__input" />
                </FormLabel>
              </div>
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Срок действия:</span>
                  <Input type="text" data-testid="date" className="app-form__input" />
                </FormLabel>
              </div>
            </div>
            <div className="app-form__col">
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Имя владельца:</span>
                  <Input type="text" data-testid="name" className="app-form__input" />
                </FormLabel>
              </div>
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">CVC:</span>
                  <Input data-testid="cvc" type="password" />
                </FormLabel>
              </div>
            </div>
          </div>
          <div className="app-form__controls">
            <div className="app-form__row">
            <Button data-testid="save" type="submit" className="button app-form__button">
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default PaymentForm;
