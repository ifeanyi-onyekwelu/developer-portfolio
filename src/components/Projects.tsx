"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Investment Analytics Platform",
      description:
        "A full-stack investment analytics platform with real-time data visualization and user authentication.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
      image: "/projects/hedgeon-finance.png",
      githubUrl: "https://github.com/ifeanyi-onyekwelu/hedgeon-finance",
      liveUrl: "https://hedgeon-finance-ifekels-projects.vercel.app/",
      featured: true,
    },
    {
      title: "ReginaNostra School Management System",
      description:
        "A comprehensive school management system with real-time tracking and reporting.",
      technologies: ["Next.js", "Node.js", "Tailwind CSS"],
      image: "/projects/reginanostra.png",
      githubUrl: "https://github.com/ifeanyi-onyekwelu/regina-nostras-schools",
      liveUrl: "https://www.reginanostraschools.com/",
      featured: false,
    },
    {
      title: "1010 Realty Group",
      description:
        "Collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "/projects/1010.png",
      githubUrl: "https://github.com/ifeanyi-onyekwelu/10-10-realty-group",
      liveUrl: "https://1010-realty-group.vercel.app/",
      featured: false,
    },
    {
      title: "NFT Marketplace",
      description:
        "Blockchain-based NFT marketplace with minting, buying, and selling functionality.",
      technologies: ["Solidity", "Web3.js", "React", "IPFS"],
      image: "/project4.jpg",
      githubUrl: "https://github.com/ifeanyi-onyekwelu/nft-marketplace",
      liveUrl: "https://nft-marketplace-demo.vercel.app",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">My Projects</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-amber-500/30 transition-colors duration-300 group"
            >
              <div className="relative overflow-hidden">
                <div className="h-48 w-full relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-amber-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-amber-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.a>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-amber-500 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-amber-500 transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-amber-500 transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
