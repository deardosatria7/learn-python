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
        <div className="flex flex-row">
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
          <div className="pl-4 grid content-center">
            <Link href={"../navigation"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default pageOperator;
