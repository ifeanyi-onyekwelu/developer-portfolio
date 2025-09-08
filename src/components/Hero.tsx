import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
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
      words={["Software", "Full-Stack", "Wordpress", "Blockchain"]}
      loop
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );

  return (
    <motion.section className="py-16 px-4 md:py-24 md:px-6 lg:px-8 flex items-center justify-center">
      <motion.div className="container mx-auto h-full">
        <motion.div className="flex flex-col md:flex-row h-full md:items-center justify-center md:justify-between gap-12 md:gap-6">
          <motion.div className="flex flex-col md:flex-row md:gap-10 gap-8 h-fit">
            <motion.div>
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
                      className="text-2xl md:text-3xl text-white/70 hover:text-amber-500 transition-colors"
                    >
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </Link>
                    </motion.li>
                  ))}
              </motion.ul>
            </motion.div>

            <motion.div className="flex md:flex-row flex-col items-start md:gap-6 text-white">
              <motion.div className="h-1 w-10 bg-amber-700 mt-3"></motion.div>

              <motion.div className="flex flex-col gap-5 md:gap-7">
                <motion.h5
                  className="m-0 font-medium text-xl font-roboto-mono"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Hello
                </motion.h5>
                <motion.h1
                  className="text-4xl md:text-6xl font-roboto-mono"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  I&apos;m{" "}
                  <motion.span className="font-bold">
                    Ifeanyi Onyekwelu
                  </motion.span>{" "}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl font-medium font-roboto-mono"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  A {typedwords}developer based in Enugu
                </motion.p>

                <motion.div className="flex gap-5">
                  <MotionButton
                    className="hover:bg-secondary/80 transition-colors bg-secondary rounded-sm"
                    size="lg"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    Got a project?
                  </MotionButton>
                  <MotionButton
                    className="border border-secondary text-white hover:bg-secondary hover:text-white transition-all"
                    size={"lg"}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    My Resume
                  </MotionButton>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div>
            <MotionImage
              src="/default.jpg"
              alt="Developer"
              width={200}
              height={200}
              className="mx-auto w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover rounded-full border-4 border-amber-500"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
