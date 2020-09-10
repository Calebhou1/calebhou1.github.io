import React, { Children } from "react";
import FadeIn from "./FadeIn";
import "../css/CaseStudySection.scss";

const CaseStudySection = ({ title, children }) => (
  <div className="CaseStudySection">
    <div className="CaseStudySection__label">
      <FadeIn>
        <h3 className="CaseStudySection__title">{title}</h3>
      </FadeIn>
      {title && (
        <FadeIn>
          <hr className="CaseStudy__line" />
        </FadeIn>
      )}
    </div>

    {Children.map(children, (child, i) => (
      <FadeIn key={i}>{child}</FadeIn>
    ))}
  </div>
);

export default CaseStudySection;
