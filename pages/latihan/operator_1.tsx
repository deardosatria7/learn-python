import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";

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
        <p className="pt-3 pl-1">Operator dasar dalam python.</p>
        <p className="pt-3 pl-1">
          Selamat! Kalian telah mempelajari tipe-tipe variabel dalam python.
        </p>
        <div className="pt-3 pl-1">
          <li>
            <i>Integer</i> yang berupa angka bulat.
          </li>
          <li>
            <i>Float</i> yang berupa angka desimal.
          </li>
          <li>
            <i>String</i> yang berupa teks.
          </li>
          <li>
            <i>Boolean</i> yang bernilai True atau False.
          </li>
        </div>
        <div className="pt-3 pl-1">
          Coba kalian isi variabel di bawah ini sesuai kreativitas kalian!
          <br />
          <span className="italic text-blue-600">
            Output hanya akan keluar ketika telah diisi seluruh variabel
            dibawah.
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
              string_namaProduk = ""
              integer_harga = 
              float_jumlah = 
              boolean_statusTersedia = 

              # jangan edit kode dibawah ini
              harga_format = "{:,}".format(integer_harga)
              print ("Berikut adalah keterangan dari produk diatas")
              print ("Merek: " + string_namaProduk)
              print ("Harga: Rp", harga_format)
              print ("Jumlah: ", float_jumlah)
              print ("Status tersedia: ", boolean_statusTersedia)
              </py-repl>`,
            }}
          />
        </Editor>
        <div className="flex">
          <h3 className="flex gap-2 pt-4">
            <Link
              href={"/latihan/variabel_4"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/variabel_6"}
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

export default pageOperator;
