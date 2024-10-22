import React from "react";

import dynamic from "next/dynamic";
const AboutMission = dynamic(
  () => import("@/components/AboutPageComponents/AboutMission/AboutMission"),
);
const AboutPageHero = dynamic(
  () => import("@/components/AboutPageComponents/AboutPageHero/AboutPageHero"),
);
const AboutService = dynamic(
  () => import("@/components/AboutPageComponents/AboutService/AboutService"),
);

const About = () => {
  return (
    <div className="w-full px-15">
      <div className="h-screen">
        <AboutPageHero />

      </div>

      <AboutMission />
      <AboutService />
    </div>
  );
};

export default About;
