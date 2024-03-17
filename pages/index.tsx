import {Inter} from "next/font/google";
import {useRouter} from "next/router";
import Header from "@/sections/Header";
import Link from "next/link";
import python_logo from "@/public/python-logo.png";
import Image from "next/image";

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
            <div className="mb-4">
              <h2 className="text-md">Selamat datang!</h2>
            </div>
            <div className="pt-2">
              <div className="flex">
                <div className="p-2 mr-2 sm:hidden">
                  <Image src={python_logo} alt="" width={60}></Image>
                </div>
                <div className="grow my-auto text-xl text-blue-600 font-semibold font-sans">
                  Platform mobile belajar Python berbahasa Indonesia
                </div>
              </div>
              <div className="flex items-center mt-8 gap-2">
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
