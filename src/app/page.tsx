"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div className="bg-primary">
      <Header />
      <Hero />
      <Skills />
    </motion.div>
  );
};

export default Page;
