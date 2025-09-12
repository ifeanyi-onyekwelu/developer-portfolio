"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer (Full-Stack)",
      company: "Kedusoft | Remote",
      period: "Sep 2024 – Jul 2025",
      description:
        "Led full-stack development of scalable SaaS and fintech platforms. Boosted monthly transaction processing to $50K+ by integrating Stripe and Paystack, optimized PostgreSQL queries and Redis caching to cut API response times by 35%, and enhanced mobile conversion rates by 22% through redesigned TypeScript/React UI. Deployed Docker-based microservices with GitHub Actions CI/CD, scaling workloads on Kubernetes.",
      technologies: [
        "React",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "Stripe",
        "Paystack",
      ],
    },
    {
      role: "Software Developer",
      company: "World Brain Technology | Enugu, NG",
      period: "Feb 2024 – Aug 2024",
      description:
        "Delivered a SaaS platform for SMEs (10K+ users) with React, Node.js, GraphQL, and PostgreSQL. Built AI-driven dashboards enabling real-time insights and scaled microservices to handle 50K+ daily requests on AWS and GCP using Docker and Kubernetes.",
      technologies: [
        "React",
        "Node.js",
        "GraphQL",
        "PostgreSQL",
        "AWS",
        "GCP",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      role: "Lecturer (Software Development)",
      company: "Aptech Computer Education",
      period: "Sep 2022 – Dec 2023",
      description:
        "Taught full-stack web development courses including JavaScript, React, Node.js, and databases. Mentored 100+ students through hands-on projects, coding labs, and career workshops. Designed and delivered structured curriculum to improve student pass rates and technical readiness.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "MySQL"],
    },
    {
      role: "Junior Developer Intern",
      company: "CV2 Career Internship | Remote",
      period: "Aug 2023 – Jan 2024",
      description:
        "Contributed to a SaaS platform serving 10K+ active users. Implemented and deployed 5+ production features on a Python + Firebase stack, improved user retention by 20% through feature enhancements, and reduced customer-reported bugs by 50% with stability-focused releases.",
      technologies: ["Python", "Firebase", "SaaS", "Agile", "CI/CD"],
    },
    {
      role: "Freelance Contract Developer",
      company: "BeeTec | Remote",
      period: "Apr 2022 – Aug 2022",
      description:
        "Worked on multiple client projects as a contract developer. Built and deployed responsive web applications, integrated APIs, and optimized performance for business use cases. Delivered projects on time while collaborating closely with remote teams.",
      technologies: ["React", "Next.js", "Node.js", "TailwindCSS"],
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
            My professional journey and contributions
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
