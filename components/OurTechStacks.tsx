import Image from "next/image";

const OurTechStacks = () => {
  return <section>

    <h1 className="text-4xl font-bold text-center">Our Tech Stack</h1>
    <Image src="/assets/icons/software_development.png" alt="Our Tech Stack" width={100} height={100} />
  </section>;
};

export default OurTechStacks;