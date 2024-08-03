import { z } from "zod";

export const ContactFormValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email("Invalid Email Address"),
  phone: z
    .string()
    .refine(
      (phone) =>
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone),
      "Invalid Phone Number"
    ),
  service: z
    .enum([
      "Software Development",
      "Web Development",
      "App Development",
      "Logo & Brand Design",
      "Content Writing",
      "Seo",
    ]),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});
