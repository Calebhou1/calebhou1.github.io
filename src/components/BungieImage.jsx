import React from "react";

export default ({ src, caption }) => (
  <>
    <a href={src} target="_blank" rel="noopener">
      <img src={src} />
    </a>
    <p>{caption}</p>
  </>
);
