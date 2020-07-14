import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveProfile, loadProfile } from "../../modules/actions";

import FormLabel from "../common/FormLabel";
import Input from "../common/Input";
import Button from "../common/Button";

class PaymentForm extends React.Component {
  static propTypes = {
    saveProfile: PropTypes.func,
    loadProfile: PropTypes.func,
  };

  state = {
    number: "",
    data: "",
    name: "",
    cvc: "",
  };

  formRef = React.createRef();
  setFields = () => {
    this.formRef.current.number.value = this.props.number;
    this.formRef.current.date.value = this.props.date;
    this.formRef.current.name.value = this.props.name;
    this.formRef.current.cvc.value = this.props.cvc;
  };

  componentDidMount() {
    this.props.loadProfile();
  }

  componentDidUpdate() {
    this.setFields();
  }


  render() {
    return (
      <form
        ref={this.formRef}
        onSubmit={async (e) => {
          e.preventDefault();
          const { number, date, name, cvc } = this.state;
          const token = "AUTH_TOKEN";
          this.props.saveProfile(
            number,
            date,
            name,
            cvc,
            token
          );
        }}
        className="app-profile__form app-form"
      >
        <div className="app-form__wrapper">
          <div className="app-form__cols">
            <div className="app-form__col">
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Номер карты:</span>
                  <Input
                    type="text"
                    name="number"
                    data-testid="number"
                    className="app-form__input"
                  />
                </FormLabel>
              </div>
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Срок действия:</span>
                  <Input
                    type="text"
                    name="date"
                    data-testid="date"
                    className="app-form__input"
                  />
                </FormLabel>
              </div>
            </div>
            <div className="app-form__col">
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Имя владельца:</span>
                  <Input
                    type="text"
                    name="name"
                    data-testid="name"
                    className="app-form__input"
                  />
                </FormLabel>
              </div>
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">CVC:</span>
                  <Input name="cvc" data-testid="cvc" type="password" />
                </FormLabel>
              </div>
            </div>
          </div>
          <div className="app-form__controls">
            <div className="app-form__row">
              <Button
                data-testid="save"
                type="submit"
                className="button app-form__button"
              >
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default connect((state) => state.profile, { saveProfile, loadProfile })(
  PaymentForm
);
