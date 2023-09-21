import Link from "next/link";
import Header from "@/sections/Header";
import Editor from "@/components/Editor";

const latihan = () => {
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
        <h1 className="text-2xl font-semibold">Pengenalan Python</h1>
        <p className="pt-3 pl-1">
          Python merupakan salah satu bahasa pemrograman yang terkenal di zaman
          sekarang. Bahasa pemrograman python dapat digunakan oleh pemula maupun
          ahli dalam otomasi tugas, pembuatan game, analisis data,{" "}
          <i>machine learning</i>, dan masih banyak lagi.
        </p>
        <p className="pt-3 pl-1">
          Selain itu, bahasa pemrograman python mudah untuk dipahami. Mari kita
          lihat contoh <i>studi kasus</i> berikut ini:
        </p>
        <p className="pt-3 pl-1 text-blue-900 font font-semibold">
          Kalian adalah seorang pegawai di toko elektronik. Pada hari ini, toko
          kalian menyediakan promo diskon setengah harga. Kalian dapat
          menggunakan Python untuk melakukan penghitungan harga secara otomatis.
          Coba kalian jalankan kode dibawah ini!
        </p>
        <Link
          href={"../playground"}
          className="text-sm italic pl-1 underline text-blue-500"
        >
          Bagaimana cara menjalankan kode?
        </Link>
        <div>
          <Editor>
            <div
              dangerouslySetInnerHTML={{
                __html: `
              <py-repl output="replOutput">
              harga = 250
              setengah_harga = harga / 2
              print (setengah_harga)
              </py-repl>`,
              }}
            />
          </Editor>
        </div>
        <div className="flex">
          <h3 className="flex gap-2 pt-4">
            <Link
              href={"../"}
              className="text-white bg-neutral-600 hover:bg-neutral-500 px-4 py-2 rounded-md"
            >
              Back to home
            </Link>
            <Link
              href={"/latihan/pendahuluan_1"}
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

export default latihan;
