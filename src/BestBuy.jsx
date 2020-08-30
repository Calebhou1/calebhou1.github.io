import React from "react";
import CaseStudy from "./components/CaseStudy";
import CaseStudyStat from "./components/CaseStudyStat";
import CaseStudySection from "./components/CaseStudySection";

const BestBuy = () => (
  <CaseStudy
    title="Best Buy Home"
    subtitle="APP"
    device=<img
      className="CaseStudy__device"
      src="/img/bby/device.png"
      alt="Smartphone with Best Buy website on screen"
    />
    background="/img/bby/background.jpg"
  >
    <p>
      The Best Buy Home App is Best Buy's approach to developing a constant
      relationship with their customers outside of the store. By providing a
      support-focused experience, they would be able to provide value on a
      consistent basis.
    </p>

    <p>
      I spent 2 years as the lead designer on this project. Notable features
      include: Smart home functionality, Augmented Reality, Optical Character
      Recognition, live streaming, and more.
    </p>

    <p>For more information, please get in touch.</p>

    <div className="CaseStudy__stats">
      <CaseStudyStat
        label="MY ROLE"
        value="UX, Visual, Research, Illustration, Prototyping"
      />
      <CaseStudyStat label="DURATION" value="2 years" />
      <CaseStudyStat label="TEAM" value="Fluctuating" />
    </div>

    <img
      className="CaseStudy__image"
      src="/img/bby/icons.png"
      alt="Best Buy Icons Design"
    />

    <CaseStudySection title="IA">
      <img src="/img/bby/ia1.png" alt="Information Architecture Diagram 1" />
      <img src="/img/bby/ia2.png" alt="Information Architecture Diagram 2" />
    </CaseStudySection>

    <CaseStudySection title="Boards">
      <img
        src="/img/disney/wire1.png"
        alt="First wireframe mockup BestBuy website"
      />
      <img
        src="/img/disney/wire2.png"
        alt="Second wireframe mockup of BestBuy website"
      />
      <img
        src="/img/disney/wire3.png"
        alt="Third wireframe mockup of BestBuy website"
      />
    </CaseStudySection>

    <CaseStudySection title="Comps">
      <img src="/img/disney/comp1.png" alt="First comp of BestBuy website" />
      <img src="/img/disney/comp2.png" alt="Second comp of BestBuy website" />
    </CaseStudySection>
  </CaseStudy>
);

export default BestBuy;
