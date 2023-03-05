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
          <h4 className="text-lg text-black">Belajar-Python</h4>
        </div>
      </Header>
      <div>
        <div className="mt-20">
          <div className="flex flex-col bg-neutral-200 py-10 px-4 rounded-md">
            <div className="">
              <h2 className="text-md">Selamat datang!</h2>
            </div>
            <div className="pt-2">
              <div className="text-xl text-blue-600 font-semibold font-sans">
                Platform mobile belajar Python berbahasa Indonesia
              </div>
              <div className="flex items-center pt-8">
                <Link href={"/playground"} legacyBehavior>
                  <div className="px-4 py-2 text-white bg-slate-600 hover:bg-slate-500 rounded-lg">
                    Coba Python
                  </div>
                </Link>
              </div>
              <div hidden>
                <div>
                  <div className="pt-5 pr-5 pl-5 pb-3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<py-config>terminal = false </py-config><py-repl>print ("Hello World!")</py-repl>`,
                      }}
                    />
                  </div>
                  <div className="pr-5 pl-5 pb-3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<py-terminal></py-terminal>`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
