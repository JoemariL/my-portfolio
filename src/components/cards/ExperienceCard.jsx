import React from "react";
import { FiMapPin } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import { motion } from "framer-motion";

const ExperienceCard = ({ 
  logo, 
  companyName, 
  duration, 
  position, 
  type, 
  location, 
  description, 
  children, 
  ...rest 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="site-panel h-full"
      {...rest}
    >
      {/* Company Logo */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="mb-4 md:mb-0 md:mr-6">
          <img
            src={logo}
            className="object-contain size-20 lg:size-24 rounded-lg"
            alt="company-logo"
          />
        </div>

        {/* Experience Details */}
        <div className="text-center md:text-left">
          <h3 className="card-title">{companyName}</h3>
          <p className="text-sm text-muted mt-1">{duration}</p>

          <div className="flex items-center justify-center md:justify-start text-muted mt-2">
            <BsBriefcase className="mr-2" />
            <span>{position} - {type}</span>
          </div>
          
          <div className="flex items-center justify-center md:justify-start text-muted mt-1">
            <FiMapPin className="mr-2" />
            <span>{location}</span>
          </div>

          <p className="text-muted mt-4">{description}</p>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-6">{children}</div>
    </motion.div>
  );
};

export default ExperienceCard;
