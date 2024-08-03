"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import CustomFormField from "../CustomFormFIeld";
import SubmitButton from "../SubmitButton";
import { ContactFormValidation } from "@/lib/validation";
import { SelectItem } from "../ui/select";
import CustomButton from "../ui/CustomButton";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "text_area",
  PHONE_INPUT = "phone_input",
  SELECT = "select",
}
const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const services = [
    "Software Development",
    "Web Development",
    "App Development",
    "Logo & Brand Design",
    "Content Writing",
    "Seo",
  ];

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof ContactFormValidation>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <div className="flex gap-6">
          <div className="w-1/2">
            <CustomFormField
              control={form.control}
              className="placeholder:text-lg"
              fieldType={FormFieldType.INPUT}
              name="userName"
              placeholder="Enter Full Name"
              iconSrc="/assets/icons/user.svg"
              iconAlt="user"
            />
          </div>
          <div className="w-1/2">
            <CustomFormField
              className="placeholder:text-lg"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="email"
              placeholder="Enter Your Email"
              iconSrc="/assets/icons/email.svg"
              iconAlt="email"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-1/2">
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="service"
              placeholder="Select a Service"
            >
              {services.map((service, i) => (
                <SelectItem key={service + i} value={service}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <p>{service}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>
          </div>
          <div className="w-1/2">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.PHONE_INPUT}
              name="phone"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.TEXTAREA}
          name="message"
          className="placeholder:text-lg"
          placeholder="Write A Message"
        />
        <CustomButton
          className="mt-4 bg-primary mx-auto lg:mx-0 w-full"
          textClassName="text-center"
        >
          Make An Appointment
        </CustomButton>
      </form>
    </Form>
  );
};
export default ContactForm;
