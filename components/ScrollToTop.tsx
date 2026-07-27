"use client";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <div className="fixed z-[100] bottom-8 right-8 flex flex-col items-center gap-4">
      {/* Floating WhatsApp Button with Glowing Border */}
      <Link
        href="https://wa.me/8801632029032"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="relative group flex items-center justify-center w-[62px] h-[62px] border-[3px] border-emerald-400/80 rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 blur-sm animate-pulse group-hover:opacity-100 transition duration-1000"></span>
        <svg
          className="relative w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </Link>

      {/* Scroll to Top Button */}
      <motion.button
        className="w-[62px] h-[62px] flex items-center justify-center border-[3px] shadow-lg rounded-full text-main text-3xl bg-white dark:bg-gray-800"
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
    </div>
  );
};

export default ScrollToTop;
