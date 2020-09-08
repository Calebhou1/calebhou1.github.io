import React, { useRef, useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import logo from "./img/hou_logo.png";
import profile from "./img/caleb_profile.png";
import FancyButton from "./components/FancyButton.jsx";
import FancyLink from "./components/FancyLink.jsx";

import "./css/App.scss";

const Home = () => {
  const homeRef = useRef(null);
  const myWorkRef = useRef(null);
  const aboutMeRef = useRef(null);

  const scrollTo = (ref) => {
    homeRef.current.scrollTo(0, ref.current.offsetTop);
  };

  const [bg, setBg] = useState("");

  const changeBackground = (bgClass) => {
    return (e) => {
      e.preventDefault();
      setBg(bgClass);
    };
  };

  const clearBackground = (e) => {
    e.preventDefault();
    setBg("");
  };

  return (
    <div className="Home" ref={homeRef}>
      <section className="hero">
        <p className="titles">
          UX &middot; INTERACTION &middot; VISUAL &middot; ILLUSTRATION
        </p>

        <img className="logo" src={logo} alt="HOU" />
        <FancyButton
          className="button-yellow"
          onClick={() => scrollTo(myWorkRef)}
        >
          VIEW WORK
        </FancyButton>
      </section>

      <section className={cx("my-work", bg)} ref={myWorkRef}>
        <ul>
          <h2 className="sectionTitle">MY WORK</h2>
          <li>
            <Link
              onMouseEnter={changeBackground("disney")}
              onMouseLeave={clearBackground}
              to="/disney"
            >
              Disney
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={changeBackground("bby")}
              onMouseLeave={clearBackground}
              to="/bestbuy"
            >
              Best Buy
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={changeBackground("dh")}
              onMouseLeave={clearBackground}
              to="/dungeon-highway"
            >
              Dungeon Highway
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={changeBackground("misc")}
              onMouseLeave={clearBackground}
              to="/miscellaneous"
            >
              Miscellaneous
            </Link>
          </li>
        </ul>

        <FancyButton
          containerClass="buttonContainer"
          onClick={() => scrollTo(aboutMeRef)}
        >
          ABOUT ME
        </FancyButton>
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

        <div className="contactLinks">
          <div className="contactContainer">
            <FancyLink
              className="button-yellow"
              href="mailto:calebhou1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACT
            </FancyLink>
          </div>
          <a
            className="download button button-borderless"
            href="/Caleb_resume_2020.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
