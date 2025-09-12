"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Developed and maintained responsive web applications using React and Next.js. Collaborated with UX designers to implement user-friendly interfaces.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      role: "Web Developer Intern",
      company: "Digital Agency LLC",
      period: "2021 - 2022",
      description:
        "Assisted in building client websites and web applications. Gained experience in modern web development practices and tools.",
      technologies: ["JavaScript", "HTML/CSS", "WordPress", "PHP"],
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      period: "2020 - 2021",
      description:
        "Worked with various clients to develop websites and web applications. Managed projects from conception to deployment.",
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My professional journey and experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-7 md:left-1/2 -translate-x-1/2 h-full w-1 bg-amber-500/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-gray-900 z-10"></div>

                <div className="md:w-1/2 mb-4 md:mb-0 md:py-4">
                  <div
                    className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-amber-500 font-medium">
                      {exp.company} • {exp.period}
                    </p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700 text-amber-500 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
