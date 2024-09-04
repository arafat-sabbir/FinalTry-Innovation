import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import OurProject from "../components/OurProject";
import OurService from "@/components/OurService";
import OurTechStacks from "@/components/OurTechStacks";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import OurProcess from "@/components/OurProcess";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <OurService />
      <OurProject />
      <OurTechStacks />
      <OurProcess />
      <ContactUs />
      <Footer />
    </>
  );
}
