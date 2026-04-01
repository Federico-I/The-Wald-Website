import react from "react";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wald",
  title: {
    template: {
      template: "The Wald",
      default: "Welcome / The Wild Oasis",
    },
    description: "Greatest cabins for a meaningful holidays where you can cut off from the city life and to connect with yourself.",
  }
};

export default function RootLayout({ children }) {
  return <html> 
    <body className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}>
      <Header />
      <div className="flex-1 px-8 py-12 relative">
        <main className="max-w-7x1 mx-auto">{children}</main>
      </div>
    </body>
  </html>
};
