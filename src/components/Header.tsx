"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full p-4 md:p-6 lg:p-8 z-50 bg-gray-900/80 backdrop-blur-sm"
    >
      <div className="max-w-6xl flex items-center justify-between container mx-auto">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          <Link href="#home" className="font-sans text-white font-bold">
            xIfe3
          </Link>
        </motion.h1>

        {/* Desktop Navigation */}
        <motion.nav className="flex-1 hidden md:block">
          <motion.ul
            className="flex items-center justify-end gap-6 md:gap-10"
            variants={navVariants}
            initial="hidden"
            animate="show"
          >
            {menuItems.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  href={item.link}
                  className="text-white/80 font-mono hover:text-amber-500 duration-200 text-lg md:text-xl font-medium"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-8 h-8 flex flex-col justify-center items-center">
            <span
              className={`bg-white h-0.5 w-6 rounded-full transition-transform ${
                mobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`bg-white h-0.5 w-6 rounded-full my-1.5 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white h-0.5 w-6 rounded-full transition-transform ${
                mobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
              }`}
            ></span>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm p-6"
        >
          <ul className="flex flex-col gap-6">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.link}
                  className="text-white/80 font-mono hover:text-amber-500 duration-200 text-xl font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
