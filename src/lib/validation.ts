import { z } from "zod";

const requiredString = z.string().trim().min(1, "required");

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email adress"),
  username: requiredString.regex(
    /^[a-zA-z0-9_-]+$/,
    "Only letters,numbers,- and _ allowed",
  ),
  password: requiredString.min(8, "Password must be at least 8 characters"),
});

export type signUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString.min(8, "Password must be at least 8 characters"),
});

export type loginValues = z.infer<typeof loginSchema>;
