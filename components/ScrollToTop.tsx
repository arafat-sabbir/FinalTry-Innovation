"use client";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate progress as a percentage of total scrollable height
  const progress =
    scrollY /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  return (
    <motion.button
      className="fixed bottom-8 right-8 border-[3px] shadow-lg rounded-full p-4 text-main text-3xl"
      onClick={scrollToTop}
      initial={{ scale: 0 }}
      animate={{
        scale: progress > 0.15 ? 1 : 0,
        borderColor: `hsla(171.1, 47%, 48%, ${progress})`,
      }}
      transition={{ duration: 0.3 }}
    >
      <ArrowUp className="text-primary font-bold" size={24} />
    </motion.button>
  );
};

export default ScrollToTop;
