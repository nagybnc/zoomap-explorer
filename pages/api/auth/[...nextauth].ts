import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        connectMongo().catch((err) =>
          err.json({ error: "Connection Failed..." })
        );

        // Check user
        const result: any = await Users.findOne({ email: credentials?.email });
        if (!result) {
          throw new Error("No user Found with Email Please Sign up...");
        }

        // Compare
        const checkPassword = await compare(
          credentials?.password || "",
          result.password
        );

        // Incorrect password
        if (!checkPassword || result.email !== credentials?.email) {
          throw new Error("Username or Password doesn't match");
        }

        return result;
      },
    }),
  ],
};

export default NextAuth(authOptions);
