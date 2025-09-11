import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto max-w-6xl space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white/80 font-montserrat">
            Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            Here are some of the technologies I&apos;ve been working with
            recently.
          </p>
        </motion.div>

        {/* Example cards */}
        <ProjectCard
          title="Battleship"
          technologies={["HTML", "CSS", "Javascript", "Node.js"]}
          description="Used components of Javascript to implement basic data structures through the game of Battleship. Used a terminal to display ships and tracked where ships are hit or missed."
          githubUrl="#"
          link="#"
          image="/project.jpg"
        />
        <ProjectCard
          title="Another Project"
          technologies={["React", "Tailwind", "Framer Motion"]}
          description="This one has reversed layout."
          githubUrl="#"
          link="#"
          image="/project.jpg"
          reverse
        />
      </div>
    </section>
  );
};

export default Projects;
