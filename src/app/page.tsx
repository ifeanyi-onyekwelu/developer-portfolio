"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div className="bg-primary">
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </motion.div>
  );
};

export default Page;
