import React from 'react';

// Pages import
import ProfileTab from "./aboutComponents/profile";
import SkillsTab from "./aboutComponents/skills";
import ExperienceTab from "./aboutComponents/experience";
import ContactTab from "./aboutComponents/contact";

const About = () => {
  return (
    <div className="site-container page-spacing space-y-12 sm:space-y-16">
      <ProfileTab />
      <SkillsTab />
      <ExperienceTab />
    </div>
  )
}

export default About;