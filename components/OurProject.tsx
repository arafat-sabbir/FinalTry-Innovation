import Image from "next/image";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { Linkedin } from "lucide-react";

const OurProject = () => {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <Linkedin />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <Linkedin />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <Linkedin />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <Linkedin />,
    },
  ];
  return (
    <Container className="mt-8">
      <h1>
        <SectionHeading
          foreGroundText="OUR PROJECTS"
          backgroundText="PROJECT WE'VE DONE"
        ></SectionHeading>
      </h1>
      <div className="flex justify-between flex-col-reverse lg:flex-row items-center w-full justify-items-center">
        <div className="flex-1">
          <h1 className="text-3xl text-center lg:text-start tracking-wide font-semibold dark:text-primary">
            Zacai (General Knowledge Apps)
          </h1>
          <p className="mb-4 text-center lg:text-start">
            General Knowledge Apps For Admission Students And Teachers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <ProjectCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
        <section className="md:min-w-[450px] border-2 min-w-[90vw] min-h-[470px] md:mb-14  mb-6 lg:mb-0">
          <div className="relative mx-auto">
            <Image
              className="absolute top-0 md:w-[300px] w-[280px] max-[400px]:w-[150px] sm: right-32 animate-moveLeft"
              src="/assets/project/second.png"
              width={300}
              height={600}
              alt="project image"
            />
            <Image
              className="absolute right-16 md:w-[300px] w-[280px] -top-4 z-10 animate-scaleUp"
              src="/assets/project/first.png"
              width={300}
              height={600}
              alt="project image"
            />
            <Image
              className="absolute top-0 md:w-[300px] w-[280px] right-0 animate-moveRight"
              src="/assets/project/third.png"
              width={300}
              height={600}
              alt="project image"
            />
          </div>
        </section>
      </div>
    </Container>
  );
};

export default OurProject;
