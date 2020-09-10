import React, { useState, useEffect, useRef } from "react";

export default (props) => {
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
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};
