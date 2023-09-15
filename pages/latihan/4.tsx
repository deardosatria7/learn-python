import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";

const page4 = () => {
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
          Disini kita akan melihat jenis data apa saja yang bisa disimpan dalam
          sebuah variabel Python.
        </p>
        <p className="pt-3 pl-1">
          Kita sudah melihat contoh data yang berupa angka <i>(integer)</i>.
          Kali ini kita akan mencoba untuk menyimpan data yang berupa{" "}
          <i>String</i> atau teks.
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
              minuman = ""
              </py-repl>`,
            }}
          />
        </Editor>
        <div className="flex">
          <h3 className="flex flex-col gap-2 pt-4">
            <Link
              href={"/latihan/3"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/5"}
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

export default page4;
