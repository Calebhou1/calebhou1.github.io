import React from "react";
import ReactAnime from "react-animejs";

const { Anime } = ReactAnime;

// Wrap every letter in a span
// var textWrapper = document.querySelector(".ml3");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /\S/g,
//   "<span class='letter'>$&</span>"
// );
//
// anime
//   .timeline({ loop: true })
//   .add({
//     targets: ".ml3 .letter",
//     opacity: [0, 1],
//     easing: "easeInOutQuad",
//     duration: 2250,
//     delay: (el, i) => 150 * (i + 1),
//   })
//   .add({
//     targets: ".ml3",
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000,
//   });

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
