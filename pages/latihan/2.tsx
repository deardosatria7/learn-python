import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";

const page2 = () => {
  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-white">Belajar-Python</h4>
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

        <h3 className="pt-4 flex flex-col">
          <Link href={"../"}>Back to home</Link>
          <Link href={"/latihan/3"} className="text-blue-600">
            Selanjutnya
          </Link>
          <Link href={"/latihan"} className="text-blue-600">
            Sebelumnya
          </Link>
        </h3>
      </section>
    </>
  );
};

export default page2;
