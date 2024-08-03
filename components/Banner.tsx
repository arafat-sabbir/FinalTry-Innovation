import Image from "next/image";
import Container from "./Container";
import { CardContainer, CardItem } from "./ui/3d-card";
import { Button } from "./ui/button";
import CustomButton from "./ui/CustomButton";

const Banner = () => {
  return (
    <section className="bg-[url('/assets/background/banner_background.svg')] bg-no-repeat">
      <div></div>
      <Container>
        <div className="flex justify-between  items-center justify-items-center h-[70vh]   ">
          <div>
            <p className="text-primary text-xl tracking-wide font-semibold">
              SOLUTION FOR YOUR BUSINESS
            </p>
            <h1 className="text-5xl font-semibold tracking-wide my-4">
              Providing Technology <br /> For Smart
              <span className="text-primary font-bold">IT Solution</span>
            </h1>
            <p className="text-primary   ">
              Rapidiously streamline revolutionary networks with technically
              sound deliverables. Authoritatively <br /> integrate installed
              base web-readiness. Quickly maximize superior process
            </p>
            <CustomButton className="mt-4 bg-primary">Book An Appointment</CustomButton>
          </div>
          <div>
            <CardContainer className="cursor-pointer 2xl:w-11/12 w-8/12 ">
              <CardItem>
                <Image
                  src={"/assets/background/banner_background.png"}
                  width={400}
                  height={400}
                  alt="bannerPerson"
                ></Image>
              </CardItem>
            </CardContainer>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
