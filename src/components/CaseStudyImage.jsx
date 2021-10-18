import React, { Children } from "react";
import "../css/CaseStudyImage.scss";

const CaseStudyImage = ({ src, alt, children }) => (
  <div className="CaseStudyImage">
    <img src={src} alt={alt} />
    {children}
  </div>
);

export default CaseStudyImage;
