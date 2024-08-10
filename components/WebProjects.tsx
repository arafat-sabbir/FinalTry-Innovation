import { ExternalLink, Github, Linkedin } from "lucide-react";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

const WebProjects = () => {
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
    <Container className="py-20 ">
      <div className="flex flex-col-reverse lg:flex-row">
        <div>
          <h1 className="text-3xl text-center lg:text-start tracking-wide font-semibold dark:text-primary">
            Echo Estate (Real Estate Website)
          </h1>
          <p className="mb-4 text-center lg:text-start">
            A Real Estate Website For Selling And Buying Property
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <ProjectCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
        <div className="project-image bg-[url('/assets/project/echo-estate.png')]" />
      </div>
    </Container>
  );
};

export default WebProjects;
