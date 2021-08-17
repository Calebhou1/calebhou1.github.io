import React from "react";
import Bricks from "./components/Bricks";
import CaseStudy from "./components/CaseStudy";
import CaseStudyStat from "./components/CaseStudyStat";
import CaseStudySection from "./components/CaseStudySection";
import FadeIn from "./components/FadeIn";

const Aulani = () => (
  <CaseStudy
    title="Aulani"
    subtitle="APP FEATURE - MY PLANS"
    background="/img/aulani/background_dim.jpg"
    device=<img
      className="CaseStudy__device CaseStudy__device-aulani"
      src="/img/aulani/device.png"
      alt="Phone with Aulani app mockup"
    />
  >
    <FadeIn>
      <p>
        The Aulani app is ripe for opportunity. While the app shows reservation
        details and a variety of daily activities, users lack the ability to
        create itineraries or reservations. This project’s goal was to make the
        app experience more useful and intuitive by giving the user the ability
        to make plans with their family and to make restaurant reservations. For
        more information, please get in touch.
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
        <CaseStudyStat label="DURATION" value="8 weeks" />
        <CaseStudyStat label="TEAM" value="1 Design, 7 Dev, 1 PM" />
      </div>
    </FadeIn>

    <CaseStudySection title="My Plans">
      <Bricks desktopCols={3}>
        <img src="/img/aulani/home.png" alt="Mockup of home page" />
        <img
          src="/img/aulani/Daily Activities.png"
          alt="Mockup of Daily Activities page"
        />
        <img src="/img/aulani/My Plans.png" alt="Mockup of My Plans page" />
        <img src="/img/aulani/Custom.png" alt="Mockup of sample plan page" />
        <img
          src="/img/aulani/Add Activity interstitial.png"
          alt="Mockup of Add Activity Interstitial"
        />
        <img src="/img/aulani/Favorites.png" alt="Mockup of Favorites page" />
        <img src="/img/aulani/Share Plan.png" alt="Mockup of Share Plan page" />
        <img src="/img/aulani/Dining.png" alt="Mockup of Dining page" />
        <img src="/img/aulani/On Resort.png" alt="Mockup of On Resort page" />
      </Bricks>
    </CaseStudySection>

    <CaseStudySection title="Restaurant Reservations">
      <Bricks desktopCols={3}>
        <img
          src="/img/aulani/My Plans Add Activity Interstitial.png"
          alt="Mockup of Add Activity Interstitial"
        />
        <img
          src="/img/aulani/Select Restaurant.png"
          alt="Mockup of Selecting Restaurant"
        />
        <img
          src="/img/aulani/time interstitial.png"
          alt="Mockup of time interstitial"
        />
        <img
          src="/img/aulani/Enter Details.png"
          alt="Mockup of entering reservation details"
        />
        <img
          src="/img/aulani/Dietary Restrictions.png"
          alt="Mockup of dietary restrictions form"
        />
        <img
          src="/img/aulani/Reservation Confirmed.png"
          alt="Mockup of reservation confirmation"
        />
      </Bricks>
    </CaseStudySection>
  </CaseStudy>
);

export default Aulani;
