import Link from "next/link";
import Header from "@/sections/Header";
import Editor from "@/components/Editor";

const latihan = () => {
  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-white">Belajar-Python</h4>
        </div>
      </Header>
      <section className="p-4">
        <h1 className="text-2xl font-semibold">Pengenalan Python</h1>
        <p className="pt-3 pl-1">
          Python merupakan salah satu bahasa pemrograman yang terkenal di zaman
          sekarang. Bahasa pemrograman python dapat digunakan oleh pemula maupun
          ahli dalam otomasi tugas, pembuatan game, analisis data,
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

        <h3 className="pt-4 flex flex-col">
          <Link href={"../"}>Back to home</Link>
          <Link href={"/latihan/2"} className="text-blue-600">
            Selanjutnya
          </Link>
        </h3>
      </section>
    </>
  );
};

export default latihan;
