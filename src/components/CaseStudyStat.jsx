import React from "react";

const CaseStudyStat = ({ label, value }) => (
  <div className="CaseStudyStat">
    <div className="CaseStudyStat__label">{label}</div>
    <hr className="CaseStudyStat__line" />
    <div className="CaseStudyStat__value">{value}</div>
  </div>
);

export default CaseStudyStat;
