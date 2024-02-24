import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import getClient from "@/usis/usisSession";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {

  events: {
    signOut: async () => {
      cookies().delete('pwd');
      cookies().delete('username');
    },
  },
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
        // const user = { id: "1", name: "John", email: credentials?.email };
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
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/", //sigin page
  },
};
