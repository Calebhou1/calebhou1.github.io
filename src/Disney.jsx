import React from "react";
import CaseStudy from "./components/CaseStudy";
import CaseStudyStat from "./components/CaseStudyStat";
import CaseStudySection from "./components/CaseStudySection";

const Disney = () => (
  <CaseStudy
    title="Walt Disney World"
    subtitle="WEB REDESIGN"
    background="/img/disney/background.png"
    backgroundStyle="CaseStudy__hero-disney"
    device=<img
      className="CaseStudy__device"
      src="/img/disney/device.png"
      alt="Laptop with Disney website on screen"
    />
  >
    <p>
      A website redesign for Walt Disney World. The current web experience is a
      smorgasbord of information that is aimed at no one in particular. This
      project was aimed at providing more personalization and contextual
      information for a guest before, during, and after their visit.
    </p>
    <p>
      Research and testing was performed across 10,000 individuals to prove the
      problem case and provide validation.
    </p>
    <p>For more information, please get in touch.</p>

    <div className="CaseStudy__stats">
      <CaseStudyStat label="MY ROLE" value="UX design, Visual design" />
      <CaseStudyStat label="DURATION" value="8 weeks" />
      <CaseStudyStat label="TEAM" value="3 Design, 4 Dev, 2 PM" />
    </div>

    <CaseStudySection title="Sketch">
      <img
        src="/img/disney/sketch.png"
        alt="Whiteboard sketch wireframe of Disney website"
      />
    </CaseStudySection>

    <CaseStudySection title="Wires">
      <img
        src="/img/disney/wire1.png"
        alt="First wireframe mockup Disney website"
      />
      <img
        src="/img/disney/wire2.png"
        alt="Second wireframe mockup of Disney website"
      />
      <img
        src="/img/disney/wire3.png"
        alt="Third wireframe mockup of Disney website"
      />
    </CaseStudySection>

    <CaseStudySection title="Comps">
      <img src="/img/disney/comp1.png" alt="First comp of Disney website" />
      <img src="/img/disney/comp2.png" alt="Second comp of Disney website" />
    </CaseStudySection>
  </CaseStudy>
);

export default Disney;