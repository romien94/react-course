import mapboxgl from "mapbox-gl";
import React from "react";

import FormLabel from "../common/FormLabel";
import Input from "../common/Input";
import Button from "../common/Button";

class Map extends React.Component {
  map = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoicm9tdWx1czk0IiwiYSI6ImNrYzdhdGlnaDB6b3gzM3JpYTV3MDV5YXEifQ.p1BhiuNF2HlBNwPxJFqtbg";
    const mapbox = new mapboxgl.Map({
      container: this.map.current,
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

  render() {
    return (
      <div className="app-map">
        <div
          ref={this.map}
          style={{ height: "500px" }}
          className="app-map__map"
          data-testid="map"
        />
        <form data-testid="form" className="app-map__form app-form">
          <div className="app-form__wrapper">
            <div className="app-form__fields">
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Откуда:</span>
                  <Input data-testid="from" type="text" className="app-form__input" />
                </FormLabel>
              </div>
              <div className="app-form__row">
                <FormLabel>
                  <span className="app-form__fieldname">Куда:</span>
                  <Input data-testid="to" type="text" className="app-form__input" />
                </FormLabel>
              </div>
              <div className="app-form__controls">
                <div className="app-form__row">
                  <Button data-testid="call" type="submit" className="button app-form__button">
                    Вызвать такси
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Map;
