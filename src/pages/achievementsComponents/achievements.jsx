import React from 'react';
import { motion } from "framer-motion";

const achievements = () => {
  return (
    <div className="">
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
        <div className="space-y-4">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                ease: "easeInOut",
                duration: 0.6,
                delay: 0.1,
                }}
                className="page-title"
            >
                Achievements
            </motion.h1>

            <div className="site-panel max-w-3xl">
                <p className="mb-4 body-copy">
                    
                </p>
                <p className="mb-4 body-copy">
                    
                </p>
            </div>
        </div>
    </motion.div>
    </div>
  )
}

export default achievements;