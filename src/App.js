import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Disney from "./Disney";
import BestBuy from "./BestBuy";
import DungeonHighway from "./DungeonHighway";
import Miscellaneous from "./Miscellaneous";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/disney">
          <Disney />
        </Route>
        <Route exact path="/bestbuy">
          <BestBuy />
        </Route>
        <Route exact path="/dungeon-highway">
          <DungeonHighway />
        </Route>
        <Route exact path="/miscellaneous">
          <Miscellaneous />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
