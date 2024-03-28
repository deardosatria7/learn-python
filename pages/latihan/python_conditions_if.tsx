import Link from "next/link";
import Image from "next/image";
import Header from "@/sections/Header";
import {useRouter} from "next/router";
import Footer from "@/sections/Footer";
import diagram_if from "@/public/diagram-if.jpg";

const code1 =
  'x = 100 \ny = 20 \n\nif (x > y): \n print("x lebih besar dari y")';
const code2 =
  'x = 55 \ny = 55 \n\nif (x > y): \n print("x lebih besar dari y") \nelif (x == y): \n print("x sama dengan y")';
const code3 =
  'x = 7 \n\nif (x > 0): \n print("x bilangan positif") \nelif (x < 0): \n print("x bilangan negatif") \nelse: \n print("x sama dengan nol")';

// Function copy code button
function copyCode(code: string) {
  navigator.clipboard.writeText(code);
}

const PythonIf = () => {
  const router = useRouter();
  return (
    <>
      <Header>
        <div className="flex flex-row justify-start gap-4">
          <Link href={"../list_materi"} className="md:hidden">
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
          <Link href={"/"}>
            <h4 className="text-lg text-white">Belajar-Python</h4>
          </Link>
        </div>
      </Header>
      <section className="">
        <div className="md:grid md:grid-cols-12">
          <div className="hidden md:block md:col-span-3 md:overflow-auto md:gap-3 text-sm lg:text-base">
            <div className="grid grid-cols-1 gap-2 bg-neutral-200 p-4">
              <div className="text-blue-900">
                <Link href={"../"}>Home</Link>
              </div>
              <div className="text-blue-900">
                <Link href={"../latihan/pendahuluan_1"}>Pendahuluan</Link>
              </div>
              <div>
                Variabel
                <span className="text-blue-900">
                  <li className="pl-2">
                    <Link href={"../latihan/variabel_string"}>
                      Variabel string
                    </Link>
                  </li>
                  <li className="pl-2">
                    <Link href={"../latihan/pendahuluan_1"}>
                      Variabel integer
                    </Link>
                  </li>
                  <li className="pl-2">
                    <Link href={"../latihan/variabel_float"}>
                      Variabel float
                    </Link>
                  </li>
                  <li className="pl-2">
                    <Link href={"../latihan/variabel_boolean"}>
                      Variabel boolean
                    </Link>
                  </li>
                </span>
              </div>
              <div>
                Operator
                <span className="text-blue-900">
                  <li className="pl-2">
                    <Link href={"../latihan/operator_aritmatika"}>
                      Operator aritmatika
                    </Link>
                  </li>
                  <li className="pl-2">
                    <Link href={"../latihan/operator_perbandingan"}>
                      Operator perbandingan
                    </Link>
                  </li>
                  <li className="pl-2">
                    <Link href={"../latihan/operator_logika"}>
                      Operator logika
                    </Link>
                  </li>
                  <li className="pl-2">
                    <Link href={"../latihan/operator_membership"}>
                      Operator membership
                    </Link>
                  </li>
                  <li className="pl-2">
                    <Link href={"../latihan/operator_bitwise"}>
                      Operator bitwise
                    </Link>
                  </li>
                </span>
              </div>
              <div>
                <span className="text-blue-900">
                  <Link href={"../latihan/variabel_multidata"}>
                    Python Arrays
                  </Link>
                </span>
                <span className="text-blue-900">
                  <li className="pl-2">
                    <Link href={"../latihan/python_list"}>Python list</Link>
                  </li>
                  <li className="pl-2">
                    <Link href={"../latihan/python_tuples"}>Python tuple</Link>
                  </li>
                  <li className="pl-2">
                    <Link href={"../latihan/python_set"}>Python set</Link>
                  </li>
                  <li className="pl-2">
                    <Link href={"../latihan/python_dictionary"}>
                      Python dictionary
                    </Link>
                  </li>
                </span>
              </div>
              <div className="text-blue-900">
                <Link href={"../latihan/python_conditions_if"}>Python if</Link>
              </div>
              <div className="text-blue-900">
                <Link href={"../latihan/python_while"}>Python while</Link>
              </div>
              <div className="text-blue-900">
                <Link href={"../latihan/python_for"}>Python for</Link>
              </div>
              <div className="pb-20">
                <span className="text-blue-900">
                  <Link href={"../quiz"}>Quiz</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 md:max-h-screen md:overflow-y-auto p-4">
            <h1 className="text-2xl font-semibold">Python kondisional (if)</h1>
            <p className="py-3 pt-4 pl-1">
              Python kondisional if biasa digunakan dalam membandingkan dua buah
              kondisi, contoh seperti ini:{" "}
              <span className="text-blue-600 font-semibold">
                Apabila memenuhi kondisi 1, maka jalankan perintah A. Dan
                apabila memenuhi kondisi 2, maka jalankan perintah B.
              </span>
              <br /> <br />
              Coba perhatikan contoh dibawah ini.
            </p>
            <div className="pt-3 text-sm sm:text-md">
              <div className="flex flex-col">
                <div className="bg-neutral-200 p-2 rounded-md">
                  <div>
                    <code>
                      x &#61; <span className="text-red-700">100</span> <br />y
                      &#61; <span className="text-red-700">20</span> <br />
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
            <div className="pl-1 pt-3">
              Uji coba kode diatas dengan salin ke dalam{" "}
              <Link href={"../uji_kode"} className="underline text-blue-500">
                terminal
              </Link>{" "}
              ini.
            </div>
            <p className="py-2 pl-1 pt-3">
              Setelah tanda titik dua, perlu dimengerti akan{" "}
              <b>pentingnya indentasi (tab) pada baris kode selanjutnya.</b>{" "}
              Jika tidak ada indentasi, maka akan muncul pesan error.
            </p>
            <p className="py-2 pl-1 pt-2">
              Operator yang paling sering digunakan adalah operator perbandingan
              seperti lebih besar dari &#40;&#62;&#41;, kurang dari
              &#40;&#60;&#41;, sama dengan &#40;&#61;&#61;&#41;, dan lain-lain.
            </p>
            <p className="py-2 pl-1 mt-20">
              Selain{" "}
              <code className="px-1 rounded-sm bg-neutral-200">if()</code> ada
              juga istilah{" "}
              <code className="px-1 rounded-sm bg-neutral-200">elif()</code>.{" "}
              <b>Else-if/elif</b> adalah cara python untuk bicara &#34;apabila
              kondisi sebelumnya tidak tercapai, maka coba kondisi ini.&#34;
              Perhatikan contoh di bawah ini:
            </p>
            <div className="pt-3 text-sm sm:text-md">
              <div className="flex flex-col">
                <div className="bg-neutral-200 p-2 rounded-md">
                  <div>
                    <code>
                      x &#61; <span className="text-red-700">55</span> <br />y
                      &#61; <span className="text-red-700">55</span> <br />
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
                      <span className="text-violet-800">elif</span> &#40;x
                      &#61;&#61; y&#41;&#58;
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
            <div className="pl-1 pt-3">
              Uji coba kode diatas dengan salin ke dalam{" "}
              <Link href={"../uji_kode"} className="underline text-blue-500">
                terminal
              </Link>{" "}
              ini.
            </div>

            <p className="py-2 pl-1 mt-20">
              Apabila kondisi dalam <code>if</code> dan <code>elif</code> tidak
              terpenuhi, terakhir ada istilah{" "}
              <code className="px-1 rounded-sm bg-neutral-200 font-semibold">
                else
              </code>
              . Kondisi dalam <code>else</code> inilah yang akan dieksekusi
              apabila tidak ada kondisi lainnya yang memenuhi.
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
                  <div>
                    <code>
                      x &#61; <span className="text-red-700">7</span>
                    </code>
                    <br />
                    <br />
                    <code>
                      <span className="text-violet-800">if</span> &#40;x &#62;
                      0&#41;&#58;
                    </code>
                    <br />
                    &nbsp;
                    <code>
                      <span className="text-violet-800">print</span> &#40;
                      <span className="text-orange-700">
                        &#34;x bilangan positif&#34;
                      </span>
                      &#41;
                    </code>
                    <br />
                    <code>
                      <span className="text-violet-800">elif</span> &#40;x &#60;
                      0&#41;&#58;
                    </code>
                    <br />
                    &nbsp;
                    <code>
                      <span className="text-violet-800">print</span> &#40;
                      <span className="text-orange-700">
                        &#34;x bilangan negatif&#34;
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
                        &#34;x sama dengan nol&#34;
                      </span>
                      &#41;
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
            <div className="pl-1 pt-3 pb-20 md:pb-10">
              Uji coba kode diatas dengan salin ke dalam{" "}
              <Link href={"../uji_kode"} className="underline text-blue-500">
                terminal
              </Link>{" "}
              ini.
            </div>
            <div className="hidden md:flex flex-row">
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
          </div>
        </div>
      </section>

      <div className="md:hidden">
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
      </div>
    </>
  );
};

export default PythonIf;
