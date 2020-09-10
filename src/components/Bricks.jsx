import React, { Children } from "react";
import Masonry from "react-masonry-css";
import FadeIn from "./FadeIn";

export default ({ children, desktopCols = 2 }) => (
  <Masonry
    breakpointCols={{ default: desktopCols, 700: 1 }}
    className="masonry-grid"
    columnClassName="masonry-grid_column"
  >
    {Children.map(children, (child, i) => (
      <FadeIn key={i}>{child}</FadeIn>
    ))}
  </Masonry>
);
