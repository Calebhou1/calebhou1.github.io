import React, { Children } from "react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import "../css/CaseStudy.scss";

const CaseStudy = ({
  title,
  subtitle,
  device,
  background,
  backgroundStyle,
  summaryStyle,
  children,
}) => {
  return (
    <div className="CaseStudy">
      <div
        className={"CaseStudy__hero " + backgroundStyle}
        style={{ backgroundImage: `url("${background}")` }}
      >
        <Link to="/" className="CaseStudy__back button">
          BACK
        </Link>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>

      <div className="CaseStudy__content">
        {device}
        <FadeIn>
          <h3 className={"CaseStudy__summary " + summaryStyle}>SUMMARY</h3>
        </FadeIn>
        {Children.map(children, (child, i) => (
          <FadeIn key={i}>{child}</FadeIn>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
