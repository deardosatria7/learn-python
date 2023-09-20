import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";

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
        <div className="flex">
          <h3 className="flex gap-2 pt-4">
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
      </section>
    </>
  );
};

export default pageOperator2;
