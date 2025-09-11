import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";

const Header = () => {
  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contacts", link: "#contact" },
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
      className="w-full p-4 md:p-6 lg:p-8"
    >
      <motion.div className="flex items-center justify-between container mx-auto">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          <Link href="#home" className="font-roboto-mono text-white">
            BuiltByIfeanyi
          </Link>
        </motion.h1>

        <motion.nav className="flex-1 hidden md:block">
          <motion.ul
            className="flex items-center justify-end gap-6 md:gap-10"
            variants={navVariants}
          >
            {menuItems &&
              menuItems.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    href={item.link}
                    className="text-white/80 font-roboto-mono hover:text-amber-500 duration-200 text-lg md:text-xl font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
          </motion.ul>
        </motion.nav>

        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
          className="md:hidden"
        >
          <Menu
            size={40}
            className="rounded-sm border p-1 cursor-pointer text-white/80 hover:bg-gray-100 hover:text-secondary transition-colors duration-200"
          />
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
