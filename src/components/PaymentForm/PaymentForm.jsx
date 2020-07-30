import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { saveProfile, loadProfile } from "../../modules/actions";
import {
  required,
  minLength3,
  maxLength3,
  numeric,
  minLenegth16,
  maxLength16,
  date,
  name
} from "../../utils/validators";
import styles from "./PaymentForm.module.css";
import buttonStyles from "../common/Button.module.css";

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
        className={styles.paymentForm}
      >
        <div className="app-form__wrapper">
          <div className={styles.formCols}>
            <div className={styles.formCol}>
              <div className={styles.formRow}>
                <label className={styles.formLabel}>
                  <span className={styles.formName}>Номер карты:</span>
                  <Field
                    onChange={(e) => {
                      this.setState({ number: e.target.value });
                    }}
                    type="text"
                    name="number"
                    data-testid="number"
                    className={styles.formInput}
                    component={Input}
                    placeholder="1111111111111111"
                    value={this.state.number}
                    validate={[required, numeric, minLenegth16, maxLength16]}
                  />
                </label>
              </div>
              <div className={styles.formRow}>
                <label className={styles.formLabel}>
                  <span className={styles.formName}>Срок действия:</span>
                  <Field
                    onChange={(e) => {
                      console.log(e)
                      this.setState({ date: e.target.value });
                    }}
                    type="text"
                    name="date"
                    data-testid="date"
                    className={styles.formInput}
                    value={this.state.date}
                    component={Input}
                    validate={[required, date]}
                    placeholder="00/12"
                  />
                </label>
              </div>
            </div>
            <div className={styles.formCol}>
              <div className={styles.formRow}>
                <label className={styles.formLabel}>
                  <span className={styles.formName}>Имя владельца:</span>
                  <Field
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                    type="text"
                    name="name"
                    data-testid="name"
                    className={styles.formInput}
                    value={this.state.name}
                    component={Input}
                    validate={[required, name]}
                    placeholder="IVAN IVANOV"
                  />
                </label>
              </div>
              <div className={styles.formRow}>
                <label className={styles.formLabel}>
                  <span className={styles.formName}>CVC:</span>
                  <Field
                    onChange={(e) => {
                      this.setState({ cvc: e.target.value });
                    }}
                    className={styles.formInput}
                    name="cvc"
                    data-testid="cvc"
                    type="password"
                    component={Input}
                    value={this.state.cvc?this.state.cvc: ''}
                    validate={[required, numeric, minLength3, maxLength3]}
                    placeholder="123"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className={styles.formControls}>
            <div className={styles.formRow}>
              <Button
                data-testid="save"
                type="submit"
                className={buttonStyles.button}
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
