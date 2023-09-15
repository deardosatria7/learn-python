import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";

const page3 = () => {
  return (
    <>
      <Header>
        <div>
          <Link href={"/"}>
            <h4 className="text-lg text-white">Belajar-Python</h4>
          </Link>
        </div>
      </Header>
      <section className="p-4">
        <h1 className="text-2xl font-semibold">Pendahuluan</h1>
        <p className="pt-3 pl-1">
          Label &ldquo;harga&rdquo; tadi disebut dengan variabel. Kita dapat
          menyimpan data dalam bentuk variabel untuk kemudian dapat digunakan
          ulang dalam operasi lainnya.
        </p>
        <p className="pt-3 pl-1">
          Coba masukkan variabel &ldquo;harga&rdquo; pada operasi penghitungan
          &ldquo;setengah_harga&rdquo; di bawah ini.
        </p>
        <Editor>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              harga = 250
              setengah_harga =  / 2
              </py-repl>`,
            }}
          />
        </Editor>
        <div className="flex">
          <h3 className="flex flex-col gap-2 pt-4">
            <Link
              href={"/latihan/2"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/4"}
              className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
            >
              Selanjutnya
            </Link>
          </h3>
        </div>
      </section>
    </>
  );
};

export default page3;
