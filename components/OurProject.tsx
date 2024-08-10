import Container from "./Container";
import MobileApps from "./MobileApps";
import SectionHeading from "./SectionHeading";

const OurProject = () => {
  return (
    <Container id="ourProjects" className="mt-8">
      <h1>
        <SectionHeading
          foreGroundText="OUR PROJECTS"
          backgroundText="PROJECT WE'VE DONE"
        ></SectionHeading>
      </h1>
      <MobileApps />
    </Container>
  );
};

export default OurProject;
