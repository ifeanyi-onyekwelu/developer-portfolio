import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa6";
import { Button } from "./ui/button";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

interface SocialLinks {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const MotionButton = motion(Button);
const MotionImage = motion(Image);

const Hero = () => {
  const socialLinks: SocialLinks[] = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/heis.ifeanyi_/",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ifeanyichukwu-onyekwelu",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/ifeanyi-onyekwelu",
      icon: <FaGithub />,
    },
    { name: "X", url: "https://x.com/Code_w_Ifeanyi", icon: <FaXTwitter /> },
  ];

  const typedwords = (
    <Typewriter
      words={[
        "Software",
        "Full-Stack",
        "Mobile App",
        "Wordpress",
        "Blockchain",
        "Smart Contract",
      ]}
      loop
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );

  return (
    <motion.section
      className="py-16 px-4 md:py-24 md:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <motion.div className="container mx-auto h-full max-w-6xl">
        <motion.div className="flex flex-col md:flex-row h-full md:items-center justify-center md:justify-between gap-12 md:gap-16">
          <motion.div className="flex flex-col md:flex-row md:gap-10 gap-8 h-fit order-2 md:order-1">
            <motion.div className="hidden md:block">
              <motion.ul
                className="flex md:flex-col flex-row md:gap-7 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delayChildren: 0.3,
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {socialLinks &&
                  socialLinks.map((link) => (
                    <motion.li
                      key={link.name}
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                        },
                      }}
                      className="text-2xl md:text-3xl text-white/70 hover:text-amber-500 transition-colors duration-300 hover:scale-110"
                    >
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </Link>
                    </motion.li>
                  ))}
              </motion.ul>
            </motion.div>

            <motion.div className="flex flex-col items-start gap-6 text-white">
              <motion.div className="flex items-center gap-4 mb-2">
                <motion.div
                  className="h-1 w-10 bg-amber-500"
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                ></motion.div>
                <motion.h5
                  className="m-0 font-medium text-xl font-roboto-mono text-amber-500"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Hello, I&apos;m
                </motion.h5>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Ifeanyi
                <br />
                <span className="text-amber-500">Onyekwelu</span>
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl mt-4 mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <p className="flex flex-wrap items-center gap-2">
                  <span>A</span>
                  <span className="text-secondary font-semibold text-2xl md:text-3xl min-h-[1.5em] inline-block">
                    {typedwords}
                  </span>
                  <span>Developer</span>
                </p>
                <p className="text-gray-300 mt-2">based in Enugu, Nigeria</p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <MotionButton
                  className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-6 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-amber-500/30 flex items-center gap-2"
                  size="lg"
                >
                  <FaPaperPlane />
                  Got a project?
                </MotionButton>
                <MotionButton
                  className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 py-6 px-8 rounded-lg font-semibold transform hover:-translate-y-1 flex items-center gap-2"
                  size="lg"
                >
                  <FaDownload />
                  My Resume
                </MotionButton>
              </motion.div>

              {/* Mobile social links */}
              <motion.div className="flex md:hidden gap-6 mt-8">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-white/70 hover:text-amber-500 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <MotionImage
                src="/default.jpg"
                alt="Ifeanyi Onyekwelu - Developer"
                width={400}
                height={400}
                className="mx-auto w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-amber-500 shadow-2xl shadow-amber-500/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              />
              <motion.div
                className="absolute -inset-4 border-2 border-amber-500/30 rounded-full -z-10"
                animate={{
                  rotate: 360,
                  transition: {
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  },
                }}
              ></motion.div>
              <motion.div
                className="absolute -inset-6 border border-amber-500/10 rounded-full -z-10"
                animate={{
                  rotate: -360,
                  transition: {
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                  },
                }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
