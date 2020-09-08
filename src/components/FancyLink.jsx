import React from "react";
import cx from "classnames";

import "../css/FancyButton.scss";

export default ({
  className,
  containerClass,
  onClick,
  href,
  target,
  rel,
  children,
}) => (
  <div className={cx("container", containerClass)}>
    <div className="center">
      <a
        className={cx("btn", "button", className)}
        href={href}
        target={target}
        rel={rel}
      >
        <svg
          width="180px"
          height="48px"
          viewBox="0 0 180 48"
          className="border"
        >
          <polyline points="179,1 179,47 1,47 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,47 1,47 1,1 179,1" className="hl-line" />
        </svg>
        <span>{children}</span>
      </a>
    </div>
  </div>
);
