import React from "react";
import NextAuth from "next";
import Google from "next-auth/providers/google";
import { getGuest } from "./data-service";

const authConfig = {

  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);
        return true;
      } catch {
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const { auth, signIn, singOut, handlers: { GET, POST } } = NextAuth(authConfig);