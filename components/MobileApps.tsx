import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { Linkedin, SquareArrowOutUpRight } from "lucide-react";

const MobileApps = () => {
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
      title: "Try Our Apps From Play Store",
      description: "Try And Install Our Apps From Play Store.",
      icon: <SquareArrowOutUpRight />,
      link: "https://play.google.com/store/apps/details?id=com.thesaymondev.zacai&pli=1",
    },
  ];
  return (
    <div className="flex justify-between flex-col-reverse lg:flex-row items-center w-full justify-items-center lg:py-20">
      <div className="flex-1">
        <h1 className="md:text-3xl text-2xl mb-2 text-center lg:text-start tracking-wide font-semibold dark:text-primary">
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
      <section className="md:min-w-[460px]  min-w-[95vw] min-h-[450px]  md:min-h-[500px] md:mb-14  mb-6 lg:mb-0 overflow-hidden">
        <div className="relative mx-auto">
          <Image
            className="absolute top-4 md:w-[300px] w-[260px] max-[375px]:w-[210px] right-[132px] animate-moveLeft"
            src="/assets/project/second.png"
            width={300}
            height={600}
            alt="project image"
          />
          <Image
            className="absolute max-[375px]:w-[210px] right-[68px] md:w-[300px] w-[260px] -top-0 z-10 animate-scaleUp"
            src="/assets/project/first.png"
            width={300}
            height={600}
            alt="project image"
          />
          <Image
            className="absolute top-4 max-[375px]:w-[210px] md:w-[300px] w-[260px] right-[4px] animate-moveRight"
            src="/assets/project/third.png"
            width={300}
            height={600}
            alt="project image"
          />
        </div>
      </section>
    </div>
  );
};

export default MobileApps;
