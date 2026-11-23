import React from 'react';
import { motion } from "framer-motion";
import {
    SiWindows,
    SiLinux,
    SiDocker,
    SiKubernetes,
    SiMongodb,
    SiMysql,
    SiSqlite,
    SiPostgresql,
    SiPython,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiGit,
    SiGithub,
    SiGitlab,
    SiPostman,
    SiInsomnia,
    SiAmazonaws,
    SiGooglecloud,
    SiMicrosoftazure,
    SiCloudflare,
    SiNginx,
    SiJenkins,
    SiElasticsearch,
    SiSplunk,
    SiF5,
    SiTerraform,
    SiAnsible,
} from 'react-icons/si';

const skillsData = [
    {
        category: "Operating Systems",
        skills: [
            { id: 1, name: "Windows", icon: <SiWindows className="size-8" /> },
            { id: 2, name: "Linux", icon: <SiLinux className="size-8" /> },
        ],
    },
    {
        category: "Networks and Cloud",
        skills: [
            { id: 3, name: "F5 Networks & ASM", icon: <SiF5 className="size-8" /> },
            { id: 4, name: "Cloudflare", icon: <SiCloudflare className="size-8" /> },
            { id: 5, name: "AWS", icon: <SiAmazonaws className="size-8" /> },
            { id: 6, name: "Google Cloud", icon: <SiGooglecloud className="size-8" /> },
            { id: 7, name: "Azure", icon: <SiMicrosoftazure className="size-8" /> },
            { id: 8, name: "Nginx", icon: <SiNginx className="size-8" /> },
            { id: 9, name: "Docker", icon: <SiDocker className="size-8" /> },
            { id: 10, name: "Kubernetes", icon: <SiKubernetes className="size-8" /> },
        ],
    },
    {
        category: "Databases",
        skills: [
            { id: 11, name: "MongoDB", icon: <SiMongodb className="size-8" /> },
            { id: 12, name: "MySQL", icon: <SiMysql className="size-8" /> },
            { id: 13, name: "SQLite", icon: <SiSqlite className="size-8" /> },
            { id: 14, name: "PostgreSQL", icon: <SiPostgresql className="size-8" /> },
        ],
    },
    {
        category: "Programming",
        skills: [
            { id: 15, name: "Python", icon: <SiPython className="size-8" /> },
            { id: 16, name: "JavaScript", icon: <SiJavascript className="size-8" /> },
            { id: 17, name: "React.js", icon: <SiReact className="size-8" /> },
            { id: 18, name: "Node.js", icon: <SiNodedotjs className="size-8" /> },
        ],
    },
    {
        category: "DevOps Tools",
        skills: [
            { id: 19, name: "Terraform", icon: <SiTerraform className="size-8" /> },
            { id: 20, name: "Ansible", icon: <SiAnsible className="size-8" /> },
            { id: 21, name: "Docker", icon: <SiDocker className="size-8" /> },
            { id: 22, name: "Kubernetes", icon: <SiKubernetes className="size-8" /> },
            { id: 23, name: "Jenkins", icon: <SiJenkins className="size-8" /> },
        ],
    },
    {
        category: "Tools",
        skills: [
            { id: 24, name: "Git", icon: <SiGit className="size-8" /> },
            { id: 25, name: "GitHub", icon: <SiGithub className="size-8" /> },
            { id: 26, name: "GitLab", icon: <SiGitlab className="size-8" /> },
            { id: 27, name: "Postman", icon: <SiPostman className="size-8" /> },
            { id: 28, name: "Insomnia", icon: <SiInsomnia className="size-8" /> },
            { id: 29, name: "CMD", icon: <SiWindows className="size-8" /> }, // Placeholder icon
            { id: 30, name: "Bash", icon: <SiLinux className="size-8" /> }, // Placeholder icon
            { id: 31, name: "Elasticsearch", icon: <SiElasticsearch className="size-8" /> },
            { id: 32, name: "Splunk", icon: <SiSplunk className="size-8" /> },
        ],
    },
];

const Skills = () => {
    return (
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
            <div className="space-y-8">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.6,
                        delay: 0.1,
                    }}
                    className="section-title"
                >
                    My Skills So Far
                </motion.h1>

                {skillsData.map((category) => (
                    <div key={category.category} className="mt-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.6,
                                delay: 0.2,
                            }}
                            className="card-title mb-4"
                        >
                            {category.category}
                        </motion.h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 0.6,
                                        delay: skill.id * 0.1,
                                    }}
                                    className="site-panel flex flex-col items-center text-center hover:scale-105 transition-transform"
                                >
                                    <div className="text-accent mb-4">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-base font-semibold">
                                        {skill.name}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;