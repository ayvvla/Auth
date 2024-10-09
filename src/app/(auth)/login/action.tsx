"use server";

import { loginSchema, loginValues } from "@/lib/validation";

export default async function loginAction(values: loginValues) {
  try {
    const { username, password } = loginSchema.parse(values);

    console.log(username, password);
  } catch (error) {}
}
