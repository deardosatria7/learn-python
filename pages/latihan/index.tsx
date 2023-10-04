import Link from "next/link";
import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Footer from "@/sections/Footer";
import {useRef, useEffect} from "react";

const Latihan = () => {
  return (
    <>
      <Header>
        <div className="flex flex-row justify-between">
          <Link href={"/"}>
            <h4 className="text-lg text-white">Belajar-Python</h4>
          </Link>
          <div className="invisible md:visible pl-4 grid content-center">
            <Link href={"../list_materi"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path d="M39,29H9c-1.657,0-3-1.343-3-3v-3h36v3C42,27.657,40.657,29,39,29z"></path>
                <path
                  fill="#fff"
                  d="M39,27H9c-1.105,0-2-0.895-2-2v-3h34v3C41,26.105,40.105,27,39,27z"
                ></path>
                <path d="M39,28H9c-1.654,0-3-1.346-3-3v-3c0-0.553,0.448-1,1-1h34c0.552,0,1,0.447,1,1v3C42,26.654,40.654,28,39,28z M8,23v2	c0,0.552,0.449,1,1,1h30c0.551,0,1-0.448,1-1v-2H8z"></path>
                <path d="M39,17H9c-1.657,0-3-1.343-3-3v-3h36v3C42,15.657,40.657,17,39,17z"></path>
                <path
                  fill="#fff"
                  d="M39,15H9c-1.105,0-2-0.895-2-2v-3h34v3C41,14.105,40.105,15,39,15z"
                ></path>
                <path d="M39,16H9c-1.654,0-3-1.346-3-3v-3c0-0.553,0.448-1,1-1h34c0.552,0,1,0.447,1,1v3C42,14.654,40.654,16,39,16z M8,11v2	c0,0.552,0.449,1,1,1h30c0.551,0,1-0.448,1-1v-2H8z"></path>
                <path d="M39,41H9c-1.657,0-3-1.343-3-3v-3h36v3C42,39.657,40.657,41,39,41z"></path>
                <path
                  fill="#fff"
                  d="M39,39H9c-1.105,0-2-0.895-2-2v-3h34v3C41,38.105,40.105,39,39,39z"
                ></path>
                <path d="M39,40H9c-1.654,0-3-1.346-3-3v-3c0-0.553,0.448-1,1-1h34c0.552,0,1,0.447,1,1v3C42,38.654,40.654,40,39,40z M8,35v2	c0,0.552,0.449,1,1,1h30c0.551,0,1-0.448,1-1v-2H8z"></path>
              </svg>
            </Link>
          </div>
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
              tabIndex={3}
              dangerouslySetInnerHTML={{
                __html: `
              <py-repl>
              harga = 250
              setengah_harga = harga / 2
              print (setengah_harga)
              </py-repl>`,
              }}
            />
          </Editor>
        </div>
      </section>

      <Footer>
        <div className="flex flex-row">
          <div>
            <h3 className="flex gap-2">
              <Link
                href={"../"}
                className="text-white bg-neutral-600 hover:bg-neutral-500 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/pendahuluan_1"}
                className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
              >
                Selanjutnya
              </Link>
            </h3>
          </div>
          <div className="visible md:invisible pl-4 grid content-center">
            <Link href={"../list_materi"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </Footer>
      <div className="invisible">
        <form action="">
          <input type="number" autoFocus tabIndex={-1} />
        </form>
      </div>
    </>
  );
};

export default Latihan;
