import React from "react";
import cx from "classnames";

import "../css/FancyButton.scss";

export default ({ className, containerClass, onClick, children }) => (
  <div className={cx("container", containerClass)}>
    <div className="center">
      <button className={cx("btn", "button", className)} onClick={onClick}>
        <svg
          width="180px"
          height="60px"
          viewBox="0 0 180 60"
          className="border"
        >
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>{children}</span>
      </button>
    </div>
  </div>
);
