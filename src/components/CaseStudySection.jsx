import React from "react";
import Fade from "react-reveal/Fade";
import "../css/CaseStudySection.scss";

const CaseStudySection = ({ title, children }) => (
  <div className="CaseStudySection">
    <Fade bottom>
      <div className="CaseStudySection__label">
        <h3 className="CaseStudySection__title">{title}</h3>
        {title && <hr className="CaseStudy__line" />}
      </div>

      {children}
    </Fade>
  </div>
);

export default CaseStudySection;
