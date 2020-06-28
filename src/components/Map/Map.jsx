import React from "react";

class Map extends React.Component {
  render() {
    return (
      <div className="app-map">
        <div className="app-map__map" />
        <form className="app-map__form app-form">
          <div className="app-form__wrapper">
            <div className="app-form__fields">
              <div className="app-form__row">
                <label className="app-form__field">
                  <span className="app-form__fieldname">Откуда:</span>
                  <input type="text" className="app-form__input" />
                </label>
              </div>
              <div className="app-form__row">
                <label className="app-form__field">
                  <span className="app-form__fieldname">Куда:</span>
                  <input type="text" className="app-form__input" />
                </label>
              </div>
              <div className="app-form__controls">
                <div className="app-form__row">
                  <button className="button app-form__button">
                    Вызвать такси
                  </button>
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