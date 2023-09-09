import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";

const page3 = () => {
  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-white">Belajar-Python</h4>
        </div>
      </Header>
      <section className="p-4">
        <h1 className="text-2xl font-semibold">Variabel Python</h1>
        <p className="pt-3 pl-1">
          Label &ldquo;harga&rdquo; tadi disebut dengan variabel. Kita dapat
          menyimpan data dalam bentuk variabel untuk kemudian dapat digunakan
          ulang dalam operasi lainnya. Coba gunakan variabel &ldquo;harga&rdquo;
          pada operasi penghitungan &ldquo;setengah_harga&rdquo; di bawah ini.
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
        <h3 className="pt-4 flex flex-col">
          <Link href={"../"}>Back to home</Link>
          <Link href={"/latihan/4"} className="text-blue-600">
            Selanjutnya
          </Link>
          <Link href={"/latihan/2"} className="text-blue-600">
            Sebelumnya
          </Link>
        </h3>
      </section>
    </>
  );
};

export default page3;
