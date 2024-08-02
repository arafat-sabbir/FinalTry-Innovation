import Image from "next/image";
import Container from "./Container";
import { CardContainer, CardItem } from "./ui/3d-card";

const Banner = () => {
  return (
    <section className="bg-[url('/assets/background/banner_background.svg')] bg-no-repeat">
      <Container>
        <div className="flex justify-between  items-center justify-items-center h-[70vh]   ">
          <div>
            <h1 className="text-primary text-xl tracking-wide font-semibold mb-2">
              SOLUTION FOR YOUR BUSINESS
            </h1>
            <h1 className="text-5xl font-semibold tracking-wide">
              Providing Technology <br /> For Smart
              <span className="text-primary font-bold">IT Solution</span>
            </h1>
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
