"use client";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
import ContactForm from "./form/ContactForm";

const ContactUs = () => {

  return (
    <section id="contact" className="bg-[url('/assets/background/contact_bg.png')] bg-no-repeat bg-cover dark:bg-opacity-50  pb-20 ">
      <Container>
        <SectionHeading
          foreGroundText="CONTACT US"
          backgroundText="GET IN TOUCH"
        />
        <div className="lg:w-7/12 lg:mx-auto xl:mx-0 dark:shadow-[0_0_10px_#070a13] dark:bg-[#030A1C] dark:p-10 p-10 lg:p-0 rounded-md">
          <h1 className="font-semibold md:text-4xl text-3xl  text-center xl:text-start  text-black dark:text-gray-300">
            Have Any Questions?
          </h1>
          <p className="my-6 text-center lg:text-start text-black dark:text-gray-300">
            Enthusiastically disintermediate one-to-one leadership via business
            e-commerce. Dramatically reintermediate compelling process
            improvements rather than empowered relationships.
          </p>
          <ContactForm></ContactForm>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
