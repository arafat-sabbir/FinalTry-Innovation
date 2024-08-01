import Image from "next/image";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import OurProject from "../components/OurProject";
import OurService from "@/components/OurService";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <OurService />
      <OurProject />
    </>
  );
}
