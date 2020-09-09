import React from "react";
import Bricks from "./components/Bricks";
import CaseStudy from "./components/CaseStudy";
import CaseStudySection from "./components/CaseStudySection";

const Miscellaneous = () => (
  <CaseStudy
    title="Miscellaneous"
    subtitle="SIDE PROJECTS"
    device=<img
      className="CaseStudy__device CaseStudy__device-misc"
      src="/img/misc/device - miscellaneous@2x.png"
      alt="Smartphone with Panda Express Webpage"
    />
    deviceStyle="CaseStudy__device-dh"
    background="/img/misc/header - miscellaneous@2x.png"
  >
    <p>
      These are some examples of various works I've done through the years that
      I'm proud of. They vary from illustration and branding to books and
      architectural renderings.
    </p>

    <p>For more information, please get in touch.</p>

    <CaseStudySection>
      <Bricks>
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 1@2x.png"
          alt="Panda Express Homepage"
        />
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 2@2x.png"
          alt="Panda Express Ordering Webpage"
        />
      </Bricks>
      <Bricks>
        <img
          className="CaseStudy__image"
          src="/img/misc/floating-laptop.gif"
          alt="Pactful gif"
        />

        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 4@2x.png"
          alt="Pactful mockup"
        />
      </Bricks>
      <img
        className="CaseStudy__image"
        src="/img/misc/miscellaneous - 5@2x.png"
        alt="Bud light app"
      />
      <img
        className="CaseStudy__image"
        src="/img/misc/miscellaneous - 6@2x.png"
        alt="Rendering 1"
      />
      <img
        className="CaseStudy__image"
        src="/img/misc/miscellaneous - 7@2x.png"
        alt="Rendering 2"
      />
      <img
        className="CaseStudy__image"
        src="/img/misc/miscellaneous - 8@2x.png"
        alt="Rendering 3"
      />
      <Bricks>
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 9@2x.png"
          alt="Uplift logo"
        />
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 10@2x.png"
          alt="Balfest logo 1"
        />
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 11@2x.png"
          alt="Balfest logo 2"
        />
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 12@2x.png"
          alt="Balfest logo 3"
        />
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 13@2x.png"
          alt="Dressing logo"
        />
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 14@2x.png"
          alt="Vert logo"
        />
      </Bricks>
      <img
        className="CaseStudy__image"
        src="/img/misc/miscellaneous - 15@2x.png"
        alt="Rhythm logo"
      />
      <Bricks>
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 16@2x.png"
          alt="SUURJ logo"
        />
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 17@2x.png"
          alt="Vans"
        />
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 18@2x.png"
          alt="How Short poster"
        />
        <img
          className="CaseStudy__image"
          src="/img/misc/miscellaneous - 19@2x.png"
          alt="Album cover"
        />
      </Bricks>
    </CaseStudySection>
  </CaseStudy>
);

export default Miscellaneous;
