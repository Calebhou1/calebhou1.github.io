import React from "react";
import BungieImage from "./components/BungieImage";
import { Link } from "react-router-dom";
import "./css/Bungie.scss";

export default () => (
  <div className="bungie">
    <h1>Rethinking Triumphs in Destiny 2</h1>
    <h2>By Caleb Hou</h2>
    <div className="description">
      <p>
        Hello and thank you for viewing my design project. This project is an
        expression of my admiration of Destiny 2 from a player perspective as
        well as a view into my passion for thinking through user experience
        design problems.
      </p>
      <p>
        In my career of 10 years, I’ve worked on a wide variety of projects
        including mobile games, apps for Disney World, and websites for
        non-profit organizations. Across all these projects, my ultimate goal
        has remained the same: to bring enjoyment to users. In my current
        position as a Senior Product Designer at Disney, I'm working on a
        project that will help thousands of people get the most out of their
        experience at the parks, resorts, and cruise lines. And while my work is
        enjoyable, my passion for gaming has led me to seek a more meaningful
        position in UX design in games. I hope to use my skills at Bungie to
        contribute to the creation of memorable experiences for fellow gamers.
      </p>
      <p>
        Below is my perspective on the UX of the Triumph system in Destiny 2.
        This presentation exemplifies my capability for heuristic analysis,
        information architecture, persona development, and wire-framing with
        applicability to UX design in games. Thank you for your consideration.
      </p>
    </div>
    <BungieImage
      src="/img/bungie/01 - Consolidating triumphs.png"
      caption="Consolidating triumphs"
    />
    <BungieImage
      src="/img/bungie/02 - Current experience.png"
      caption="Current Experience"
    />
    <BungieImage
      src="/img/bungie/03 - Research plan.png"
      caption="Research plan"
    />
    <BungieImage src="/img/bungie/04 - Persona.png" caption="Persona" />
    <BungieImage
      src="/img/bungie/05 - Player journey map.png"
      caption="Player journey map"
    />
    <BungieImage src="/img/bungie/06 - Current IA.png" caption="Current IA" />
    <BungieImage
      src="/img/bungie/07 - Intermediary IA. Create links between triumphs and lore books and collections..png"
      caption="Intermediary IA. Create links between triumphs and lore books and collections."
    />
    <BungieImage
      src="/img/bungie/08 - New Structure IA - Reorganizing the Triumphs tab and the Quests tab to be consolidated..png"
      caption="New Structure IA - Reorganizing the Triumphs tab and the Quests tab to be consolidated."
    />
    <BungieImage
      src="/img/bungie/09 - Director Wireframe - Concept 1. This design creates a 2 page design, similar to the character screen. Players can use the up or down buttons on the D pad to navigate between screens. This design allows for players to track up to 3 triumphs.png"
      caption="Director Wireframe - Concept 1. This design creates a 2 page design,
      similar to the character screen. Players can use the up or down buttons on
      the D pad to navigate between screens. This design allows for players to
      track up to 3 triumphs"
    />
    <BungieImage
      src="/img/bungie/10 - Director Wireframe - Concept 2. This design puts Bounties, Quests and Triumphs all together..png"
      caption="Director Wireframe - Concept 2. This design puts Bounties, Quests and Triumphs all together"
    />
    <BungieImage
      src="/img/bungie/11 - Director Wireframe - Concept 3. An alternate view of Concept 2..png"
      caption="Director Wireframe - Concept 3. An alternate view of Concept 2"
    />
    <BungieImage
      src="/img/bungie/12 - The only addition here is the inclusion of a button to allow the player to view the associated reward..png"
      caption="The only addition here is the inclusion of a button to allow the player to view the associated reward."
    />
    <BungieImage
      src="/img/bungie/13 - Ghost - Concept 1. This design allows for 1 triumph to be tracked alongside 3 bounties..png"
      caption="Ghost - Concept 1. This design allows for 1 triumph to be tracked alongside 3 bounties."
    />
    <BungieImage
      src="/img/bungie/14 - Ghost - Concept 2. This design allows the player to track up to 3 triumphs along with their bounties. If the player is in Crucible, the default view will bring up the player roster, and the player can page up or down with the D pad..png"
      caption="Ghost - Concept 2. This design allows the player to track up to 3 triumphs along with their bounties. If the player is in Crucible, the default view will bring up the player roster, and the player can page up or down with the D pad."
    />
    <BungieImage
      src="/img/bungie/15 - The Triumphs tab has now been renamed the Achievements tab. Triumphs have been moved to the Director, and a larger affordance has been made for seals..png"
      caption="The Triumphs tab has now been renamed the Achievements tab. Triumphs have been moved to the Director, and a larger affordance has been made for seals."
    />
    <BungieImage
      src="/img/bungie/16 - Non-secret lore pages now show what triumph they are associated to, along with a button to navigate to that triumph page..png"
      caption="Non-secret lore pages now show what triumph they are associated to, along with a button to navigate to that triumph page."
    />
    <BungieImage
      src="/img/bungie/17 - Usability test plan along with desired metrics..png"
      caption="Usability test plan along with desired metrics."
    />

    <h2 className="sectionTitle">MORE WORK</h2>
    <div className="CaseStudy__more-links">
      <a
        href="/Hou, Caleb - Bungie UX Design Test.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Destiny Finishers
      </a>
      <Link to="/aulani-hidden">Aulani</Link>
      <Link to="/disney-cruise-hidden">Disney Cruise Lines</Link>
    </div>
  </div>
);
