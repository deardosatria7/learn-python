import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";
import Footer from "@/sections/Footer";

const pageOperator = () => {
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
        <h1 className="text-2xl font-semibold">Operator Python</h1>
        <p className="pt-3 pl-1">
          Selamat! Kalian telah mempelajari tipe-tipe variabel dalam python.
        </p>
        <p className="pt-3 pl-1">
          Selanjutnya adalah materi mengenai operator dalam python. Di dalam
          python, ada beberapa operator yang dapat dimasukkan kedalam kode.
          Contohnya adalah <b>Operator Aritmatika</b>. Beberapa operator
          aritmatika termasuk penjumlahan, pengurangan, perkalian, pembagian,
          dan perpangkatan.
        </p>
        <div className="pt-3 pl-1">
          <li>Penjumlahan (+)</li>
          <li>Pengurangan (-)</li>
          <li>Perkalian (*)</li>
          <li>Pembagian (/)</li>
          <li>Perpangkatan (**)</li>
          <li>Pembagian hasil bulat (//)</li>
        </div>
        <div className="pt-3 pl-1">
          Coba kalian jalankan kode di bawah ini dan perhatikan mengapa hasilnya
          seperti itu!
        </div>
        <Editor>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              print (10 + 3)
              print (10 - 3)
              print (10 * 3)
              print (10 / 3)
              print (10 ** 3)
              print (10 // 3)
              </py-repl>`,
            }}
          />
        </Editor>
      </section>

      <Footer>
        <div>
          <h3 className="flex gap-2">
            <Link
              href={"/latihan/variabel_5"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/operator_2"}
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

export default pageOperator;
