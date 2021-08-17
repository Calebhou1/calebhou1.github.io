import React from "react";
import Bricks from "./components/Bricks";
import CaseStudy from "./components/CaseStudy";
import CaseStudyStat from "./components/CaseStudyStat";
import CaseStudySection from "./components/CaseStudySection";
import FadeIn from "./components/FadeIn";

const DisneyCruiseLines = () => (
  <CaseStudy
    title="Disney Cruise Lines"
    subtitle="APP FEATURE - MOBILE ORDER"
    background="/img/disneycruise/background_dim.png"
    backgroundStyle="CaseStudy__hero-disneycruise"
    device=<img
      className="CaseStudy__device CaseStudy__device-disneycruise"
      src="/img/disneycruise/device.png"
      alt="Phone with Disney Cruise Lines app mockup"
    />
  >
    <FadeIn>
      <p>
        During Covid-19, Disney Cruise Lines were forced to halt all cruises.
        During this down-time, we began ideating on ways to make the cruise
        ships more accessible and respectful of social- distancing policies.
        This project’s focus was aimed at improving the guest experience by
        making food ordering more streamlined, reducing the time waiting in line
        and preventing crowding.
      </p>
    </FadeIn>
    <FadeIn>
      <p>For more information, please get in touch.</p>
    </FadeIn>

    <FadeIn>
      <div className="CaseStudy__stats">
        <CaseStudyStat
          label="MY ROLE"
          value="UX design, Visual design, Illustration"
        />
        <CaseStudyStat label="DURATION" value="12 weeks" />
        <CaseStudyStat label="TEAM" value="2 Design, 9 Dev, 3 PM" />
      </div>
    </FadeIn>

    <CaseStudySection title="Room Service Map">
      <img
        src="/img/disneycruise/Room Service Map.png"
        alt="Room Service Map"
      />
    </CaseStudySection>

    <CaseStudySection title="Wires">
      <Bricks desktopCols={3}>
        <img src="/img/disneycruise/wires/Item Detail.jpg" alt="Item Detail" />
        <img src="/img/disneycruise/wires/Bag.png" alt="Bag" />
        <img
          src="/img/disneycruise/wires/Purchase PIN Entry.png"
          alt="Purchase PIN Entry"
        />
        <img src="/img/disneycruise/wires/Received.png" alt="Received" />
        <img src="/img/disneycruise/wires/Picked Up.png" alt="Picked Up" />
      </Bricks>
    </CaseStudySection>

    <CaseStudySection title="Comps">
      <Bricks desktopCols={3}>
        <img src="/img/disneycruise/comps/More Screen.png" alt="More Screen" />
        <img
          src="/img/disneycruise/comps/Venue Listing.png"
          alt="Venue Listing"
        />
        <img src="/img/disneycruise/comps/Menu.png" alt="Menu" />
        <img src="/img/disneycruise/comps/menu scrolled.png" alt="Menu 2" />
        <img
          src="/img/disneycruise/comps/Makahiki 3 course dinner.png"
          alt="Makahiki 3 course dinner"
        />
        <img src="/img/disneycruise/comps/Latte.png" alt="Latte" />
        <img src="/img/disneycruise/comps/Starter.png" alt="Select a starter" />
        <img
          src="/img/disneycruise/comps/Picked Up.png"
          alt="Order picked up"
        />
        <img
          src="/img/disneycruise/comps/Confirmation.png"
          alt="Order received"
        />
        <img src="/img/disneycruise/comps/Bag.png" alt="Your bag" />
      </Bricks>
    </CaseStudySection>
  </CaseStudy>
);

export default DisneyCruiseLines;
