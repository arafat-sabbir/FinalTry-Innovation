import {
  DollarSign,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  SquareArrowOutUpRight,
  Truck,
} from "lucide-react";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

const WebProjects = () => {
  const echoEstateFeatures = [
    {
      title: "Buy Property",
      description: "User Can Buy Property Added By The Agent",
      icon: <ShoppingCart />,
    },
    {
      title: "Sell Property",
      description:
        "Agent Can Sell Their Property If Admin Verify The Property Request",
      icon: <DollarSign />,
    },
    {
      title: "Manage Property Review And Rating",
      description:
        "Admin Can Manage Everything From Property To User,Review And Rating",
      icon: <ShieldCheck />,
    },
    {
      title: "Checkout Live Preview",
      description: "Test And Explore Our Project ",
      icon: <SquareArrowOutUpRight />,
      link: "https://echo-state.web.app/",
    },
  ];

  const zinniaFeatures = [
    {
      title: "Explore Collections",
      description: "Browse sarees, salwar kameez, kurtis, menswear, and accessories",
      icon: <ShoppingBag />,
    },
    {
      title: "Track Your Order",
      description: "Real-time order tracking nationwide with order ID or phone number",
      icon: <Truck />,
    },
    {
      title: "Seamless Shopping",
      description: "User account management, wishlist, cart, and cash-on-delivery support",
      icon: <ShieldCheck />,
    },
    {
      title: "Checkout Live Preview",
      description: "Test and explore live Bangladeshi fashion storefront",
      icon: <SquareArrowOutUpRight />,
      link: "https://zinniabd.com",
    },
  ];

  return (
    <Container className="lg:pb-20 space-y-20">
      {/* Echo Estate */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center justify-items-center">
        <div>
          <h1 className="text-3xl text-center lg:text-start tracking-wide font-semibold dark:text-primary">
            Echo Estate (Real Estate Website)
          </h1>
          <p className="mb-4 text-center lg:text-start">
            A Real Estate Website For Selling And Buying Property
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 relative z-10 py-10 max-w-7xl mx-auto">
            {echoEstateFeatures.map((feature, index) => (
              <ProjectCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
        <div className="border-primary/50 hover:cursor-pointer border project-image bg-[url('/assets/project/echo-estate.png')]" />
      </div>

      {/* Zinnia Bangladesh */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center justify-items-center">
        <div>
          <h1 className="text-3xl text-center lg:text-start tracking-wide font-semibold dark:text-primary">
            Zinnia (Traditional Bangladeshi Fashion & Clothing)
          </h1>
          <p className="mb-4 text-center lg:text-start">
            An E-Commerce Storefront for Sarees, Kameez, Menswear & Accessories
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 relative z-10 py-10 max-w-7xl mx-auto">
            {zinniaFeatures.map((feature, index) => (
              <ProjectCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
        <div className="border-primary/50 hover:cursor-pointer border project-image bg-[url('/assets/project/zinniabd.png')]" />
      </div>
    </Container>
  );
};

export default WebProjects;
