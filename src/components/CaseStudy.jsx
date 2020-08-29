import React from "react";
import { useHistory } from "react-router-dom";
import "../css/CaseStudy.scss";

const CaseStudy = ({ title, subtitle, children }) => {
  let history = useHistory();
  return (
    <div className="CaseStudy">
      <div className="CaseStudy__hero">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <button onClick={history.goBack}>BACK</button>
      </div>

      {children}
    </div>
  );
};

export default CaseStudy;
