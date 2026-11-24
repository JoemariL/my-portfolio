import React from 'react';
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const descriptionData = [
	{
		id: 1,
		name: 'lopezjoemari1@gmail.com', // Add your email here
		icon: <FiMail />,
	},
	{
		id: 2,
		name: '+63 949 627 2670', // Add your phone number here
		icon: <FiPhone />,
	},
	{
		id: 3,
		name: 'Philippines', // Add your address here
		icon: <FiMapPin />,
	},
];

const Contact = () => {
  return (
    <div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
            ease: "easeInOut",
            duration: 1.0,
            delay: 0.4,
            }}
            className="w-full"
        >
            <div className="w-full">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                    ease: "easeInOut",
                    duration: 0.6,
                    delay: 0.1,
                    }}
                    className="section-title mb-6"
                >
                    My Contacts
                </motion.h1>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {descriptionData.map((info) => (
                    <li className="site-panel flex flex-col items-center text-center" key={info.id}>
                        <i className="text-3xl mb-2 text-accent">
                            {info.icon}
                        </i>
                        <span className="body-copy break-all">
                            {info.name}
                        </span>
                    </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    </div>
  );
};

export default Contact;