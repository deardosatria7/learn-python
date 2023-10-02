import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";
import Footer from "@/sections/Footer";

const pagePendahuluan = () => {
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
          Bagus! Kalian telah mencoba menjalankan program python pertama kalian.
          Sekarang mari kita coba untuk <i>ngoding.</i>
        </p>
        <p className="pt-3 pl-1">
          Di dalam Python, kita dapat menyimpan sebuah <b>nilai</b> dalam sebuah{" "}
          <b>variabel.</b> Mari kita coba buat variabel bernama
          &ldquo;harga&rdquo; diikuti dengan &ldquo;=&rdquo; dan
          &ldquo;250&rdquo;.
        </p>
        <div>
          <Editor>
            <div
              dangerouslySetInnerHTML={{
                __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              </py-repl>`,
              }}
            />
          </Editor>
        </div>
      </section>

      <Footer>
        <div>
          <h3 className="flex gap-2">
            <Link
              href={"/latihan"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/pendahuluan_2/#title"}
              className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
            >
              Selanjutnya
            </Link>
          </h3>
        </div>
      </Footer>
    </>
  );
};

export default pagePendahuluan;
