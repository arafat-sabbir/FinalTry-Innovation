import Image from "next/image";
import RevealText from "./RevealText";
import Container from "./Container";

const OurTechStacks = () => {
  return (
    <Container>
      <RevealText
        className="dark:text-primary"
        inputString="Tech Stack We Use"
      ></RevealText>
      <Image
        src="/assets/icons/software_development.png"
        alt="Our Tech Stack"
        width={100}
        height={100}
      />
    </Container>
  );
};

export default OurTechStacks;
