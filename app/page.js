import react from "react";
import Link from "next/link";

export default function Home() {
  return ( 
    <dib>
      <h1>Welcome to the Wald!</h1>
      
      <Link href="/cabins">Get your Premium Cabin!</Link>
    </dib>
  );
}
