import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { Store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Router>
        <App />
      </Router>
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
