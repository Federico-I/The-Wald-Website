"use server";

import { signIn, singOut } from "./auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account"});
}

export async function singOutAction() {
  await signOut({ redirect: "/" });
}