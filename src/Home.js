import React from "react";
import logo from "./img/hou_logo.png";
import profile from "./img/caleb_profile.png";

function Home() {
  return (
    <div className="Home">
      <section className="hero">
        <p className="titles">
          UX &middot; Interaction &middot; Visual &middot; Illustration
        </p>

        <img className="logo" src={logo} alt="HOU" />
        <button className="button-yellow">VIEW WORK</button>
      </section>

      <section className="my-work">
        <h2 className="sectionTitle">MY WORK</h2>

        <ul>
          <li>
            <a href="#">Disney</a>
          </li>
          <li>
            <a href="#">Best Buy</a>
          </li>
          <li>
            <a href="#">Dungeon Highway</a>
          </li>
          <li>
            <a href="#">Miscellaneous</a>
          </li>
        </ul>

        <button>ABOUT ME</button>
      </section>

      <section className="about-me">
        <img
          className="profile-pic"
          src={profile}
          alt="Photograph of Caleb Hou with yellow-crested cockatoo on shoulder"
        />

        <h2 className="sectionTitle">ABOUT ME</h2>

        <p>
          My favorite part of my job is figuring out problems and creating
          gorgeous solutions through design. Whether it's an app, website, or
          game, I'm always excited to jump in and help figure out the right
          approach.
        </p>

        <p>
          To me, design is more than just pixels on a screen or lines on a
          paper. It's about making things that enable individuals, help them
          accomplish their goals, and make them smile along the way. If I can
          make even a single person crack a grin just by how enjoyable an
          experience was, I consider the effort worthwhile.
        </p>

        <a
          className="button button-yellow"
          href="mailto:calebhou1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET IN TOUCH
        </a>
        <button className="button-borderless">DOWNLOAD RESUME</button>
      </section>
    </div>
  );
}

export default Home;
