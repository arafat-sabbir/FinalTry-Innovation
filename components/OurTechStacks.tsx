import RevealText from "./RevealText";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

interface TechStackItem {
  name: string;
  image: string;
}

const OurTechStacks = () => {
  const frontendImages: TechStackItem[] = [
    {
      name: "Javascript",
      image: "/assets/logo/js.png",
    },
    {
      name: "Typescript",
      image: "/assets/logo/typescript.png",
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
      name: "Redux",
      image: "/assets/logo/redux.png",
    },
    {
      name: "Tailwind Css",
      image: "/assets/logo/tailwind.png",
    },
  ];

  const backendImages: TechStackItem[] = [
    {
      name: "Node Js",
      image: "/assets/logo/node.png",
    },
    {
      name: "Express Js",
      image: "/assets/logo/express.png",
    },
    {
      name: "My Sql",
      image: "/assets/logo/mysql.png",
    },
    {
      name: "MongoDb",
      image: "/assets/logo/mongo.png",
    },
    {
      name: "Mongoose",
      image: "/assets/logo/mongoose.png",
    },
    {
      name: "JWT",
      image: "/assets/logo/jwt.png",
    },
  ];

  const MobileAppsImages: TechStackItem[] = [
    {
      name: "Flutter",
      image: "/assets/logo/flutter.png",
    },
    {
      name: "Dart",
      image: "/assets/logo/dart.png",
    },
    {
      name: "Android Studio",
      image: "/assets/logo/android-studio.png",
    },
    {
      name: "Github",
      image: "/assets/logo/github.png",
    },
    {
      name: "Git",
      image: "/assets/logo/git.png",
    },
    {
      name: "Postman",
      image: "/assets/logo/postman.png",
    },
  ];
  const ToolsImages: TechStackItem[] = [
    {
      name: "Vs Code",
      image: "/assets/logo/vscode.png",
    },
    {
      name: "Git",
      image: "/assets/logo/git.png",
    },
    {
      name: "Github",
      image: "/assets/logo/github.png",
    },
    {
      name: "Figma",
      image: "/assets/logo/figma.png",
    },
    {
      name: "Postman",
      image: "/assets/logo/postman.png",
    },
    {
      name: "Zod",
      image: "/assets/logo/zod.png",
    },
  ];

  const renderStack = (stack: TechStackItem[], isLast: boolean) =>
    stack.map((item, index) => (
      <div
        key={index}
        className={`border py-6 group w-full h-[120px] border-gray-200 dark:border-gray-600 ${
          index === stack.length - 1 ? "border-r-2 xl:border-r" : ""
        }`}
      >
        <Image
          height={60}
          width={60}
          src={item.image}
          alt={item.name}
          className={`mx-auto grayscale group-hover:grayscale-0 transition duration-300 ${
            item.name === "Next Js"
              ? "bg-gray-600 dark:bg-transparent cursor-pointer rounded-full border"
              : ""
          }`}
        />
        <h1 className="md:text-lg w-full text-center transition duration-300 font-semibold opacity-0 group-hover:opacity-100">
          {item.name}
        </h1>
      </div>
    ));

  return (
    <Container className="mb-20">
      <SectionHeading
        foreGroundText="TECH STACK"
        backgroundText=" TECH STACK WE USE"
      />
      <RevealText
        inputString="FrontEnd"
        className="text-center font-semibold text-3xl lg:hidden block py-6"
      ></RevealText>
      <div className="grid grid-cols-3 md:grid-cols-3 mx-auto lg:grid-cols-7  items-center ">
        <RevealText
          inputString="FrontEnd"
          className="text-3xl font-semibold border h-[120px] border-gray-200 dark:border-gray-600 lg:flex justify-center items-center hidden"
        />
        {renderStack(frontendImages, true)}
      </div>
      <RevealText
        inputString="Backend"
        className="text-center font-semibold text-3xl lg:hidden block py-6"
      ></RevealText>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-7  items-center">
        <RevealText
          inputString="Backend"
          className="text-3xl font-semibold border h-[120px] border-gray-200 dark:border-gray-600 lg:flex justify-center items-center hidden"
        />
        {renderStack(backendImages, true)}
      </div>
      <RevealText
        inputString="Mobile Apps"
        className="text-center font-semibold text-3xl lg:hidden block py-6"
      ></RevealText>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-7  items-center   ">
        <RevealText
          inputString="MobileApps"
          className="text-3xl font-semibold border h-[120px] border-gray-200 dark:border-gray-600 lg:flex justify-center items-center hidden"
        />
        {renderStack(MobileAppsImages, true)}
      </div>
      <RevealText
        inputString="Tools"
        className="text-center font-semibold text-3xl lg:hidden block py-6"
      ></RevealText>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-7  items-center   ">
        <RevealText
          inputString="Tools"
          className="text-3xl font-semibold border h-[120px] border-gray-200 dark:border-gray-600 lg:flex justify-center items-center hidden"
        />
        {renderStack(ToolsImages, true)}
      </div>
    </Container>
  );
};

export default OurTechStacks;
