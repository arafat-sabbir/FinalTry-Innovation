"use client";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { motion, Variants } from "framer-motion";

const sdlcSteps = [
  {
    title: "Planning",
    description: "Defining the project scope and objectives.",
    icon: "📋",
  },
  {
    title: "Analysis",
    description: "Gathering requirements and analyzing project needs.",
    icon: "🔍",
  },
  {
    title: "Design",
    description: "Creating architecture and design for the solution.",
    icon: "🖊️",
  },
  {
    title: "Implementation",
    description: "Coding and developing the software solution.",
    icon: "💻",
  },
  {
    title: "Testing",
    description: "Testing the software to ensure quality.",
    icon: "🧪",
  },
  {
    title: "Deployment",
    description: "Releasing the software to production.",
    icon: "🚀",
  },
];

const OurProcess = () => {
  const charVariants: Variants = {
    hidden: { opacity: 0, scale: 1.3 },
    reveal: { opacity: 1, scale: 1 },
  };
  return (
    <section className="pt-12 pb-32 bg-gray-100 dark:bg-[#020817] overflow-hidden">
      <Container className=" mx-auto px-4">
        <SectionHeading
          backgroundText="How We Operate"
          foreGroundText="Work Process"
        />
        <motion.div
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.2 }}
          className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 overflow-hidden"
        >
          {sdlcSteps.map((step, index) => (
            <motion.div
              variants={charVariants}
              transition={{ all: 1 }}
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-[#1F2937] rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default OurProcess;
