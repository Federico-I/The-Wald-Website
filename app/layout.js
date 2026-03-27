import react from "react";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";

export const metadata = {
  // title: "The Wald",
  title: {
    template: {
      template: "The Wald",
      default: "Welcome / The Wild Oasis",
    }
  }
};

export default function RootLayout({ children }) {
  return <html> 
    <body className="bg-blue-950 text-primary-100 min-h-screen">
      <header>
        <Logo />
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        Copyright by meee
      </footer>
    </body>
  </html>
};
