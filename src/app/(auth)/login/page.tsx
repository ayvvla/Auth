import Image from "next/image";
import loginImage from "@/assets/login-image.jpg";
import Link from "next/link";
import { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login"
}

export default function Login() {
  return (
    <main className="flex h-screen items-center justify-center p-10">
      <div className="flex h-full max-h-[40em] w-full max-w-[64em] overflow-hidden rounded-2xl shadow-2xl">
        <div className="w-full space-y-7 overflow-y-auto md:w-1/2 p-10">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Login to Bugbook</h1>
          </div>
          <div className="space-y-5">
            <LoginForm />

            <Link href="/signup" className="block text-center hover:underline">Don&apos;t have an account ? Sign up </Link>
          </div>
        </div>
        <Image
          src={loginImage}
          alt="loginImage"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
