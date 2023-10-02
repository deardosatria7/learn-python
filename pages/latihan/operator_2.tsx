import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";
import Footer from "@/sections/Footer";

const pageOperator2 = () => {
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
          Selain operator aritmatika, juga terdapat{" "}
          <b>Operator Perbandingan.</b>
        </p>
        <p className="pt-3 pl-1">
          <b>Operator perbandingan</b> adalah operator dalam python yang
          berfungsi dalam membandingkan dua buah nilai/variabel. Contohnya
          adalah sebagai berikut:
        </p>
        <div className="pt-3 pl-1">
          <li>Lebih besar (&gt;)</li>
          <li>Lebih kecil (&lt;)</li>
          <li>Lebih besar sama dengan (&gt;=)</li>
          <li>Lebih kecil sama dengan (&lt;=)</li>
          <li>Sama dengan (==)</li>
          <li>Tidak sama dengan (!=)</li>
        </div>
        <div className="pt-3 pl-1">
          Coba kalian jalankan kode di bawah ini dan perhatikan hasilnya!
        </div>
        <Editor>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              a = 10
              b = 20
              c = 30

              print (a > b)
              print (b < c)
              print (c >= a)
              print (a <= b)
              print (b == c-10)
              print (c != a)
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
                href={"/latihan/operator_1"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/operator_3"}
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

export default pageOperator2;
