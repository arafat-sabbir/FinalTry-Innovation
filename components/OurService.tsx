"use client";
import Container from "./Container";
import { HoverEffect } from "./ui/card-hover-effect";

const OurService = () => {
  const services = [
    {
      image: "/assets/icons/software.png",
      title: "Software Development",
      description:
        "We provide custom software solutions tailored to meet the unique needs of your business, ensuring efficiency and innovation.",
    },
    {
      image: "/assets/icons/web.png",
      title: "Web Development",
      description:
        "Our team specializes in creating responsive and user-friendly websites that enhance your online presence and engage your audience.",
    },
    {
      image: "/assets/icons/app.png",
      title: "Mobile Application",
      description:
        "We design and develop mobile applications for iOS and Android, offering seamless experiences that cater to your specific business requirements.",
    },
    {
      image: "/assets/icons/logo-design.png",
      title: "Logo & Brand Design",
      description:
        "Our creative team helps you establish a strong brand identity with unique logo designs and comprehensive branding strategies.",
    },
    {
      image: "/assets/icons/content.png",
      title: "Content Writing",
      description:
        "We offer professional content writing services that communicate your brand's message effectively, engaging your target audience.",
    },
    {
      image: "/assets/icons/seo.png",
      title: "SEO",
      description:
        "Our SEO experts optimize your website to improve visibility and ranking on search engines, driving more organic traffic to your site.",
    },
  ];

  return (
    <Container>
      <h1 className="text-4xl font-bold text-center"><span className="text-primary font-semibold">Services</span> We Provide</h1>
      <div>
        <div className=" mx-auto px-8">
          <HoverEffect items={services} />
        </div>
      </div>
    </Container>
  );
};

export default OurService;
