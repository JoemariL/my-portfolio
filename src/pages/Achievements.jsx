import React from 'react';

import AchievementsTab from "./achievementsComponents/achievements";
import CertificationsTab from './achievementsComponents/certifications';

const Achievements = () => {
  return (
    <div className="site-container page-spacing space-y-12 sm:space-y-16">
        <AchievementsTab />
        <CertificationsTab />
    </div>
  )
}

export default Achievements;