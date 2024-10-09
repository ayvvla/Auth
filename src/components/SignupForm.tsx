"use client";
import React, { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpValues } from "@/lib/validation";
import { Input } from "./ui/input";
// import { Button } from "./ui/button";
import { signupAction } from "@/app/(auth)/signup/action";
import LoadingButton from "./LoadingButton";
import { PasswordInput } from "./PasswordInput";
// import { useFormStatus } from "react-dom";

export default function SignupForm() {
  const [error, setError] = useState(true);
  const [isPending, startTransition] = useTransition();

  // const {pending} = useFormStatus()

  const form = useForm<signUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

 function onSubmit(values : signUpValues) {
  startTransition(
    async() => {
      await signupAction(values)
    }
  )
 }

  return (
    <Form {...form}>
    {error && <p>Something went wrong</p>}
    
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton type="submit" loading={isPending} className="w-full" disabled={isPending} onClick={() => setError((pre) => (!pre))}>
          Sign Up
        </LoadingButton>
      </form>
    </Form>
  );
}
