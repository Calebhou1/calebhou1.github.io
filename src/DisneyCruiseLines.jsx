import React from "react";
import { Link } from "react-router-dom";
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
    device={
      <img
        className="CaseStudy__device CaseStudy__device-disneycruise"
        src="/img/disneycruise/device.png"
        alt="Phone with Disney Cruise Lines app mockup"
      />
    }
  >
    <FadeIn>
      <p>
        During Covid-19, Disney Cruise Lines were forced to halt all sailings.
        During this down-time, we began to think of ways to make the cruise
        ships more accessible and respectful of social-distancing policies. This
        project’s focus was aimed at improving the guest experience by making
        food ordering more streamlined, reducing wait times, and preventing
        crowding.
      </p>
      <p>
        My vision for this project was to create a feature that allows for
        guests to enjoy a well-earned vacation and stay safe while doing so.
      </p>
    </FadeIn>
    <FadeIn>
      <p>For more information, please get in touch.</p>
    </FadeIn>

    <FadeIn>
      <div className="CaseStudy__stats">
        <CaseStudyStat label="MY ROLE" value="UX design, Visual design" />
        <CaseStudyStat label="DURATION" value="9 weeks" />
        <CaseStudyStat label="TEAM" value="3 Design, 7 Dev, 1 PM" />
      </div>
    </FadeIn>

    <CaseStudySection title="Situation">
      <p>
        To prevent crowding on cruise ships during the pandemic, my team and I
        focused on reducing traffic in the busiest areas on deck. We aimed to
        provide a way for users to order their food on their phones to reduce
        lines at the food/drink venues. This interface would also alleviate the
        number of calls the concierge takes daily.
      </p>
      <img src="/img/disneycruise/situation1.jpeg" />
      <h2>Goals</h2>
      <p>
        Business goals were to reduce crowding around the ships, increase
        revenue from pool-side delivery and room service delivery, and reduce
        calls to the on-ship concierge.
      </p>
    </CaseStudySection>

    <CaseStudySection title="Discovery">
      <p>
        While half of our research was focused on our users, the other half was
        spent interviewing crew members to better understand the fulfillment
        process. This step was crucial to creating a feature that would be
        helpful rather than detrimental to the crew’s daily work routine.
      </p>
      <Bricks desktopCols={1}>
        <img src="/img/disneycruise/discovery1.png" />
        <img src="/img/disneycruise/discovery2.png" />
      </Bricks>
    </CaseStudySection>

    <CaseStudySection title="Workshop">
      <p>
        My team and I designed and ran a 2-day virtual workshop with our
        partners to create journey maps for both guests and crew members for 2
        scenarios: in-person pickup and room service.
      </p>
      <Bricks desktopCols={3}>
        <img src="/img/disneycruise/workshop1.png" />
        <img src="/img/disneycruise/workshop2.png" />
        <img src="/img/disneycruise/workshop3.png" />
        <img src="/img/disneycruise/workshop4.png" />
        <img src="/img/disneycruise/workshop5.png" />
        <img src="/img/disneycruise/workshop6.png" />
        <img src="/img/disneycruise/workshop7.png" />
        <img src="/img/disneycruise/workshop8.png" />
        <img src="/img/disneycruise/workshop9.png" />
      </Bricks>
      <img src="/img/disneycruise/workshop10.png" />
    </CaseStudySection>

    <CaseStudySection title="Wires">
      <p>
        We frequently tested our flows to ensure that my designs met guest and
        crew member expectations. My team and I then incorporated the responses
        from the tests to meet the standard of Disney experiences.
      </p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/evVugClF4CI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Bricks desktopCols={3}>
        <img src="/img/disneycruise/wire1.png" />
        <img src="/img/disneycruise/wire2.png" />
        <img src="/img/disneycruise/wire3.png" />
        <img src="/img/disneycruise/wire4.png" />
        <img src="/img/disneycruise/wire5.png" />
      </Bricks>
    </CaseStudySection>

    <CaseStudySection title="Design">
      <p>
        The Disney Cruise Line app has a well established visual style that is
        heavily reliant on colorful imagery and animated illustrations. While
        the food and beverage customization features have a more utilitarian
        design, I wanted us to create a more lively experience using animations
        and bright colors in the post-confirmation flow.
      </p>
      <Bricks desktopCols={3}>
        <img src="/img/disneycruise/design1.png" />
        <img src="/img/disneycruise/design2.png" />
        <img src="/img/disneycruise/design3.png" />
        <img src="/img/disneycruise/design4.png" />
      </Bricks>
      <h2>Customization</h2>
      <p>
        The designs responded to research that revealed the necessity for food
        and beverage customization by providing advanced customizable options
        including specialty items and nutritional accommodations.
      </p>
      <Bricks desktopCols={3}>
        <img src="/img/disneycruise/custom1.png" />
        <img src="/img/disneycruise/custom2.png" />
        <img src="/img/disneycruise/custom3.png" />
        <img src="/img/disneycruise/custom4.png" />
        <img src="/img/disneycruise/custom5.png" />
        <img src="/img/disneycruise/custom6.png" />
      </Bricks>
    </CaseStudySection>

    <CaseStudySection title="Testing">
      <p>
        Testing was focused around Pick Up, Room Service, and Up-sell Offerings
        to 2 dozen users. My team conducted bi-weekly tests through the
        wireframe and design phase, using moderated usability testing and A/B
        preference testing. We received consistent positive feedback on the
        value proposition and the design and I used the data to pivot the team’s
        design direction where necessary.
      </p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RqdVXjoAmvk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xLWZryf5m6g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </CaseStudySection>

    <CaseStudySection title="Release">
      <p>
        The Mobile Order feature is set to release in Q3 of 2022, coinciding
        with the maiden voyage of the Disney Wish. The feature has been tested
        among crew members who look forward to offering this service with no
        disruption to their daily routine. Based on our testing, guests are
        excited to use this unique feature to enhance their Disney cruise
        experience, as other cruises do not offer this convenience.
      </p>
      <p>For more information, please get in touch.</p>
    </CaseStudySection>

    <CaseStudySection>
      <h2 className="sectionTitle">MORE WORK</h2>
      <div className="CaseStudy__more-links">
        <Link to="/aulani-hidden">Aulani</Link>
      </div>
    </CaseStudySection>
  </CaseStudy>
);

export default DisneyCruiseLines;
