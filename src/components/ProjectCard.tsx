import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const MotionLink = motion(Link);

interface ProjectProps {
  title: string;
  technologies: string[];
  description: string;
  githubUrl: string;
  link: string;
  image: string;
  reverse?: boolean;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  technologies,
  description,
  githubUrl,
  link,
  image,
  reverse = false,
  featured = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-12 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-850 shadow-2xl hover:shadow-xl transition-all duration-500 group`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          Featured
        </div>
      )}

      {/* Image container with improved styling */}
      <motion.div
        className={`relative lg:w-[50%] w-full max-w-lg mx-auto overflow-hidden rounded-xl ${
          reverse ? "lg:ml-8" : "lg:mr-8"
        }`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Project link overlay */}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20"
          >
            <FaExternalLinkAlt className="text-white text-2xl" />
          </motion.div>
        </Link>

        {/* Image with loading state */}
        <div className="relative aspect-video overflow-hidden">
          <div
            className={`absolute inset-0 bg-gray-800 animate-pulse ${
              imageLoaded ? "hidden" : "block"
            }`}
          />
          <Image
            src={image}
            alt={title}
            fill
            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="lg:w-[50%] w-full space-y-6 text-left">
        {/* Title with accent underline */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-white mb-2 inline-block">
            {title}
          </h3>
          <motion.div
            className="h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-800 hover:bg-gray-750 text-gray-200 text-sm px-3 py-1.5 rounded-full font-medium transition-colors duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="flex gap-4 pt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <MotionLink
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
          >
            <FaGithub size={18} />
            <span>Code Repository</span>
          </MotionLink>

          <MotionLink
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-3 border border-gray-700 hover:border-red-500 text-white flex items-center gap-2 transition-all duration-300 rounded-lg group/view"
          >
            <span>Live Demo</span>
            <FiArrowUpRight
              size={16}
              className="group-hover/view:translate-x-0.5 group-hover/view:-translate-y-0.5 transition-transform"
            />
          </MotionLink>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
