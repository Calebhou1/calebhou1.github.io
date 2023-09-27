import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Disney from "./Disney";
import DisneyCruiseLines from "./DisneyCruiseLines";
import Aulani from "./Aulani";
import BestBuy from "./BestBuy";
import DungeonHighway from "./DungeonHighway";
import Miscellaneous from "./Miscellaneous";
import Bungie from "./Bungie";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/disney" element={<Disney />} />
        <Route exact path="/aulani" element={<Aulani />} />
        <Route exact path="/disney-cruise" element={<DisneyCruiseLines />} />
        <Route exact path="/bestbuy" element={<BestBuy />} />
        <Route exact path="/dungeon-highway" element={<DungeonHighway />} />
        <Route exact path="/miscellaneous" element={<Miscellaneous />} />
        <Route exact path="/bungie" element={<Bungie />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
