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
        <div className="flex lg:flex-row flex-col-reverse  justify-between  items-center justify-items-center lg:h-[500px]   ">
          <div>
            <p className="text-primary text-xl tracking-wide font-semibold text-center lg:text-start">
              SOLUTION FOR YOUR BUSINESS
            </p>
            <h1 className="lg:text-5xl md:text-4xl text-3xl lg:text-start text-center font-semibold tracking-wide my-4">
              Providing Technology <br /> For Smart 
               <span className="text-primary font-bold ml-4">IT Solution</span>
            </h1>
            <p className="text-primary text-center lg:text-start text-balance">
              Rapidiously streamline revolutionary networks with technically
              sound deliverables. Authoritatively <br /> integrate installed
              base web-readiness. Quickly maximize superior process
            </p>
            <CustomButton  className="mt-4  bg-primary mx-auto lg:mx-0"><a href="#contact" className="px-4">Book Appointment</a></CustomButton>
            
          </div>
          <div>
            <CardContainer containerClassName="py-0" className="cursor-pointer ">
              <CardItem>
                <Image
                  src={"/assets/background/banner.png"}
                  className="h-[350px] w-[300px] my-4 md:mb-0"
                  width={380}
                  height={380}
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
