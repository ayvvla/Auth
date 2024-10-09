import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Github,
    Google,
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        email:{label: "email" , type: "email"},
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {

      },
      // authorize: async(credentials) => {
      //   if (!credentials || !credentials.username || !credentials.email || !credentials.password ) {
      //     return null
      //   }
      // }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",

  pages: {
    signIn: "/login",
    newUser: "/",
  },
});
