import {Inter} from "next/font/google";
import Hero from "@/sections/Hero";
import Header from "@/sections/Header";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-neutral-400">Belajar-Python</h4>
        </div>
      </Header>
      <Hero>
        <div className="mt-20">
          <div className="flex flex-col bg-neutral-800 py-10 px-4 rounded-md">
            <div className="">
              <h2 className="text-md text-neutral-400">Selamat Datang!</h2>
            </div>
            <div className="pt-2">
              <div className="text-xl text-blue-300 font-semibold font-sans">
                Platform mobile belajar Python berbahasa Indonesia
              </div>
              <div className="flex items-center pt-8">
                <Link
                  href="/playground"
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-500 rounded-lg"
                  legacyBehavior
                >
                  Coba Python
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </>
  );
}
