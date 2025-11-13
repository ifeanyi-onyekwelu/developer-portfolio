"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: "Expert", icon: "/icons/html5.svg" },
        { name: "JavaScript", level: "Expert", icon: "/icons/javascript.svg" },
        { name: "React", level: "Advanced", icon: "/icons/react.svg" },
        { name: "Next.js", level: "Advanced", icon: "/icons/nextjs.svg" },
        {
          name: "TypeScript",
          level: "Intermediate",
          icon: "/icons/typescript.svg",
        },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "/icons/nodejs.svg" },
        { name: "GO", level: "Intermediate", icon: "/icons/go.svg" },
        { name: "Python", level: "Intermediate", icon: "/icons/python.svg" },
        { name: "FastAPI", level: "Intermediate", icon: "/icons/fastapi.png" },
        {
          name: "MySQL/PostgreSQL",
          level: "Intermediate",
          icon: "/icons/postgres.svg",
        },
      ],
    },
    {
      category: "Other Technologies",
      skills: [
        { name: "Git/GitHub", level: "Advanced", icon: "/icons/github.svg" },
        {
          name: "Docker",
          level: "Intermediate",
          icon: "/icons/docker.svg",
        },
        {
          name: "Solidity",
          level: "Intermediate",
          icon: "/icons/solidity.svg",
        },
        { name: "AWS", level: "Intermediate", icon: "/icons/aws.svg" },
        {
          name: "Tailwind CSS",
          level: "Advanced",
          icon: "/icons/tailwind.svg",
        },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500/20 text-green-400";
      case "Advanced":
        return "bg-blue-500/20 text-blue-400";
      case "Intermediate":
        return "bg-amber-500/20 text-amber-400";
      case "Beginner":
        return "bg-gray-500/20 text-gray-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are the technologies I&apos;ve been working with recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-white text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 mr-4">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={25}
                        height={25}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-white text-sm">
                        {skill.name}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
