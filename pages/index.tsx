import {Inter} from "next/font/google";
import {useRouter} from "next/router";
import Header from "@/sections/Header";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-white">Belajar-Python</h4>
        </div>
      </Header>
      <div className="p-4">
        <div className="mt-20">
          <div className="flex flex-col bg-neutral-200 py-10 px-4 rounded-md">
            <div className="">
              <h2 className="text-md">Selamat datang!</h2>
            </div>
            <div className="pt-2">
              <div className="text-xl text-blue-600 font-semibold font-sans">
                Platform mobile belajar Python berbahasa Indonesia
              </div>
              <div className="flex items-center pt-8 gap-2">
                <Link href={"/latihan"}>
                  <div className="px-4 py-2 text-white bg-slate-600 hover:bg-slate-500 rounded-lg">
                    Mulai Belajar!
                  </div>
                </Link>
                <Link href={"/playground"}>
                  <div className="px-4 py-2 text-neutral-500 hover:text-neutral-700 underline">
                    Coba Python
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
