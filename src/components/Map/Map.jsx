import mapboxgl from "mapbox-gl";
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { fetchAddresses, sendRoute, saveCoords } from "../../modules/actions";
import PropTypes from "prop-types";
import styles from "./Map.module.css";
import buttonStyles from "../common/Button.module.css";
import Input from "../common/Input";

import FormLabel from "../common/FormLabel";
import Button from "../common/Button";

class Map extends React.Component {
  map = React.createRef();
  mapbox;
  state = {
    startingPoint: null,
    endingPoint: null,
    filteredArray: [],
    showMessage: false,
  };

  static propTypes = {
    coords: PropTypes.array,
    addressesList: PropTypes.array,
    fetchAddresses: PropTypes.func,
    sendRoute: PropTypes.func,
  };

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoicm9tdWx1czk0IiwiYSI6ImNrYzdhdGlnaDB6b3gzM3JpYTV3MDV5YXEifQ.p1BhiuNF2HlBNwPxJFqtbg";
    this.mapbox = new mapboxgl.Map({
      container: this.map.current,
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [30.308611, 59.9375], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });

    this.props.fetchAddresses();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.coords &&
      this.props.coords !== prevProps.coords
    ) {
      this.drawRoute(this.mapbox, this.props.coords);
      this.setState({showMessage: true});
    }
    if (!this.props.coords && this.props.coords !== prevProps.coords) {
      this.setState({ showMessage: false });
      this.setState({ startingPoint: null });
      this.setState({ endingPoint: null });
    }
  }

  drawRoute = (map, coordinates) => {
    map.flyTo({
      center: coordinates[0],
      zoom: 12,
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8,
      },
    });
  };

  render() {
    return (
      <div className={styles.map}>
        {this.state.showMessage && (
          <div className={styles.mapForm}>
            <div className={`${styles.mapWrapper} ${styles.mapWrapperBig}`}>
              <h2 className={styles.formTitle}>Заказ размёщен</h2>
              <p className={styles.formText}>
                Ваше такси уже едет к вам. Прибудет приблизительно через 10
                минут.
              </p>
              <div className={styles.formRow}>
                <Button
                  className={`${buttonStyles.button} ${buttonStyles.buttonFullWidth}`}
                  onClick={(e) => {
                    if (this.mapbox.getLayer("route")) {
                      this.mapbox.removeLayer("route");
                      this.setState({ showMessage: false });
                    }
                    if (this.mapbox.getSource("route")) {
                      this.mapbox.removeSource("route");
                      this.props.saveCoords(null);
                    }
                  }}
                >
                  Сделать новый заказ
                </Button>
              </div>
            </div>
          </div>
        )}
        {this.state.showMessage === false && localStorage.getItem("cardData") ? (
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
                  <label className={styles.formLabel}>
                    <span className="app-form__fieldname">Откуда:</span>
                    <Field
                      component={Input}
                      name="start"
                      list="startPoint"
                      className={styles.formInput}
                      onChange={(e) =>
                        this.setState({ startingPoint: e.target.value })
                      }
                      value={this.state.startingPoint? this.state.startingPoint : ''}
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
                  <label className={styles.formLabel}>
                    <span className="app-form__fieldname">Куда:</span>
                    <Field
                      name="end"
                      component={Input}
                      list="endPoint"
                      className={styles.formInput}
                      onChange={(e) =>
                        this.setState({ endingPoint: e.target.value })
                      }
                      value={this.state.endingPoint? this.state.endingPoint : ''}
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
        ) : (
          <div className={styles.mapForm}>
          <div className={`${styles.mapWrapper} ${styles.mapWrapperBig}`}>
            <h2 className={styles.formText}>Заполните профиль для заказа такси</h2>
          </div>
        </div>
        )}
        <div
          ref={this.map}
          style={{ width: "100vw", height: "100vh" }}
          className="app-map__map"
          data-testid="map"
        />
      </div>
    );
  }
}

const MapConnect = connect((state) => state.map, {
  fetchAddresses,
  sendRoute,
  saveCoords,
})(Map);

export default reduxForm({ form: "mapForm" })(MapConnect);
