import React from "react";
import PaymentForm from "../PaymentForm/PaymentForm";


class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="app-profile">
          <div className="app-profile__top">
            <h2 className="app-profile__title">Профиль</h2>
            <p className="app-profile__text">Способ оплаты</p>
          </div>
          <PaymentForm />
        </div>
      </div>
    );
  }
}

export default Profile;
