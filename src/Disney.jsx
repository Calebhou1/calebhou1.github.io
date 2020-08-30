import React from "react";
import CaseStudy from "./components/CaseStudy";
import CaseStudyStat from "./components/CaseStudyStat";

const Disney = () => (
  <CaseStudy
    title="Walt Disney World"
    subtitle="WEB REDESIGN"
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
  </CaseStudy>
);

export default Disney;
