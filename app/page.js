import react from "react";
import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return ( 
    <dib>
      <Navigation />
      <h1>Welcome to the Wald!</h1>
      
      <Link href="/cabins">Get your Premium Cabin!</Link>
    </dib>
  );
}
