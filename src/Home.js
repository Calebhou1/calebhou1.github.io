import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "./img/hou_logo.png";
import profile from "./img/caleb_profile.png";

import "./css/App.scss";

const Home = () => {
  const myWorkRef = useRef(null);
  const aboutMeRef = useRef(null);

  const scrollTo = ref => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <div className="Home">
      <section className="hero">
        <p className="titles">
          UX &middot; INTERACTION &middot; VISUAL &middot; ILLUSTRATION
        </p>

        <img className="logo" src={logo} alt="HOU" />
        <button className="button-yellow" onClick={() => scrollTo(myWorkRef)}>
          VIEW WORK
        </button>
      </section>

      <section className="my-work" ref={myWorkRef}>
        <h2 className="sectionTitle">MY WORK</h2>

        <ul>
          <li>
            <Link to="/disney">Disney</Link>
          </li>
          <li>
            <Link to="/bestbuy">Best Buy</Link>
          </li>
          <li>
            <Link to="/dungeon-highway">Dungeon Highway</Link>
          </li>
          <li>
            <Link to="/miscellaneous">Miscellaneous</Link>
          </li>
        </ul>

        <button onClick={() => scrollTo(aboutMeRef)}>ABOUT ME</button>
      </section>

      <section className="about-me" ref={aboutMeRef}>
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
        <a
          className="button button-borderless"
          href="/Caleb_resume_2020.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD RESUME
        </a>
      </section>
    </div>
  );
};

export default Home;
