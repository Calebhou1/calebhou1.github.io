import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about">
          about
        </Route>
        <Route exact path="/users">
          case study
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
