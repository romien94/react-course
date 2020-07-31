import React from "react";
import PaymentForm from "../PaymentForm/PaymentForm";
import styles from './Profile.module.css';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.profile}>
          <div className={styles.profileTop}>
            <h2 className={styles.profileTitle}>Профиль</h2>
            <p className={styles.profileText}>Способ оплаты</p>
          </div>
          <PaymentForm />
        </div>
      </div>
    );
  }
}

export default Profile;
