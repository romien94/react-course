import mapboxgl from "mapbox-gl";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { fetchAddresses, sendRoute, saveCoords } from "../../modules/actions";
import PropTypes from "prop-types";
import styles from "../Map/Map.module.css";
import buttonStyles from "../common/Button.module.css";
import Input from "../common/Input";

import FormLabel from "../common/FormLabel";
import Button from "../common/Button";

class MapForm extends React.Component {
  state = {
      startingPoint: null,
      endingPoint: null
  };

  render() {
    return (
      <form
        data-testid="form"
        className={styles.mapForm}
        onSubmit={(e) => {
          e.preventDefault();
          this.props.sendRoute(
            this.state.startingPoint,
            this.state.endingPoint
          );
        }}
      >
        <div className={styles.mapWrapper}>
          <div className={styles.formFields}>
            <div className={styles.formRow}>
              <label className={styles.formLabel} data-testid="from">
                <span className="app-form__fieldname">Откуда:</span>
                <Field
                  component={Input}
                  name="start"
                  list="startPoint"
                  className={styles.formInput}
                  onChange={(e) =>
                    this.setState({ startingPoint: e.target.value })
                  }
                  value={
                    this.state.startingPoint ? this.state.startingPoint : ""
                  }
                ></Field>
              </label>
              <datalist id="startPoint">
                {this.props.addressesList
                  .filter((item) => item !== this.state.endingPoint)
                  .map((address) => (
                    <option value={address} key={address}></option>
                  ))}
              </datalist>
            </div>
            <div className={styles.formRow}>
              <label className={styles.formLabel} data-testid="to">
                <span className="app-form__fieldname">Куда:</span>
                <Field
                  name="end"
                  component={Input}
                  list="endPoint"
                  className={styles.formInput}
                  onChange={(e) =>
                    this.setState({ endingPoint: e.target.value })
                  }
                  value={this.state.endingPoint ? this.state.endingPoint : ""}
                ></Field>
              </label>
              <datalist name="endingPoint" value="choose2" id="endPoint">
                {this.props.addressesList
                  .filter((item) => item !== this.state.startingPoint)
                  .map((address) => (
                    <option value={address} key={address}>
                      {address}
                    </option>
                  ))}
              </datalist>
            </div>
            <div className="app-form__controls">
              <div className={styles.formRow}>
                <Button
                  data-testid="call"
                  type="submit"
                  className={`${buttonStyles.button} ${buttonStyles.buttonFullWidth}`}
                  disabled={
                    this.state.startingPoint && this.state.endingPoint
                      ? false
                      : true
                  }
                >
                  Вызвать такси
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const MapFormConnect = connect((state) => state.map, {
  fetchAddresses,
  sendRoute,
  saveCoords,
})(MapForm);

export default reduxForm({ form: "mapForm" })(MapFormConnect);
