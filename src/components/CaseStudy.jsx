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
        <FadeIn>
          <h1>{title}</h1>
        </FadeIn>
        <FadeIn>
          <h2>{subtitle}</h2>
        </FadeIn>
      </div>

      <div className="CaseStudy__content">
        <FadeIn>{device}</FadeIn>
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
