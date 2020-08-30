import React from "react";
import { Link } from "react-router-dom";
import "../css/CaseStudy.scss";

const CaseStudy = ({
  title,
  subtitle,
  device,
  background,
  backgroundStyle,
  children
}) => {
  return (
    <div className="CaseStudy">
      <div
        className={"CaseStudy__hero " + backgroundStyle}
        style={{ backgroundImage: `url("${background}")` }}
      >
        <Link to="/" className="CaseStudy__back">
          BACK
        </Link>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>

      <div className="CaseStudy__content">
        {device}
        <h3 className="CaseStudy__summary">SUMMARY</h3>
        {children}
      </div>
    </div>
  );
};

export default CaseStudy;
