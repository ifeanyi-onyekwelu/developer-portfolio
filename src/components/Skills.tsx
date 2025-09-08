"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Skill data
const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "/icons/javascript.svg", proficiency: 90 },
      { name: "TypeScript", icon: "/icons/typescript.svg", proficiency: 85 },
      { name: "Python", icon: "/icons/python.svg", proficiency: 80 },
      { name: "Go", icon: "/icons/go.svg", proficiency: 60 }, // already in Backend
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5 / CSS3", icon: "/icons/html5.svg", proficiency: 90 },
      { name: "TailwindCSS", icon: "/icons/tailwind.svg", proficiency: 80 },
      { name: "React", icon: "/icons/react.svg", proficiency: 88 },
      { name: "Next.js", icon: "/icons/nextjs.svg", proficiency: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "/icons/nodejs.svg", proficiency: 85 },
      { name: "Express", icon: "/icons/express.svg", proficiency: 80 },
      { name: "Django", icon: "/icons/django.svg", proficiency: 70 },
      { name: "FastAPI", icon: "/icons/fastapi.svg", proficiency: 65 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: "/icons/postgres.svg", proficiency: 75 },
      { name: "MongoDB", icon: "/icons/mongodb.svg", proficiency: 80 },
      { name: "MySQL", icon: "/icons/mysql.svg", proficiency: 70 },
      { name: "Redis", icon: "/icons/redis.svg", proficiency: 65 },
    ],
  },
  {
    category: "Web3",
    items: [
      { name: "Solidity", icon: "/icons/solidity.svg", proficiency: 70 },
      { name: "Ethers.js", icon: "/icons/ethers.svg", proficiency: 75 },
      { name: "Hardhat", icon: "/icons/hardhat.svg", proficiency: 65 },
      { name: "IPFS", icon: "/icons/ipfs.svg", proficiency: 60 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: "/icons/docker.svg", proficiency: 75 },
      { name: "AWS", icon: "/icons/aws.svg", proficiency: 65 },
      { name: "CI/CD", icon: "/icons/cicd.svg", proficiency: 70 },
      { name: "Kubernetes", icon: "/icons/kubernetes.svg", proficiency: 60 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: "/icons/github.svg", proficiency: 90 },
      { name: "Git", icon: "/icons/git.svg", proficiency: 85 },
      { name: "Postman", icon: "/icons/postman.svg", proficiency: 80 },
      { name: "VS Code", icon: "/icons/vscode.svg", proficiency: 90 },
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SkillsGrid = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    icon: string;
    proficiency: number;
  } | null>(null);

  return (
    <section className="py-20 px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white/80 font-montserrat">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            Here are some of the technologies I&apos;ve been working with
            recently.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-white/50 border-b border-gray-700 pb-2 font-roboto-mono">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center p-3 rounded-lg bg-gray-900/50 cursor-pointer hover:bg-gray-800/70 transition-colors"
                    onClick={() =>
                      setSelectedSkill(
                        selectedSkill && selectedSkill.name === skill.name
                          ? null
                          : skill
                      )
                    }
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 mr-4">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        width={25}
                        height={25}
                      />
                    </div>
                    <div className="flex-grow text-white/75">
                      <p className="font-medium text-sm">{skill.name}</p>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-xl max-w-md w-full p-6 border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-3 mr-4">
                  <Image
                    src={selectedSkill.icon}
                    alt={selectedSkill.name}
                    className="w-full h-full object-contain"
                    width={25}
                    height={25}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
                  <p className="text-gray-300">
                    Proficiency: {selectedSkill.proficiency}%
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                  style={{ width: `${selectedSkill.proficiency}%` }}
                />
              </div>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                onClick={() => setSelectedSkill(null)}
                className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillsGrid;
