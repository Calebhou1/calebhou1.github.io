import React from "react";
import CaseStudy from "./components/CaseStudy";
import CaseStudyStat from "./components/CaseStudyStat";
import CaseStudySection from "./components/CaseStudySection";

const DungeonHighway = () => (
  <CaseStudy
    title="Dungeon Highway"
    subtitle="VIDEO GAME"
    device=<img
      className="CaseStudy__device"
      src="/img/dh/device - dungeon highway@2x.png"
      alt="Smartphone playing Dungeon Highway"
    />
    deviceStyle="CaseStudy__device-dh"
    summaryStyle="CaseStudy__summary-dh"
    background="/img/dh/background.png"
  >
    <p>
      A short project whipped up while on the bench managed to get 500,000
      downloads on the App Store and earn the Steam Greenlight.
    </p>

    <p>For more information, please get in touch.</p>

    <div className="CaseStudy__stats">
      <CaseStudyStat label="MY ROLE" value="UX, Art Direction" />
      <CaseStudyStat label="DURATION" value="2 months" />
      <CaseStudyStat label="TEAM" value="1 Designer, 2 Developers, 1 PM" />
    </div>

    <div className="video-container">
      <iframe
        title="Dungeon Highway Steam Gameplay Trailer"
        src="https://www.youtube.com/embed/m0ZawwCwSKI"
        className="CaseStudy__video"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <CaseStudySection title="Wire">
      <img
        src="/img/dh/dungeon highway - wire1@2x.png"
        alt="Wireframe of Dungeon Highway Design"
      />
    </CaseStudySection>

    <CaseStudySection title="Screens">
      <img
        src="/img/dh/dungeon highway - screen1@2x.png"
        alt="Hero Character Sheet"
      />
      <img
        src="/img/dh/dungeon highway - screen2@2x.png"
        alt="Enemy Character Sheet"
      />
      <img
        src="/img/dh/dungeon highway - screen3@2x.png"
        alt="Gameplay Screen 1"
      />
      <img
        src="/img/dh/dungeon highway - screen4@2x.png"
        alt="Gameplay Screen 2"
      />
      <img
        src="/img/dh/dungeon highway - screen5@2x.png"
        alt="Gameplay Screen 3"
      />
      <img
        src="/img/dh/dungeon highway - screen6@2x.png"
        alt="Controls Screen"
      />
      <img
        src="/img/dh/dungeon highway - screen7@2x.png"
        alt="Leaderboards Screen"
      />
    </CaseStudySection>
  </CaseStudy>
);

export default DungeonHighway;
