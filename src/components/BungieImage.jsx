import React from "react";

export default ({ src, caption }) => (
  <>
    <a href={src} target="_blank" rel="noopener noreferrer">
      <img src={src} name={caption} alt={caption} />
    </a>
    <p>{caption}</p>
  </>
);
