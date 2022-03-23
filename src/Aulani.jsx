import React from "react";
import Bricks from "./components/Bricks";
import CaseStudy from "./components/CaseStudy";
import CaseStudyImage from "./components/CaseStudyImage";
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
        The Aulani app was ripe for opportunity. While it shows off your
        reservation details and a variety of experiences, users lack the ability
        to create an itinerary or to make restaurant reservations.
        Simultaneously, the app’s design is dated and performs poorly in
        discoverability and accessibility. This project’s goals were to improve
        the discoverability of events, increase guest usage of the app
        throughout the day, and decrease the amount of calls the guest helpline
        receives.
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
        <CaseStudyStat label="DURATION" value="9 weeks" />
        <CaseStudyStat label="TEAM" value="3 Design, 7 Dev, 1 PM" />
      </div>
    </FadeIn>

    <CaseStudySection title="Situation">
      <Bricks desktopCols={1}>
        <CaseStudyImage src="/img/aulani/booklet.jpeg" alt="Booklet">
          Guests come to Aulani because they are Disney fans and want to
          experience the plethora of activities included in their stay. However,
          most guests spend up to 20 minutes each morning reading and planning
          their day from a booklet and having to call guest services for more
          details.
        </CaseStudyImage>
        <CaseStudyImage src="/img/aulani/persona.png" alt="Family on beach">
          Partnering with CIMA (Consumer Insights, Management & Analytics), we
          ran a study on 900 people to learn their top priorities: view their
          schedule, make an itinerary, and make reservations. Our main personas
          (40% of adults) are focused on getting as much value as they can from
          their stay and want to have every day planned.
        </CaseStudyImage>
      </Bricks>
    </CaseStudySection>

    <CaseStudySection title="CURRENT">
      <p>
        The app shows reservation details and the daily activity schedule, but
        guests are left wanting. The design is dated and users complain about
        not being able to find more details about the activities aside from the
        title. Initially, the task for the project was to add an “Add to Plan”
        button on the schedule page as well as a “My Plans” tab on the tab bar.
        Given the state of the design and the user complaints, I saw an
        opportunity to polish this app to a Disney level of quality.
      </p>
      <Bricks desktopCols={3}>
        <img src="/img/aulani/current1.png" />
        <img src="/img/aulani/current2.png" />
        <img src="/img/aulani/current3.png" />
        <img src="/img/aulani/current4.png" />
        <img src="/img/aulani/current5.png" />
      </Bricks>
    </CaseStudySection>

    <CaseStudySection title="Workshop">
      <Bricks desktopCols={1}>
        <CaseStudyImage src="/img/aulani/workshop.png">
          My team and I designed and ran a day-long workshop with all the
          partners to determine what we could achieve in our MVP that
          accomplished the user goals of seeing what activities were available
          at any time, building their itinerary, and booking dining
          reservations.
        </CaseStudyImage>
        <CaseStudyImage src="/img/aulani/user stories.png">
          My PM and I then categorized and prioritized a list of user stories
          for the coming year. I managed expectations by scoping out each ticket
          and assigned them accordingly to my design team.
        </CaseStudyImage>
        <CaseStudyImage src="/img/aulani/IA.png">
          The output of the workshop resulted in an Information Architecture in
          which we mapped out our strategy for the future.
        </CaseStudyImage>
      </Bricks>
    </CaseStudySection>

    <CaseStudySection title="Iterations">
      <p>
        Most of my inspiration came from Google Maps and Airbnb. The visual
        design explorations I did were focused on improving discoverability
        while maintaining the Disney standard of quality. Some unique
        considerations I had came from collaborating with on-site cultural
        experts that advised me on utilizing native patterns/imagery to respect
        local tradition while tying the app closer to the resort experience.
      </p>
      <Bricks desktopCols={3}>
        <img src="/img/aulani/iteration1.png" />
        <img src="/img/aulani/iteration2.png" />
        <img src="/img/aulani/iteration3.png" />
        <img src="/img/aulani/iteration4.png" />
        <img src="/img/aulani/iteration5.png" />
        <img src="/img/aulani/iteration6.png" />
      </Bricks>
    </CaseStudySection>

    <CaseStudySection title="Design">
      <p>
        During the design process, we ran tests to ensure that designs aligned
        with our initial strategy. The testing maintained a 100% success rate
        and the core usage pattern was “As expected” or “Better than expected”
        in our post-test surveys. This can be attributed to the major
        improvements in visual design and how My Plans/My Favorites fit into the
        Explore tab.
      </p>
      <Bricks desktopCols={3}>
        <img src="/img/aulani/design1.png" />
        <img src="/img/aulani/design2.png" />
        <img src="/img/aulani/design3.png" />
        <img src="/img/aulani/design4.png" />
        <img src="/img/aulani/design5.png" />
        <img src="/img/aulani/design6.png" />
        <img src="/img/aulani/design7.png" />
        <img src="/img/aulani/design8.png" />
        <img src="/img/aulani/design9.png" />
      </Bricks>

      <h2>Restaurant Reservations</h2>
      <Bricks desktopCols={3}>
        <img src="/img/aulani/restaurant1.png" />
        <img src="/img/aulani/restaurant2.png" />
        <img src="/img/aulani/restaurant3.png" />
        <img src="/img/aulani/restaurant4.png" />
        <img src="/img/aulani/restaurant5.png" />
      </Bricks>

      <h2>Spec Sheet</h2>
      <p>
        Design handoff consists of the design spec sheet with detailed
        interaction notes and designer/developer pairing.
      </p>
      <Bricks desktopCols={1}>
        <img src="/img/aulani/specs.png" />
      </Bricks>
    </CaseStudySection>

    <CaseStudySection title="Result">
      <p>
        This feature is currently under development and is set to launch in Q3
        2022. Additional testing among dozens of participants have shown guests
        are better able to learn about events and are eager to build out their
        daily itinerary.
      </p>
      <p>
        My team and I are currently working on the v2 of My Plans to include
        animations, Mobile Food Ordering, and Mobile Activity Reservations with
        third party vendors. Additionally, we are working on adding an digital
        play tool to the “Menehune Adventure Trail.”
      </p>
      <p>For more information, please get in touch.</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8rBhuT3PsXQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </CaseStudySection>
  </CaseStudy>
);

export default Aulani;
