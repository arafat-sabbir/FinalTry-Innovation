"use client";
import Lottie from "lottie-react";
import bannerAnimation from "../public/assets/background/banner.json";

const BannerPicture = () => {
  return (
    <Lottie
      className="h-[350px] w-[w-[300px] md:w-[500px] md:h-[450px] my-4 md:mb-0"
      animationData={bannerAnimation}
    />
  );
};

export default BannerPicture;
