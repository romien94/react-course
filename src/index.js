import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.jsx";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./components/App/AuthContext";
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { MuiThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
