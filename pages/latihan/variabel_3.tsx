import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";

const pageVariabel3 = () => {
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
        <h1 className="text-2xl font-semibold">Variabel Python</h1>
        <p className="pt-3 pl-1">
          Selanjutnya adalah tipe data <i>Boolean</i>.
        </p>
        <p className="pt-3 pl-1">
          Berbeda dengan <i>Integer</i> dan <i>String</i>, tipe data{" "}
          <i>Boolean</i> hanya dapat menyimpan dua nilai yaitu
          &ldquo;True&rdquo; dan &ldquo;False&rdquo;. Tipe data ini sering
          digunakan dalam perbandingan dua atau lebih variabel.
        </p>
        <div className="pt-3 pl-1">
          Coba kalian isi nilai dari variabel <i>Boolean</i> dibawah ini:
        </div>
        <Editor>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              benar = True
              salah = 
              </py-repl>`,
            }}
          />
        </Editor>
        <div className="flex">
          <h3 className="flex gap-2 pt-4">
            <Link
              href={"/latihan/variabel_2"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/variabel_4"}
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

export default pageVariabel3;
