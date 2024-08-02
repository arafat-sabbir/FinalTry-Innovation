"use client";
import { cn } from "@/lib/utils";
import splitString from "@/utils/SplitString";
import { motion, Variants } from "framer-motion";

const RevealText = ({
  inputString,
  className,
  duration = 0.5,
}: {
  inputString: string;
  className?: string;
  duration?: number;
}) => {
  const characters: string[] = splitString(inputString);
  const charVariants: Variants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <motion.h1
      className={cn(
        "text-3xl font-semibold text-center dark:text-primary",
        className
      )}
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.2 }}
    >
      {characters.map((character, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          transition={{ duration: duration }}
        >
          {character}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default RevealText;
