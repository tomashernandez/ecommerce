import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle";

/**Styles template*/
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/core.css";
import "./assets/css/shortcode/shortcodes.css";
import "./assets/css/responsive.css";
import "./assets/css/custom.css";

import registerServiceWorker from "./registerServiceWorker";
// import firebase from "./libraries/firebase";
import App from "./components/App";

function renderApp() {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
  );
}
renderApp();

registerServiceWorker();
