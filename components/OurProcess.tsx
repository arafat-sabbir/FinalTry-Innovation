import SectionHeading from "./SectionHeading";

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
  }
];

const OurProcess = () => {
  return (
    <section className="pt-12 pb-32 bg-gray-100 dark:bg-[#020817]">
      <div className="container mx-auto px-4">
        <SectionHeading
          backgroundText="How We Operate"
          foreGroundText="Work Process"
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sdlcSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-[#1F2937] rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
