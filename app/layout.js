import react from "react";
import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";

export const metadata = {
  title: "The Wald",
};

export default function RootLayout({ children }) {
  return <html> 
    <body>
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
