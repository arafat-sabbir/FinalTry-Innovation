import { z } from "zod";

export const ContactFormValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email("Invalid Email Address"),
  phone: z
    .string({ required_error: "Invalid Phone Number" })
    .min(11, { message: "Phone Number Must Be 11 Digits Long" }),
  service: z.enum([
    "Software Development",
    "Web Development",
    "App Development",
    "Logo & Brand Design",
    "Content Writing",
    "Seo",
  ],{message:"Service Is Required"}),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});
