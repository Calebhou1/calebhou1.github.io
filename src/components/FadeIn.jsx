import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";

export default ({ slow, children }) => {
  const [isVisible, setVisible] = useState(true);
  const [beenVisible, setBeenVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(beenVisible || entry.isIntersecting);
        if (entry.isIntersecting) {
          setBeenVisible(true);
        }
      });
    });

    const element = domRef.current;

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [beenVisible]);

  return (
    <div
      className={cx("fade-in-section", {
        "is-visible": isVisible,
        "fade-in-section-slow": slow,
      })}
      ref={domRef}
    >
      {children}
    </div>
  );
};
