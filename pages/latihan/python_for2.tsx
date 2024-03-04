import Link from "next/link";
import Header from "@/sections/Header";
import {useRouter} from "next/router";
import Footer from "@/sections/Footer";

const code1 = "for x in range(10): \n print (x)";
const code2 = "for x in range(2, 10): \n print (x)";
const code3 = "for x in range(2, 30, 3): \n print (x)";
const code4 =
  'for x in range (5): \n print (x) \nelse: \n print ("Proses selesai!")';
const code5 =
  'list1 = ["baju", "jas", "celana"] \nwarna = ["hitam", "merah", "putih"] \n\nfor x in list1: \n for y in warna: \n  print(x, y)';

// Function copy code button
function copyCode(code: string) {
  navigator.clipboard.writeText(code);
}

const PythonFor2 = () => {
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
        <h1 className="text-2xl font-semibold">Python loop (for)</h1>
        <div className="text-lg font font-semibold pt-6">
          For dengan <code>range</code>
        </div>
        <p className="py-3 pt-2 pl-1">
          Perulangan for juga dapat dilakukan dengan menggunakan{" "}
          <code className="px-1 bg-neutral-200 rounded-sm">range</code>.
          Perhatikan beberapa contoh penggunaan{" "}
          <code className="px-1 bg-neutral-200 rounded-sm">range</code> dibawah.
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <div>
                <code>
                  <span className="text-violet-800">for</span> x{" "}
                  <span className="text-red-700">in range</span>(10)&#58;
                </code>
                <br />
                &nbsp;
                <code>
                  <span className="text-violet-800">print</span> &#40;x&#41;
                </code>
              </div>
              <div className="mt-6 mb-2">
                <button
                  className="bg-blue-600 hover:bg-blue-500 rounded-md text-white px-2 py-1"
                  onClick={() => copyCode(code1)}
                >
                  Salin kode
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 p-2 rounded-md text-red-600 bg-yellow-200">
          <div>
            Kode diatas mengembalikan nilai angka <b>0 hingga 9</b>
          </div>
        </div>
        <div className="pt-10 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <div>
                <code>
                  <span className="text-violet-800">for</span> x{" "}
                  <span className="text-red-700">in range</span>(2, 10)&#58;
                </code>
                <br />
                &nbsp;
                <code>
                  <span className="text-violet-800">print</span> &#40;x&#41;
                </code>
              </div>
              <div className="mt-6 mb-2">
                <button
                  className="bg-blue-600 hover:bg-blue-500 rounded-md text-white px-2 py-1"
                  onClick={() => copyCode(code2)}
                >
                  Salin kode
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 p-2 rounded-md text-red-600 bg-yellow-200">
          <div>
            Kode diatas mengembalikan nilai angka <b>2 hingga 9</b>.
          </div>
        </div>
        <div className="pt-10 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <div>
                <code>
                  <span className="text-violet-800">for</span> x{" "}
                  <span className="text-red-700">in range</span>(2, 30, 3)&#58;
                </code>
                <br />
                &nbsp;
                <code>
                  <span className="text-violet-800">print</span> &#40;x&#41;
                </code>
              </div>
              <div className="mt-6 mb-2">
                <button
                  className="bg-blue-600 hover:bg-blue-500 rounded-md text-white px-2 py-1"
                  onClick={() => copyCode(code3)}
                >
                  Salin kode
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 p-2 rounded-md text-red-600 bg-yellow-200">
          <div>
            Kode diatas mengembalikan nilai angka <b>2 hingga 29</b> dengan{" "}
            <b>kelipatan 3.</b>
          </div>
        </div>
        <div className="pl-1 pt-3">
          Uji coba kode diatas dengan salin ke dalam{" "}
          <Link href={"../uji_kode"} className="underline text-blue-500">
            terminal
          </Link>{" "}
          ini.
        </div>

        <div className="text-lg font font-semibold mt-12">For dengan else</div>
        <p className="py-2 pl-1 pt-3">
          Perulangan for juga mendukung blok else. Blok else akan dijalankan
          setelah perulangan for selesai.
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <div>
                <code>
                  <span className="text-violet-800">for</span> x{" "}
                  <span className="text-red-700">in range</span> (5)&#58;
                </code>
                <br />
                &nbsp;
                <code>
                  <span className="text-violet-800">print</span> &#40;x&#41;
                </code>
                <br />
                <code className="text-violet-800">else</code>&#58;
                <br />
                &nbsp;
                <code>
                  <span className="text-violet-800">print</span>(
                  <span className="text-orange-700">
                    &#34;Proses selesai!&#34;
                  </span>
                  )
                </code>
              </div>
              <div className="mt-6 mb-2">
                <button
                  className="bg-blue-600 hover:bg-blue-500 rounded-md text-white px-2 py-1"
                  onClick={() => copyCode(code4)}
                >
                  Salin kode
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-1 pt-3">
          Uji coba kode diatas dengan salin ke dalam{" "}
          <Link href={"../uji_kode"} className="underline text-blue-500">
            terminal
          </Link>{" "}
          ini.
        </div>

        <div className="text-lg font font-semibold mt-12">For didalam for</div>
        <p className="py-2 pl-1 pt-3">
          Kalian juga dapat memasukkan metode for didalam sebuah for lain. Lihat
          contoh dibawah ini.
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <div>
                <code>
                  list1 &#61; &#91;
                  <span className="text-orange-700">&#34;baju&#34;</span>,{" "}
                  <span className="text-orange-700">&#34;jas&#34;</span>,{" "}
                  <span className="text-orange-700">&#34;celana&#34;</span>&#93;
                </code>
                <br />
                <code>
                  warna &#61; &#91;
                  <span className="text-orange-700">&#34;hitam&#34;</span>,{" "}
                  <span className="text-orange-700">&#34;merah&#34;</span>,{" "}
                  <span className="text-orange-700">&#34;putih&#34;</span>&#93;
                </code>
                <br />
                <br />
                <code>
                  <span className="text-violet-800">for</span> x{" "}
                  <span className="text-red-700">in</span> list1&#58;
                </code>
                <br />
                &nbsp;
                <code>
                  <span className="text-violet-800">for</span> y{" "}
                  <span className="text-red-700">in</span> warna&#58;
                </code>
                <br />
                &nbsp;&nbsp;
                <code>
                  <span className="text-violet-800">print</span> &#40;x, y&#41;
                </code>
              </div>
              <div className="mt-6 mb-2">
                <button
                  className="bg-blue-600 hover:bg-blue-500 rounded-md text-white px-2 py-1"
                  onClick={() => copyCode(code5)}
                >
                  Salin kode
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-1 pt-3 pb-20">
          Uji coba kode diatas dengan salin ke dalam{" "}
          <Link href={"../uji_kode"} className="underline text-blue-500">
            terminal
          </Link>{" "}
          ini.
        </div>
      </section>

      <Footer>
        <div className="flex flex-row">
          <div>
            <h3 className="flex gap-2">
              <Link
                href={"/latihan/python_for"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/python_for2"}
                className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
              >
                Selanjutnya
              </Link>
            </h3>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default PythonFor2;
