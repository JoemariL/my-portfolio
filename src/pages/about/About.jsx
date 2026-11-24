import React from 'react';

// Pages import
import ProfileTab from "./Profile";
import SkillsTab from "./Skills";

const About = () => {
  return (
    <div className="site-container page-spacing space-y-12 sm:space-y-16">
      <ProfileTab />
      <SkillsTab />
    </div>
  )
}

export default About;