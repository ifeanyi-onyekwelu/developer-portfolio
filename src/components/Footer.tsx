"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} xIfe3. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/xIfe3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ifeanyichukwu-onyekwelu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="https://x.com/_xIfe3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaXTwitter size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
