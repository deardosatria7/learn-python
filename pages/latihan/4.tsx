import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";

const page4 = () => {
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
        <h3 className="pt-4 flex flex-col">
          <Link href={"../"}>Back to home</Link>
          <Link href={"/latihan/5"} className="text-blue-600">
            Selanjutnya
          </Link>
          <Link href={"/latihan/3"} className="text-blue-600">
            Sebelumnya
          </Link>
        </h3>
      </section>
    </>
  );
};

export default page4;
