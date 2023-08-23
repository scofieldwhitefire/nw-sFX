import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";

import { Provider } from "react-redux";
import { store } from "./features/store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("safewayFxAuth")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
