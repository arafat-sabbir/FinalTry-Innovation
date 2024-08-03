"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ContactForm from "./form/ContactForm";

const ContactUs = () => {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section className="bg-[url('/assets/background/contact_bg.png')] bg-no-repeat bg-cover dark:bg-opacity-50">
      <Container>
        <SectionHeading
          foreGroundText="CONTACT US"
          backgroundText="GET IN TOUCH"
        />
        <div className="w-7/12  pb-20">
          <h1 className="font-semibold text-4xl  text-black dark:text-white">Have Any Questions?</h1>
          <p className="my-6">
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
