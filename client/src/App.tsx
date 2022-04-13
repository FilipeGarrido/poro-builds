import { Menu } from "./components/molecules/Menu/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PlayerSearch } from "./components/pages/PlayerSearch";
import { HomePage } from "./components/pages/HomePage";

import "./App.scss";

export function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
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
      </Router>
    </div>
  );
}
