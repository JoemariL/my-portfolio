import ScrollPanels from '../../components/layout/ScrollPanels';
import ExperienceCard from "./ExperienceCard";

// Logo imports
import gpLogo from "../../assets/logos/global-payments.png"
import nexusLogo from "../../assets/logos/nexus.png";
import sluLogo from "../../assets/logos/saint-louis-university.png";

const experienceData = [
    {
        id: 1,
        logo: gpLogo,
        companyName: "Global Payments",
        duration: "August 2024 - Present",
        type: "Full time",
        position: "Web Application Firewall Analyst",
        location: "Quezon City, Philippines",
        description: "Responsible for On-Premise and Cloud Web Application Firewalls",
        responsibilities: [
            "Web Application Firewall Setup, Optimization, Tuning, Configuration",
            "Develops tools and scripts for Web Application Firewall deployments configuration and troubleshooting",
            "Develops WAF integration tools using Terraform with Application Developers to perform continuous deployment"
        ],
    },
    {
        id: 2,
        logo: nexusLogo,
        companyName: "Nexus Technologies Inc.",
        duration: "August 2022 - August 2024",
        type: "Full time",
        position: "Jr. Systems Engineer | Network Systems",
        location: "Makati City, Philippines",
        description: "Responsible for Setup, Configuration, and Troubleshooting of network systems WAF, SIEMs, PacketBroker, Load Balancer",
        responsibilities: [
            "Setting up, maintenance, and troubleshooting of Cloud Web application Firewalls",
            "Handling setup, maintenance, and troubleshooting of virtual machines",
            "Maintenance and troubleshooting of load balancers",
        ],
    },
    {
        id: 3,
        logo: sluLogo,
        companyName: "Saint Louis University",
        duration: "January 2022 - June 2022",
        type: "Internship",
        position: "Full Stack Developer",
        location: "Baguio City, Philippines",
        description: "Developed a web-based application for a digitized Health Declaration Form",
        responsibilities: [
            "Contributed to planning and designing for the Triage System web application",
            "Developed Back-end using Node.js, Express.js, and MongoDB",
            "Developed Front-end using React.js and Tailwind CSS",
            "Deployed web application using NGINX and Virtual Machines",
        ],
    },
];

const Experience = () => (
  <ScrollPanels title="My Experience">
    {experienceData.map(({ id, ...experience }) => (
      <ExperienceCard key={id} {...experience} />
    ))}
  </ScrollPanels>
);

export default Experience;
