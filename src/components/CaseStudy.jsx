import React from "react";
import { useHistory } from "react-router-dom";
import "../css/CaseStudy.scss";

const CaseStudy = ({
  title,
  subtitle,
  device,
  background,
  backgroundStyle,
  children
}) => {
  let history = useHistory();
  return (
    <div className="CaseStudy">
      <div
        className={"CaseStudy__hero " + backgroundStyle}
        style={{ backgroundImage: `url("${background}")` }}
      >
        <button className="CaseStudy__back" onClick={history.goBack}>
          BACK
        </button>
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
