"use client";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
import ContactForm from "./form/ContactForm";

const ContactUs = () => {

  return (
    <section className="bg-[url('/assets/background/contact_bg.png')] bg-no-repeat bg-cover dark:bg-opacity-50">
      <Container>
        <SectionHeading
          foreGroundText="CONTACT US"
          backgroundText="GET IN TOUCH"
        />
        <div className="lg:w-7/12  pb-20 lg:mx-auto xl:mx-0">
          <h1 className="font-semibold text-4xl text-center xl:text-start  text-black dark:text-white">
            Have Any Questions?
          </h1>
          <p className="my-6 text-center lg:text-start">
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
