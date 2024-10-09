"use server";

import prisma from "@/lib/prisma";
import { signUpSchema, signUpValues } from "@/lib/validation";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function signupAction(values: signUpValues) {
  try {
    const { username, email, password } = signUpSchema.parse(values);

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUsername = await prisma.user.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (existingUsername) {
      return {
        error: "Username already taken",
      };
    }

    const existingEmail = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (existingEmail) {
      return {
        error: "Email already taken",
      };
    }

    await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    redirect("/login");
    
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return {
      error: "Something went wrong, Try again",
    };
  }
}
