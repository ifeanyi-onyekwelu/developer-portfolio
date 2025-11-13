"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/ifeanyi.jpg" // Replace with actual image
                alt="Ifeanyi working on projects"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 border-2 border-amber-500/30 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Crafting digital experiences with precision
            </h3>
            <p className="text-gray-300">
              I&apos;m a passionate software developer with expertise in
              building exceptional digital experiences. With a focus on modern
              web technologies, I specialize in creating responsive,
              user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-300">
              My journey in development started 4 years ago, and since tpos;
              I&amp;ve worked with various technologies including React,
              Next.js, Node.js, and blockchain development. I&apos;m constantly
              learning and expanding my skill set to stay at the forefront of
              web and mobile development.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="text-amber-500 font-semibold">Name:</h4>
                <p className="text-gray-300">Ifeanyi Onyekwelu</p>
              </div>
              <div>
                <h4 className="text-amber-500 font-semibold">Email:</h4>
                <p className="text-gray-300">ifeanyionyekwelu786@gmail.com</p>
              </div>
              <div>
                <h4 className="text-amber-500 font-semibold">Age:</h4>
                <p className="text-gray-300">20</p>
              </div>
              <div>
                <h4 className="text-amber-500 font-semibold">From:</h4>
                <p className="text-gray-300">Enugu, Nigeria</p>
              </div>
            </div>{" "}
            <motion.a
              href="#contact"
              className="inline-block mt-6 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Work Together
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
