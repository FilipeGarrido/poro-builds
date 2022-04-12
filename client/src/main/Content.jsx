import React from "react";
import { Switch, Route } from "react-router-dom";
import "./content.scss";
import HomePage from "../view/HomePage";
import PlayerSearch from "../view/PlayerSearch";

const Content = () => {
  return (
    <div className="Content">
      <Switch>
        <Route exact path="/">
          <PlayerSearch />
        </Route>
        <Route path="/homePage">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
