import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";
import Footer from "@/sections/Footer";

const pageVariabel4 = () => {
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
          Masih tentang tipe data <i>Boolean</i>.
        </p>
        <p className="pt-3 pl-1">
          Di bawah ini terdapat dua buah variabel bernama nomor_1 dan nomor_2.
          Keduanya bernilai sama dengan 50. Kita akan membandingkan kedua
          variabel tersebut.
        </p>
        <div className="pt-3 pl-1">
          Coba kalian jalankan kode ini! Kenapa hasilnya demikian?
        </div>
        <Editor>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              nomor_1 = 50
              nomor_2 = "50"
              variabel_perbandingan = (nomor_1 == nomor_2)

              print (variabel_perbandingan)
              </py-repl>`,
            }}
          />
        </Editor>
      </section>

      <Footer>
        <div>
          <h3 className="flex gap-2">
            <Link
              href={"/latihan/variabel_3"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/variabel_5"}
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

export default pageVariabel4;
