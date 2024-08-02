import RevealText from "./RevealText";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const OurTechStacks = () => {
  const fontEndImages = [];
  const backendImages = [];
  const mobileDevImages = [];
  return (
    <Container>
      <SectionHeading
        foreGroundText="TECH STACK"
        backgroundText=" TECH STACK WE USE"
      ></SectionHeading>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-b-2 ">
        <h1>FrontEnd</h1>
        
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default OurTechStacks;
