import Image from "next/image";
import signupImage from "@/assets/signup-image.jpg";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";
import { signIn } from "@/auth";

export default function Signup() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40em] w-full max-w-[64em] overflow-hidden rounded-2xl shadow-2xl">
        <div className="w-full space-y-7 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to My-book</h1>
            <p className="text-muted-foreground">A space to make friends</p>
          </div>
          <div className="space-y-3">
            <SignupForm />
            <div className="space-y-1 text-center">
              <h1>OR</h1>
              <form action={
                async() => {
                  'use server'
                  await signIn("github")
                }
              }>
                <button className="w-full rounded-md bg-slate-200 p-1">
                  Sign in with Github
                </button>
              </form>
            </div>
            <Link href="/login" className="block text-center hover:underline">
              Already have an account? Log in
            </Link>
          </div>
        </div>
        <Image
          src={signupImage}
          alt="signup Image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
