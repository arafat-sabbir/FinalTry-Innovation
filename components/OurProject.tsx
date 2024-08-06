import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "./Container";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import RevealText from "./RevealText";
import SectionHeading from "./SectionHeading";
import { lazy } from "react";

const OurProject = () => {
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
          <div className="grid md:grid-cols-2  grid-cols-1 gap-10 justify-center items-center justify-items-center">
            <div className=" h-60  w-60 rounded-md   border hover:custom-box-shadow"></div>
            <div className="  h-60  w-60 rounded-md   border hover:custom-box-shadow"></div>
            <div className="  h-60  w-60 rounded-md   border hover:custom-box-shadow"></div>
            <div className="  h-60  w-60 rounded-md   border hover:custom-box-shadow"></div>
          </div>
        </div>
        <section className="md:min-w-[450px] min-w-[100vw] min-h-[450px] md:mb-14  mb-6 lg:mb-0">
          <div className="relative mx-auto">
            <Image
              className="absolute top-0 md:w-[300px] w-[280px]  right-32 animate-moveLeft"
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
