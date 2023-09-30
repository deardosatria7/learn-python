import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";
import Footer from "@/sections/Footer";

const pageVariabel = () => {
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
          Latihan kali ini kita akan melihat jenis data apa saja yang bisa
          disimpan dalam sebuah variabel Python.
        </p>
        <p className="pt-3 pl-1">
          Pada bagian pendahuluan tadi kita sudah melihat contoh data yang
          berupa angka bulat <i>(integer)</i>. Selain angka bulat, python juga
          memiliki tipe data <i>float</i> yaitu tipe data angka desimal. Kita
          akan mencoba untuk menyimpan data yang berupa <i>float</i>
          /angka desimal dan <i>string</i> atau teks.
        </p>
        <p className="pt-3 pl-1">
          Coba kalian simpan nama merek &ldquo;Pepsi&rdquo; dalam variabel
          &ldquo;minuman&rdquo; di bawah ini.
        </p>
        <Editor>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              harga = 250
              liter = 2.5
              minuman = ""
              </py-repl>`,
            }}
          />
        </Editor>
      </section>

      <Footer>
        <div>
          <h3 className="flex gap-2">
            <Link
              href={"/latihan/pendahuluan_2"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/variabel_2"}
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

export default pageVariabel;
