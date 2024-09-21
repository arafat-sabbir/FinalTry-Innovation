"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormFIeld";
import { ContactFormValidation } from "@/lib/validation";
import { SelectItem } from "../ui/select";
import CustomButton from "../ui/CustomButton";
import { toast } from "sonner";
import { useState } from "react";
import { Loader } from "lucide-react";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "text_area",
  PHONE_INPUT = "phone_input",
  SELECT = "select",
}
const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
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
  const onSubmit = async (values: z.infer<typeof ContactFormValidation>) => {
    try {
      setLoading(true);
      const id = toast.loading("Sending Message...");
      await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      toast.success("Message Sent Successfully", { id });
      form.reset();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <div className="md:flex gap-6 space-y-6 md:space-y-0 ">
          <div className="md:w-1/2">
            <CustomFormField
              control={form.control}
              className="placeholder:text-lg"
              fieldType={FormFieldType.INPUT}
              name="name"
              placeholder="Enter Full Name"
              iconSrc="/assets/icons/user.svg"
              iconAlt="user"
            />
          </div>
          <div className="md:w-1/2">
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
        <div className="md:flex gap-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2">
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
          <div className="md:w-1/2">
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
         disabled={loading}
          textClassName="text-center flex items-center gap-2 justify-center"
        >
          Make An Appointment {loading&&<Loader className="animate-spin"/>}
        </CustomButton>
      </form>
    </Form>
  );
};
export default ContactForm;
