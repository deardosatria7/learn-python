import Editor from "@/components/Editor";
import Link from "next/link";
import Header from "@/sections/Header";
import {useRouter} from "next/router";

const Uji_kode = () => {
  const router = useRouter();
  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-white">Belajar-Python</h4>
        </div>
      </Header>
      <main>
        <div className="pl-5 pt-5">
          <div>
            <button onClick={() => router.back()}>
              <div className="rounded-md text-white bg-neutral-400 px-2 py-2 text-sm">
                Kembali
              </div>
            </button>
          </div>
          <div>
            <Editor>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <py-repl output="replOutput">
                  minuman = "pepsi"
    
                  #Menampilkan tipe data variabel minuman
                  print(type(minuman))

                  #output: string
                  </py-repl>`,
                }}
              />
            </Editor>
          </div>
          <div>
            <Link
              href={"../playground"}
              className="text-sm italic pl-1 underline text-blue-500"
            >
              Bagaimana cara menjalankan kode?
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Uji_kode;
