import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="CaseStudy">
    <div
      className="CaseStudy__hero"
      style={{
        backgroundImage: 'url("/img/bby/background.jpg',
        height: "100vh",
      }}
    >
      <Link to="/" className="CaseStudy__back">
        BACK
      </Link>
      <h1>Best Buy</h1>

      <p className="fade">Please contact me for a link to this case study.</p>
    </div>
  </div>
);
