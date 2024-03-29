import React from "react";
import WorkExperienceRow from "./WorkExperienceRow";

const rows = [
  {
    company: `Miniclip`,
    product: ``,
    role: "Software Developer II",
    timeline: "Sept 2022 - Present · recent",
    noteworthy: [
      `UI graphic support for Unity Anima2D skeleton animation.`,
      `Custom Android native plugins to support the needs of the client developers.`,
      `Custom Emoji system.`,
      `Extending 3rd party SDKs by adding a custom wrapper around it.`,
    ],
    responsibilities: [
      `Support client teams`,
      `Maintain and improve in-house Unity packages such as (but not limited to) networking, Automation, Chat, Addressable etc`,
      `Create solutions for the client team which can be reused`,
      `Maintain Jenkins pipeline for client devs`,
    ],
    image: "miniclip",
    link: "https://miniclip.com",
    imageClassName: "object-scale-down",
  },
  {
    company: `Titik Pintar`,
    product: `Titik Pintar`,
    role: "Game Developer",
    timeline: "Aug 2020 - July 2022 · 2 yrs",
    noteworthy: [],
    responsibilities: [
      <span>
        Got Selected for{" "}
        <span className="text-yellow-600 font-semibold tracking-wider">
          "IMPACT COLLECTIVE"
        </span>{" "}
        supported by UNDP (United Nations Development Programme)
      </span>,
      `Performed optimization on a pre-existing codebase, and reduced draw calls by half and application size by 55%`,
      `Implemented Automatic Push Notification using OneSignal SDK and Firebase SDK`,
      `Worked with REST API's to implement various functionalities`,
      `Worked with Socket IO for Multiplayer mode`,
      `Implemented the following Analytics SDKs for tracking various things and funnels: Firebase SDK, Facebook SDK (also for Facebook Ad Campaign), Appsflyer SDK`,
      `Implemented Deep-Linking to gather User Acquisition Data on App Install`,
      `Implemented Cache system for better loading of Video and Image resources `,
      `Used Firebase Remote Config for various in-game components`,
    ],
    image: "tiktik",
    link: "https://play.google.com/store/apps/details?id=com.tp.apk&hl=en_IN&gl=US",
  },
  {
    company: `Webzool Creative`,
    product: `RSFUN`,
    role: "Game Developer (Remote)",
    timeline: "Feb 2020 - Aug 2020 · 7 mos",
    noteworthy: [],
    responsibilities: [
      `Worked on multiple Slot games, with unique functionalities`,
      `Made Editor tools for Developers to automate certain repetitive tasks`,
      `Handled all the sounds in a data-driven manner`,
      `Used Observer and Event Queue game design pattern`,
    ],
    image: "rsfun",
    link: "https://play.google.com/store/apps/details?id=com.club7.playriver&hl=en_US",
  },
  {
    company: `Big Bee Studios`,
    product: ``,
    role: "Gameplay Programmer (Unity 3D)",
    timeline: "Oct 2019 - Feb 2020 · 5 mos",
    noteworthy: [],
    responsibilities: [
      `Worked independently on gameplay mechanics`,
      `Worked with Photon PUN-2 Multiplayer`,
      `Made a generic character controller for heroes in the game`,
      `Integrated VFX into character animations`,
      `Worked with Baked and Real-time lighting in the game world`,
      `Used Raycasts to detect damage incurred`,
      `Used Raw-Axis Input and on screen click NavMesh Input together`,
    ],
    image: "bigbee2",
    isUndisclosed: true,
    link: "",
  },
  {
    company: `Big Bee Studios`,
    product: ``,
    role: "Machine Learning Engineer (Unity 3D)",
    timeline: "Aug 2019 - Sep 2019 · 2 mos",
    noteworthy: [],
    responsibilities: [
      `Worked on a 2D top down zombie survival game like Braains.io`,
      `Used machine learning brain in unity for artificial intelligence`,
      `Created a genetic algorithm.`,
      `Programmed a neural network`,
      `Worked with NavMesh Agent`,
    ],
    image: "bigbee1",
    isUndisclosed: true,
    link: "",
  },
  {
    company: `Big Bee Studios`,
    product: `RSP Slots`,
    role: "Game Developer",
    timeline: "Jun 2019 - Jul 2019 · 2 mos",
    noteworthy: [],
    responsibilities: [
      `Helped in changing the code architecture of the game`,
      `Used Knowledge of editor scripting to ease the workflow`,
      `Optimized and documented pre-existing code`,
    ],
    image: "rspslots",
    link: "https://play.google.com/store/apps/details?id=com.pczoneinc.rspslots&hl=en_US",
  },
  {
    company: `MadOverGames`,
    role: "UI Programmer (Unity 2D)",
    product: "Monster Pop",
    image: "hm",
    timeline: "Full-time · 1 yr 1 mo",
    noteworthy: [],
    responsibilities: [
      <span>
        Got Nominated for{" "}
        <span className="text-yellow-600 font-semibold tracking-wider">
          "Studio Game of the Year"
        </span>{" "}
        award at The Indian Game Developer Conference 2019
      </span>,
      `Used unity Editor Scripting for a large amount of repetitive UI related work`,
      `Worked with a programming design pattern, Observer `,
      `Used Knowledge of Music to give the game a Music related theme Which Turns out to be a USP`,
      `Worked with Spine Animations`,
    ],
    link: "https://play.google.com/store/apps/details?id=com.madovergames.MonsterPop&hl=en",
  },
  {
    company: `MadOverGames`,
    role: "UI Programmer (Unity 2D)",
    product: `Slots - Blue Diamond`,
    image: "slots",
    timeline: "May 2018 - Jan 2019 · 9 mos",
    noteworthy: [],
    responsibilities: [
      `Worked with Programming Design Patterns. (eg Singleton, Observer, Factory)`,
      `Worked with Unity UI`,
      `Integration of Sound Effects in game`,
      `Used Observer and Event Queue game design pattern`,
      `Handled Complex Unity Animator State Machine`,
      `Handled the localizations`,
      `Worked with Particle System Effects`,
      `Maintenance of the product after delivery `,
    ],
    link: "https://play.google.com/store/apps/details?id=com.madovergames.SlotsBlueDiamond&hl=en",
  },
];

const WorkExperienceSection = () => {
  return (
    <div className="container mx-auto">
      <div className="text-3xl px-6">Work experience</div>
      {rows.map((row, index) => (
        <WorkExperienceRow
          company={row.company}
          product={row.product}
          noteworthy={row.noteworthy}
          responsibilities={row.responsibilities}
          isInverted={index % 2 !== 0}
          role={row.role}
          image={row.image}
          link={row.link}
          key={index}
          isUndisclosed={row.isUndisclosed}
          timeline={row.timeline}
          imageClassName={row.imageClassName ?? ""}
        />
      ))}
    </div>
  );
};

export default WorkExperienceSection;
