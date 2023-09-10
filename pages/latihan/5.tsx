import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";

const page5 = () => {
  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-white">Belajar-Python</h4>
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
        <h3 className="pt-4 flex flex-col">
          <Link href={"../"}>Back to home</Link>
          <Link href={"/latihan/6"} className="text-blue-600">
            Selanjutnya
          </Link>
          <Link href={"/latihan/4"} className="text-blue-600">
            Sebelumnya
          </Link>
        </h3>
      </section>
    </>
  );
};

export default page5;
