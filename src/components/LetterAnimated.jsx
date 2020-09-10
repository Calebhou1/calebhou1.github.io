import React from "react";
import ReactAnime from "react-animejs";

const { Anime } = ReactAnime;

export default ({ text }) => {
  return (
    <Anime
      initial={[
        {
          targets: ".letter",
          easing: "easeInOutQuad",
          opacity: [0, 1],
          duration: 500,
          delay: (el, i) => 50 * (i + 1),
        },
      ]}
    >
      {text.split("").map((l, i) => (
        <span className="letter" key={i}>
          {l}
        </span>
      ))}
    </Anime>
  );
};
