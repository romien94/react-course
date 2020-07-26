import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { saveProfile, loadProfile } from "../../modules/actions";
import {
  required,
  minLength3,
  maxLength3,
} from "../../utils/validators";

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
    date: "",
    name: "",
    cvc: "",
  };

  formRef = React.createRef();

  componentDidMount() {
    this.props.loadProfile(this.props.token);
    const { number, date, name, cvc } = this.props;
    this.setState({
      number,
      date,
      name,
      cvc,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      const { number, date, name, cvc } = this.props;
      this.setState({
        number,
        date,
        name,
        cvc,
      });
    }
  }

  render() {
    return (
      <form
        ref={this.formRef}
        onSubmit={this.props.handleSubmit((val) => {
          const { number, date, name, cvc } = val;
          const { token } = this.props;
          this.props.saveProfile(number, date, name, cvc, token);
        })}
        className="app-profile__form app-form"
      >
        <div className="app-form__wrapper">
          <div className="app-form__cols">
            <div className="app-form__col">
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Номер карты:</span>
                  <Field
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ number: value });
                    }}
                    type="text"
                    name="number"
                    data-testid="number"
                    value={this.state.number}
                    className="app-form__input"
                    component={Input}
                    validate={[required]}
                  />
                </FormLabel>
              </div>
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Срок действия:</span>
                  <Field
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ date: value });
                    }}
                    type="text"
                    name="date"
                    data-testid="date"
                    className="app-form__input"
                    value={this.state.date}
                    component={Input}
                    validate={[required]}
                  />
                </FormLabel>
              </div>
            </div>
            <div className="app-form__col">
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Имя владельца:</span>
                  <Field
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ name: value });
                    }}
                    type="text"
                    name="name"
                    data-testid="name"
                    className="app-form__input"
                    value={this.state.name}
                    component={Input}
                    validate={[required]}
                  />
                </FormLabel>
              </div>
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">CVC:</span>
                  <Field
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ cvc: value });
                    }}
                    name="cvc"
                    data-testid="cvc"
                    type="password"
                    value={this.state.cvc}
                    component={Input}
                    validate={[required, minLength3, maxLength3]}
                  />
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

const PaymentFormConnect = connect(
  (state) => ({ ...state.profile, token: state.auth.token }),
  { saveProfile, loadProfile }
)(PaymentForm);

export default reduxForm({
  form: "paymentForm",
})(PaymentFormConnect);
