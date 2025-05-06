import type { DefaultSession, NextAuthOptions } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import AuthProvider from "./auth-provider";
import { db } from "../db";

export type { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db as any),
  secret: process.env.NEXTAUTH_SECRET ?? "abcdef",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Add your logic to validate credentials here
        // if (
        //   credentials?.username === "admin" &&
        //   credentials?.password === "password"
        // ) {
        //   return { id: "1", name: "Admin", email: "admin@example.com" };
        // }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    session: ({ session, user }) => {
      console.log({ session, user });
      if (!user) {
        console.error("User not found in session callback");
        return {
          ...session,
        }; // Return the session as is if the user is not found
      }

      console.error("User found in session callback", user);
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
};

export default NextAuth(authOptions);

export { AuthProvider };
