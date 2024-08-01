import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import OurProject from "./components/OurProject";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <OurProject />
    </>
  );
}
