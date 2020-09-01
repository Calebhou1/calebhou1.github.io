import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Disney from "./Disney";
import DisneyUnlisted from "./DisneyUnlisted";
import BestBuy from "./BestBuy";
import BestBuyUnlisted from "./BestBuyUnlisted";
import DungeonHighway from "./DungeonHighway";
import Miscellaneous from "./Miscellaneous";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/disney">
          <DisneyUnlisted/>
        </Route>
        <Route exact path="/disney-unlisted-caleb-portfolio">
          <Disney />
        </Route>
        <Route exact path="/bestbuy">
          <BestBuyUnlisted />
        </Route>
        <Route exact path="/bestbuy-unlisted-2020">
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
