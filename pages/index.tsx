import {Inter} from "next/font/google";
import Hero from "@/sections/Hero";
import Header from "@/sections/Header";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero />
    </>
  );
}
