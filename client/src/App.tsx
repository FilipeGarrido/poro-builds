import { Menu } from "./components/molecules/Menu/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PlayerSearch } from "./components/pages/PlayerSearch";
import { HomePage } from "./components/pages/HomePage";

import "./App.scss";

export function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <div className="Content">
                <PlayerSearch />
              </div>
            </Route>
            <Route path="/homePage">
              <Menu />
              <div className="Content">
                <HomePage />
              </div>
            </Route>
            <Route path="/picks">
              <Menu />
              <div className="Content">
              </div>
            </Route>
            <Route path="/bans">
              <Menu />
              <div className="Content">
              </div>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}
