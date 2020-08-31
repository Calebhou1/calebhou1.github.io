import React from "react";
import Masonry from "react-masonry-css";

export default ({ children, desktopCols = 2 }) => (
  <Masonry
    breakpointCols={{ default: desktopCols, 700: 1 }}
    className="masonry-grid"
    columnClassName="masonry-grid_column"
  >
    {children}
  </Masonry>
);
