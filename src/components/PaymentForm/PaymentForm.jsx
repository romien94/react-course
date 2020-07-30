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
        onSubmit={async (e) => {
          e.preventDefault();
          const { number, date, name, cvc } = this.state;
          const { token } = this.props;
          this.props.saveProfile(number, date, name, cvc, token);
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
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ number: value });
                    }}
                    type="text"
                    name="number"
                    data-testid="number"
                    value={this.state.number}
                    className="app-form__input"
                  />
                </FormLabel>
              </div>
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Срок действия:</span>
                  <Input
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ date: value });
                    }}
                    type="text"
                    name="date"
                    data-testid="date"
                    className="app-form__input"
                    value={this.state.date}
                  />
                </FormLabel>
              </div>
            </div>
            <div className="app-form__col">
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Имя владельца:</span>
                  <Input
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ name: value });
                    }}
                    type="text"
                    name="name"
                    data-testid="name"
                    className="app-form__input"
                    value={this.state.name}
                  />
                </FormLabel>
              </div>
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">CVC:</span>
                  <Input
                    onChange={(e) => {
                      const value = e.target.value;
                      this.setState({ cvc: value });
                    }}
                    name="cvc"
                    data-testid="cvc"
                    type="password"
                    value={this.state.cvc}
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

export default connect(
  (state) => ({ ...state.profile, token: state.auth.token }),
  { saveProfile, loadProfile }
)(PaymentForm);
