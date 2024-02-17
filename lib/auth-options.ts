import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import getClient from "@/usis/usisSession";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialProvider({
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const userSession = await getClient(credentials?.email, credentials?.password);
        if (userSession) {
          cookies().set({
            name: "username",
            value: credentials? credentials.email : '',
            maxAge: 2 * 24 * 60 * 60,
            secure: true,
        },
        );
        cookies().set({
          name: "pwd",
          value: credentials? credentials.password : '',
          maxAge: 2 * 24 * 60 * 60,
          secure: true,
      },
      );
          return { id: "", name: "", email: credentials?.email };
        } else {

          return null;

          
        }
      },
    }),
  ],
  pages: {
    signIn: "/", //sigin page
  },
};
