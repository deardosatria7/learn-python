import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";

const pageOperator3 = () => {
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
          Mari kita pahami lebih dalam lagi mengenai operator dalam python.
        </p>
        <p className="pt-3 pl-1">
          Dibawah ini terdapat kode yang menggunakan prinsip operator dalam
          python. Terdapat beberapa operator aritmatika dan perbandingan di
          dalamnya. Coba kalian <b>ganti dengan operator yang benar</b> agar
          kode dibawah menghasilkan hasil True di setiap barisnya!
        </p>
        <div className="pt-3 pl-1">
          <span className="text-blue-500 italic">
            Output hanya akan keluar apabila seluruh baris kode telah terisi.
          </span>
        </div>
        <Editor>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              print (12 - 9 == 3)
              print (2 * 6 == 64)
              print (27 + 3 == 9)
              print (23 < 15)
              print (45 == 44)
              </py-repl>`,
            }}
          />
        </Editor>
        <div className="flex">
          <h3 className="flex gap-2 pt-4">
            <Link
              href={"/latihan/operator_2"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/operator_4"}
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

export default pageOperator3;
