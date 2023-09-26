import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Disney from "./Disney";
import DisneyCruiseLines from "./DisneyCruiseLines";
import DisneyCruiseLinesUnlisted from "./DisneyCruiseLinesUnlisted";
import DisneyUnlisted from "./DisneyUnlisted";
import Aulani from "./Aulani";
import AulaniUnlisted from "./AulaniUnlisted";
import BestBuy from "./BestBuy";
import BestBuyUnlisted from "./BestBuyUnlisted";
import DungeonHighway from "./DungeonHighway";
import Miscellaneous from "./Miscellaneous";
import Bungie from "./Bungie";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/disney" element={<DisneyUnlisted />} />
        <Route
          exact
          path="/disney-unlisted-caleb-portfolio"
          element={<Disney />}
        />
        <Route exact path="/aulani" element={<AulaniUnlisted />} />
        <Route
          exact
          path="/disney-cruise"
          element={<DisneyCruiseLinesUnlisted />}
        />
        <Route exact path="/aulani-hidden" element={<Aulani />} />
        <Route
          exact
          path="/disney-cruise-hidden"
          element={<DisneyCruiseLines />}
        />
        <Route exact path="/bestbuy" element={<BestBuyUnlisted />} />
        <Route exact path="/bestbuy-unlisted-2020" element={<BestBuy />} />
        <Route exact path="/dungeon-highway" element={<DungeonHighway />} />
        <Route exact path="/miscellaneous" element={<Miscellaneous />} />
        <Route exact path="/bungie" element={<Bungie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
