import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="CaseStudy">
    <div
      className="CaseStudy__hero CaseStudy__hero-disney"
      style={{ backgroundImage: 'url("/img/disney/background.png', height: "100vh" }}
    >
      <Link to="/" className="CaseStudy__back">
        BACK
      </Link>
      <h1>Disney</h1>

      <p>Please contact me for a link to this case study.</p>
    </div>
  </div>
);
