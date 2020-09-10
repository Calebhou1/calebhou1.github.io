import React, { useRef, useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import logo from "./img/logo.svg";
import profile from "./img/caleb_profile.png";
import FancyButton from "./components/FancyButton.jsx";
import FancyLink from "./components/FancyLink.jsx";
import FadeIn from "./components/FadeIn";

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
        <div className={cx("disneyBg", "bg", { show: bg === "disney" })}></div>
        <div className={cx("bbyBg", "bg", { show: bg === "bby" })}></div>
        <div className={cx("dhBg", "bg", { show: bg === "dh" })}></div>
        <div className={cx("miscBg", "bg", { show: bg === "misc" })}></div>

        <div className="my-work-content">
          <ul>
            <FadeIn slow>
              <h2 className="sectionTitle">MY WORK</h2>
            </FadeIn>
            <li>
              <FadeIn slow>
                <Link
                  onMouseEnter={changeBackground("disney")}
                  onMouseLeave={clearBackground}
                  to="/disney"
                >
                  Disney
                </Link>
              </FadeIn>
            </li>
            <li>
              <FadeIn slow>
                <Link
                  onMouseEnter={changeBackground("bby")}
                  onMouseLeave={clearBackground}
                  to="/bestbuy"
                >
                  Best Buy
                </Link>
              </FadeIn>
            </li>
            <li>
              <FadeIn slow>
                <Link
                  onMouseEnter={changeBackground("dh")}
                  onMouseLeave={clearBackground}
                  to="/dungeon-highway"
                >
                  Dungeon Highway
                </Link>
              </FadeIn>
            </li>
            <li>
              <FadeIn slow>
                <Link
                  onMouseEnter={changeBackground("misc")}
                  onMouseLeave={clearBackground}
                  to="/miscellaneous"
                >
                  Miscellaneous
                </Link>
              </FadeIn>
            </li>
          </ul>

          <FancyButton
            containerClass="buttonContainer"
            svgClass="yellowStroke"
            onClick={() => scrollTo(aboutMeRef)}
          >
            ABOUT ME
          </FancyButton>
        </div>
      </section>

      <section className="about-me" ref={aboutMeRef}>
        <FadeIn>
          <img
            className="profile-pic"
            src={profile}
            alt="Photograph of Caleb Hou with yellow-crested cockatoo on shoulder"
          />
        </FadeIn>

        <FadeIn>
          <h2 className="sectionTitle">ABOUT ME</h2>
        </FadeIn>

        <FadeIn>
          <p>
            My favorite part of my job is figuring out problems and creating
            gorgeous solutions through design. Whether it's an app, website, or
            game, I'm always excited to jump in and help figure out the right
            approach.
          </p>
        </FadeIn>

        <FadeIn>
          <p>
            To me, design is more than just pixels on a screen or lines on a
            paper. It's about making things that enable individuals, help them
            accomplish their goals, and make them smile along the way. If I can
            make even a single person crack a grin just by how enjoyable an
            experience was, I consider the effort worthwhile.
          </p>
        </FadeIn>

        <div className="contactLinks">
          <FadeIn>
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
          </FadeIn>
          <FadeIn>
            <a
              className="download button button-borderless"
              href="/Caleb_resume_2020.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD RESUME
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
