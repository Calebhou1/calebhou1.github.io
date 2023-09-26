import React, { Children, useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import AuthScreen from "./AuthScreen";
import FadeIn from "./FadeIn";
import "../css/CaseStudy.scss";

const CaseStudy = ({
  title,
  subtitle,
  device,
  background,
  backgroundStyle,
  summaryStyle,
  deviceSpacerStyle,
  children,
}) => {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <AuthScreen onAuth={() => setAuthenticated(true)} />;
  }

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
        <div
          className={cx("CaseStudy__device-spacer", deviceSpacerStyle)}
        ></div>
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
