import React from "react";

const CaseStudy = ({ title, subtitle, children }) => (
  <div className="CaseStudy">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    {children}
  </div>
);

export default CaseStudy;
