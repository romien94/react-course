import mapboxgl from "mapbox-gl";
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { fetchAddresses, sendRoute } from "../../modules/actions";
import PropTypes from "prop-types";

import FormLabel from "../common/FormLabel";
import Button from "../common/Button";

class Map extends React.Component {
  map = React.createRef();
  mapbox;
  state = {
    startingPoint: null,
    endingPoint: null,
    filteredArray: [],
  };

  static propTypes = {
    coords: PropTypes.array,
    addressesList: PropTypes.array,
    fetchAddresses: PropTypes.func,
    sendRoute: PropTypes.func,
  };

  filterArray = () => {
    const arr = this.props.addressesList.filter(
      (item) =>
        item !== this.state.startingPoint && item !== this.state.endingPoint
    );
    return this.setState({ filteredArray: arr });
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
    if (this.props.coords !== prevProps.coords) {
      this.drawRoute(this.mapbox, this.props.coords);
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
      <div className="app-map">
        {localStorage.getItem("cardData") ? (
          <form
            data-testid="form"
            className="app-map__form app-form"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.sendRoute(
                this.state.startingPoint,
                this.state.endingPoint
              );
            }}
          >
            <div className="app-form__wrapper">
              <div className="app-form__fields">
                <div className="app-form__row">
                  <FormLabel>
                    <span className="app-form__fieldname">Откуда:</span>
                    <select
                      name="startingPoint"
                      value={
                        this.state.startingPoint ||
                        "Выберите точку начала маршрута"
                      }
                      onChange={(e) =>
                        this.setState({ startingPoint: e.target.value })
                      }
                    >
                      <option value="Выберите точку начала маршрута">
                        Выберите точку начала маршрута
                      </option>
                      {this.props.addressesList
                        .filter((item) => item !== this.state.endingPoint)
                        .map((address) => (
                          <option value={address} key={address}>
                            {address}
                          </option>
                        ))}
                    </select>
                  </FormLabel>
                </div>
                <div className="app-form__row">
                  <FormLabel>
                    <span className="app-form__fieldname">Куда:</span>
                    <select
                      name="endingPoint"
                      value="choose2"
                      value={
                        this.state.endingPoint ||
                        "Выберите точку конца маршрута"
                      }
                      onChange={(e) =>
                        this.setState({ endingPoint: e.target.value })
                      }
                    >
                      <option value="Выберите точку конца маршрута">
                        Выберите точку конца маршрута
                      </option>
                      {this.props.addressesList
                        .filter((item) => item !== this.state.startingPoint)
                        .map((address) => (
                          <option value={address} key={address}>
                            {address}
                          </option>
                        ))}
                    </select>
                  </FormLabel>
                </div>
                <div className="app-form__controls">
                  <div className="app-form__row">
                    <Button
                      data-testid="call"
                      type="submit"
                      className="button app-form__button"
                    >
                      Вызвать такси
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div>Заполните профиль</div>
        )}
        <div
          ref={this.map}
          style={{ height: "500px" }}
          className="app-map__map"
          data-testid="map"
        />
      </div>
    );
  }
}

const MapConnect = connect((state) => state.map, { fetchAddresses, sendRoute })(
  Map
);

export default reduxForm({ form: "mapForm" })(MapConnect);
