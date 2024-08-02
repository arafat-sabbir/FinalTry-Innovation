import RevealText from "./RevealText";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

const OurTechStacks = () => {
  const fontEndImages = [
    {
      name: "Javascript",
      image: "/assets/logo/js.png",
    },
    {
      name: "React",
      image: "/assets/logo/react.png",
    },
    {
      name: "Next Js",
      image: "/assets/logo/nextjs.png",
    },
    {
      name: "Tailwind Css",
      image: "/assets/logo/tailwind.png",
    },
  ];
  const backendImages = [];
  const mobileDevImages = [];
  return (
    <Container className="mb-20">
      <SectionHeading
        foreGroundText="TECH STACK"
        backgroundText=" TECH STACK WE USE"
      ></SectionHeading>

      <div className="grid grid-cols-2 justify-center items-center justify-items-center md:grid-cols-4 lg:grid-cols-6 border-y-2  ">
        <h1 className="text-3xl font-semibold">FrontEnd</h1>
        {fontEndImages.map((item) => (
          <>
            <div className="border-x-2 p-6 group w-[150px] h-[100px]">
              <Image
                height={50}
                width={50}
                src={item.image}
                alt={item.name}
                className="w-[50px] h-[50px] mx-auto grayscale group-hover:grayscale-0"
              ></Image>
              <h1 className="text-sm text-center transition duration-300 font-semibold opacity-0 group-hover:opacity-100">
                {item.name}
              </h1>
            </div>
          </>
        ))}
      </div>
      {/* <div></div>
      <div></div>
      <div></div>
      <div></div> */}
    </Container>
  );
};

export default OurTechStacks;
