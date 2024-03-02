import Link from "next/link";
import Header from "@/sections/Header";
import {useRouter} from "next/router";
import Footer from "@/sections/Footer";

const code1 =
  "tuple1 = (1, 4, 3, 4, 1, 9, 4, 6) \nx = tuple1.index(4) \nprint(x)";

// Function copy code button
function copyCode() {
  navigator.clipboard.writeText(code1);
}

const PythonTuplesIndex = () => {
  const router = useRouter();
  return (
    <>
      <Header>
        <div className="flex flex-row justify-between">
          <Link href={"/"}>
            <h4 className="text-lg text-white">Belajar-Python</h4>
          </Link>
          <div className="pl-4 grid content-center">
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
        <h1 className="text-2xl font-semibold">Python Tuple</h1>

        {/* Metode index() */}
        <div className="flex flex-col pl-1 mt-3">
          <div className="text-lg font-medium">Metode index( )</div>
          <div className="pt-1">
            Metode index( ) digunakan untuk mengambil posisi dari data tertentu
            dalam sebuah tuple.
          </div>
          <div className="pt-3">
            Metode index( ) dapat digunakan dengan mengetikkan{" "}
            <code className="px-2 py-1 rounded-md bg-neutral-200">
              <i>namaTuple.</i>index(<i>data</i>)
            </code>{" "}
          </div>
          <div className="pt-6">
            <div className="flex flex-col">
              <div className="bg-neutral-200 p-2 rounded-md">
                <div>
                  <code>
                    tuple1 = (<span className="text-red-600">1</span>,{" "}
                    <span className="text-red-600">4</span>,{" "}
                    <span className="text-red-600">3</span>,{" "}
                    <span className="text-red-600">4</span>,{" "}
                    <span className="text-red-600">1</span>,{" "}
                    <span className="text-red-600">9</span>,{" "}
                    <span className="text-red-600">4</span>,{" "}
                    <span className="text-red-600">6</span>)
                  </code>
                  <br />
                  <code>x = tuple1.index(4)</code>
                  <br />
                  <code>
                    <span className="text-violet-800">print</span>(x)
                  </code>
                </div>
                <div className="mt-6 mb-2">
                  <button
                    className="bg-blue-600 hover:bg-blue-500 rounded-md text-white px-2 py-1"
                    onClick={copyCode}
                  >
                    Salin kode
                  </button>
                </div>
              </div>
              <div className="pt-4">
                Apabila terdapat lebih dari satu data yang sama, maka index()
                akan mengembalikan posisi data yang pertama kali muncul.
              </div>
            </div>
          </div>
        </div>
        <div className="pl-1 pt-5 pb-20">
          Uji coba beberapa kode diatas dengan salin ke dalam{" "}
          <Link href={"../uji_kode"} className="underline text-blue-500">
            terminal
          </Link>{" "}
          ini.
        </div>
      </section>

      <Footer>
        <div className="flex flex-row">
          <div>
            <button
              onClick={() => router.back()}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Kembali
            </button>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default PythonTuplesIndex;
