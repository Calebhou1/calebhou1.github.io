import React from "react";

const CaseStudySection = ({ title, children }) => (
  <div className="CaseStudySection">
    <div className="CaseStudySection__label">
      <h3 className="CaseStudySection__title">{title}</h3>
      <hr className="CaseStudy__line" />
    </div>

    {children}
  </div>
);

export default CaseStudySection;
