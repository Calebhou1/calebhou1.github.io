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
        src="/img/bby/best buy - board1@2x.png"
        alt="Whiteboard showing design process"
      />
      <img
        src="/img/bby/best buy - board2@2x.png"
        alt="Second whiteboard showing design process"
      />
    </CaseStudySection>

    <CaseStudySection title="Wires">
      <img src="/img/bby/AR wire Copy 2.png" />
      <img src="/img/bby/AR wire.png" />
      <img src="/img/bby/best buy - wire1.png" />
      <img src="/img/bby/best buy - wire2.png" />
      <img src="/img/bby/best buy - wire3.png" />
    </CaseStudySection>

    <CaseStudySection title="Comps">
      <img
        src="/img/bby/best buy - comp1@2x.png"
        alt="Comp of Best Buy website"
      />
      <img
        src="/img/bby/best buy - comp2@2x.png"
        alt="Comp of Best Buy website"
      />
      <img
        src="/img/bby/best buy - comp3@2x.png"
        alt="Comp of Best Buy website"
      />
      <img
        src="/img/bby/best buy - comp4@2x.png"
        alt="Comp of Best Buy website"
      />
      <img
        src="/img/bby/best buy - comp5@2x.png"
        alt="Comp of Best Buy website"
      />
      <img
        src="/img/bby/best buy - comp6@2x.png"
        alt="Comp of Best Buy website"
      />
      <img
        src="/img/bby/best buy - comp7@2x.png"
        alt="Comp of Best Buy website"
      />
      <img
        src="/img/bby/best buy - comp8@2x.png"
        alt="Comp of Best Buy website"
      />
      <img
        src="/img/bby/best buy - comp9@2x.png"
        alt="Comp of Best Buy website"
      />
      <img
        src="/img/bby/best buy - comp10@2x.png"
        alt="Comp of Best Buy website"
      />
      <img
        src="/img/bby/best buy - comp11@2x.png"
        alt="Comp of Best Buy website"
      />
    </CaseStudySection>
  </CaseStudy>
);

export default BestBuy;
