import React from "react";
import "./App.scss";
import "./index.scss";
import Content from "./main/Content";
import Menu from "./main/Menu";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
}

export default App;
