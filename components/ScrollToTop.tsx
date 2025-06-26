"use client";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(y / totalHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      className="fixed z-[100] bottom-8 right-8 border-[3px] shadow-lg rounded-full p-4 text-main text-3xl"
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
