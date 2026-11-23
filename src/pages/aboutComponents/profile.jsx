import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.1,
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
                    className="page-title mb-6"
                >
                    Who Am I?
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.6,
                        delay: 0.3,
                    }}
                    className="site-panel"
                >
                    <p className="mb-4 body-copy">
                        A passionate developer / programmer with a strong drive for continuous improvement. I aim for the best possible outcome in the work that I do.
                    </p>
                    <p className="body-copy">
                        I specialize in building scalable and efficient applications using modern technologies.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Profile;