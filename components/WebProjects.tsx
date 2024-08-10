import {
  DollarSign,
  ExternalLink,
  Github,
  Linkedin,
  ShieldCheck,
  ShoppingCart,
  SquareArrowOutUpRight,
} from "lucide-react";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

const WebProjects = () => {
  const features = [
    {
      title: "Buy Property",
      description: "User Can Buy Property Added By The Agent",
      icon: <ShoppingCart />,
    },
    {
      title: "Selling Property",
      description:
        "Agent Can Sell Their Property If Admin Verify The Property Request",
      icon: <DollarSign />,
    },
    {
      title: "Manage Property Review And Rating",
      description:
        "Admin Can Manage Everything From Property To User,Review And Rating",
      icon: <ShieldCheck />,
    },
    {
      title: "Checkout Live Preview",
      description: "We just cannot be taken down by anyone.",
      icon: <SquareArrowOutUpRight />,
      link:"https://cute-hotteok-edc7ca.netlify.app"
    },
  ];
  return (
    <Container >
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center justify-items-center">
        <div >
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
        <div className="border-primary/50 border project-image bg-[url('/assets/project/echo-estate.png')]" />
      </div>
    </Container>
  );
};

export default WebProjects;
