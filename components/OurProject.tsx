import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "./Container";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import RevealText from "./RevealText";
import SectionHeading from "./SectionHeading";

const OurProject = () => {
  return (
    <Container className="mt-8">
      <h1>
        <SectionHeading
          foreGroundText="OUR PROJECTS"
          backgroundText="PROJECT WE'VE DONE"
        ></SectionHeading>
      </h1>
      <div className="flex justify-between items-center w-full justify-items-center">
        <div className="w-1/2">
          <h1 className="text-3xl tracking-wide font-semibold dark:text-primary">
            Zacai (General Knowledge Apps)
          </h1>
          <p className="mb-4">
            General Knowledge Apps For Admission Students And Teachers
          </p>
          <div className="grid grid-cols-2 gap-10">
            <div className="h-60 w-60 rounded-md bg-gray-200 dark:bg-gray-900   custom-box-shadow dark:custom-box-shadow-dark"></div>
            <div className="h-60 w-60 rounded-md bg-gray-200 custom-box-shadow"></div>
            <div className="h-60 w-60 rounded-md bg-gray-200 custom-box-shadow"></div>
            <div className="h-60 w-60 rounded-md bg-gray-200 custom-box-shadow "></div>
          </div>
        </div>
        <div className="relative w-1/2 min-h-[500px]">
          <Image
            className="absolute top-0 right-32 animate-moveLeft"
            src="/assets/project/2.png"
            width={300}
            height={600}
            alt="project image"
          />
          <Image
            className="absolute right-16 -top-4 z-10 animate-scaleUp"
            src="/assets/project/1.png"
            width={300}
            height={600}
            alt="project image"
          />
          <Image
            className="absolute top-0 right-0 animate-moveRight"
            src="/assets/project/3.png"
            width={300}
            height={600}
            alt="project image"
          />
        </div>
      </div>
    </Container>
  );
};

export default OurProject;
