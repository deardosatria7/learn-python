import Link from "next/link";
import Image from "next/image";
import Header from "@/sections/Header";
import {useRouter} from "next/router";
import Footer from "@/sections/Footer";
import diagram_if from "@/public/diagram-if.jpg";

const PythonIf = () => {
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
        <h1 className="text-2xl font-semibold">Python kondisional (if)</h1>
        <p className="py-3 pt-4 pl-1">
          Python kondisional if biasa digunakan dalam membandingkan dua buah
          kondisi, contohnya seperti ini:{" "}
          <i className="text-blue-800">
            Apabila memenuhi kondisi 1, maka jalankan perintah A. Dan apabila
            memenuhi kondisi 2, maka jalankan perintah B.
          </i>
          <br /> <br />
          Coba perhatikan contoh dibawah ini.
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                x &#61; <span className="text-red-700">100</span> <br />y &#61;{" "}
                <span className="text-red-700">20</span> <br />
              </code>
              <br />
              <code>
                <span className="text-violet-800">if</span> &#40;x &#62;
                y&#41;&#58;
              </code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">print</span> &#40;
                <span className="text-orange-700">
                  &#34;x lebih besar dari y&#34;
                </span>
                &#41;
              </code>
              <br />
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
        <p className="py-2 pl-1 pt-3">
          Setelah tanda titik dua, perlu dimengerti akan{" "}
          <b>pentingnya indentasi (tab) pada baris kode selanjutnya.</b> Jika
          tidak ada indentasi, maka akan muncul pesan error.
        </p>
        <p className="py-2 pl-1 pt-4">
          Operator yang paling sering digunakan adalah operator perbandingan
          seperti lebih besar dari &#40;&#62;&#41;, kurang dari &#40;&#60;&#41;,
          sama dengan &#40;&#61;&#61;&#41;, dan lain-lain.
        </p>
        <hr className="my-8 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
        <p className="py-2 pl-1 pt-4">
          Selain <code className="px-1 rounded-sm bg-neutral-200">if()</code>{" "}
          ada juga istilah{" "}
          <code className="px-1 rounded-sm bg-neutral-200">elif()</code>.{" "}
          <b>Else-if/elif</b> adalah cara python untuk bicara &#34;apabila
          kondisi sebelumnya tidak tercapai, maka coba kondisi ini.&#34;
          Perhatikan contoh di bawah ini:
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                x &#61; <span className="text-red-700">55</span> <br />y &#61;{" "}
                <span className="text-red-700">55</span> <br />
              </code>
              <br />
              <code>
                <span className="text-violet-800">if</span> &#40;x &#62;
                y&#41;&#58;
              </code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">print</span> &#40;
                <span className="text-orange-700">
                  &#34;x lebih besar dari y&#34;
                </span>
                &#41;
              </code>
              <br />
              <code>
                <span className="text-violet-800">elif</span> &#40;x &#61;&#61;
                y&#41;&#58;
              </code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">print</span> &#40;
                <span className="text-orange-700">
                  &#34;x sama dengan y&#34;
                </span>
                &#41;
              </code>
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
        <hr className="my-8 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
        <p className="py-2 pl-1 pt-4">
          Apabila kondisi dalam <code>if</code> dan <code>elif</code> tidak
          terpenuhi, terakhir ada istilah{" "}
          <code className="px-1 rounded-sm bg-neutral-200 font-semibold">
            else
          </code>
          . Kondisi dalam <code>else</code> inilah yang akan dieksekusi apabila
          tidak ada kondisi lainnya yang memenuhi.
        </p>
        <p className="py-2 pl-1 pt-4">
          Seperti inilah diagram cara kerja <b>if - elif - else</b>.
        </p>
        <div className="w-auto">
          <Image src={diagram_if} alt="diagram if elif else"></Image>
        </div>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                x &#61; <span className="text-red-700">10</span> <br />y &#61;{" "}
                <span className="text-red-700">50</span> <br />
              </code>
              <br />
              <code>
                <span className="text-violet-800">if</span> &#40;x &#62;
                y&#41;&#58;
              </code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">print</span> &#40;
                <span className="text-orange-700">
                  &#34;x lebih besar dari y&#34;
                </span>
                &#41;
              </code>
              <br />
              <code>
                <span className="text-violet-800">elif</span> &#40;x &#61;&#61;
                y&#41;&#58;
              </code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">print</span> &#40;
                <span className="text-orange-700">
                  &#34;x sama dengan y&#34;
                </span>
                &#41;
              </code>
              <br />
              <code>
                <span className="text-violet-800">else</span>&#58;
              </code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">print</span> &#40;
                <span className="text-orange-700">
                  &#34;x lebih kecil dari y&#34;
                </span>
                &#41;
              </code>
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
              <button
                onClick={() => router.back()}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Kembali
              </button>
              <Link
                href={"/latihan/python_conditions_if2"}
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

export default PythonIf;
