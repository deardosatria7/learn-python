import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";

const page5 = () => {
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
          Jenis data berikut adalah contoh tipe data <i>String</i> dan{" "}
          <i>Integer</i>.
        </p>
        <p className="pt-3 pl-1">
          Tipe data <i>String</i> ditandai dengan adanya tanda petik dua
          (&ldquo;&rdquo;). Data yang berbentuk <i>String</i> akan dikenali
          dalam bentuk teks oleh Python.
        </p>
        <div className="pt-3 pl-1">
          Kita sudah mempelajari dua bentuk tipe data, yaitu:
          <li>
            <i>Integer</i> yang berbentuk angka
          </li>
          <li>
            <i>String</i> yang berbentuk teks
          </li>
        </div>
        <Editor>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              harga = 250
              minuman = "Pepsi"
              </py-repl>`,
            }}
          />
        </Editor>
        <div className="flex">
          <h3 className="flex gap-2 pt-4">
            <Link
              href={"/latihan/4"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/6"}
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

export default page5;
