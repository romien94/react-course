import mapboxgl from "mapbox-gl";
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { fetchAddresses, sendRoute, saveCoords } from "../../modules/actions";
import PropTypes from "prop-types";
import styles from "./Map.module.css";
import buttonStyles from "../common/Button.module.css";
import Input from "../common/Input";

import MapForm from "../MapForm/MapForm";
import FormLabel from "../common/FormLabel";
import Button from "../common/Button";

class Map extends React.Component {
  map = React.createRef();
  mapbox;
  state = {
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
    if (this.props.coords && this.props.coords !== prevProps.coords) {
      this.drawRoute(this.mapbox, this.props.coords);
      this.setState({ showMessage: true });
    }
    if (!this.props.coords && this.props.coords !== prevProps.coords) {
      this.setState({ showMessage: false });
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
        {localStorage.getItem("cardData") && !this.state.showMessage && (
          <MapForm />
        )}
        {!localStorage.getItem("cardData") && (
          <div className={styles.mapForm}>
            <div className={`${styles.mapWrapper} ${styles.mapWrapperBig}`}>
              <h2 className={styles.formText}>
                Заполните профиль для заказа такси
              </h2>
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

export default MapConnect;
