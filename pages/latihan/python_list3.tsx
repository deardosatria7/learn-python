import Link from "next/link";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const code =
  'list1 = ["baju", "jas", "celana", "dasi", "topi"] \n\nprint(list1[2:5])\nprint(list1[1:])\nprint(list1[:4])';
// Function copy code button
function copyCode() {
  navigator.clipboard.writeText(code);
}

const PythonList3 = () => {
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
            <h1 className="text-2xl font-semibold">Python List</h1>
            <div className="py-3 pl-1">
              Untuk memanggil data dalam urutan tertentu di sebuah list, kita
              dapat menambahkan <i>range</i> tertentu dari urutan data dalam
              list. Contohnya:
            </div>
            <div className="flex flex-col py-2 pl-1">
              <div className="flex flex-col md:flex-row">
                <div>
                  <code className="px-2 py-1 rounded-md bg-neutral-200">
                    print(<span className="text-orange-700">list1</span>&#91;
                    <span className="text-blue-600">2:5</span>&#93;)
                  </code>{" "}
                </div>
                <div className="md:pl-4">
                  menampilkan list dari urutan ke-2 hingga urutan <i>sebelum</i>{" "}
                  ke-5.
                </div>
              </div>
              <div className="pt-6">
                <div className="flex flex-col md:flex-row">
                  <div>
                    <code className="px-2 py-1 rounded-md bg-neutral-200">
                      print(<span className="text-orange-700">list1</span>&#91;
                      <span className="text-blue-600">1:</span>&#93;)
                    </code>{" "}
                  </div>
                  <div className="md:pl-4">
                    menampilkan list dari urutan ke-1 hingga urutan terakhir.
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex flex-col md:flex-row">
                  <div>
                    <code className="px-2 py-1 rounded-md bg-neutral-200">
                      print(<span className="text-orange-700">list1</span>&#91;
                      <span className="text-blue-600">:4</span>&#93;)
                    </code>{" "}
                  </div>
                  <div className="md:pl-4">
                    menampilkan list dari urutan ke-0 hingga <i>sebelum</i>{" "}
                    urutan ke-4.
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2 pl-1">
              Perhatikan contoh dibawah ini agar lebih paham. Ingat bahwa{" "}
              <b>urutan list berawal dari nomor 0.</b>
            </div>
            <div className="text-sm sm:text-md">
              <div className="flex flex-col">
                <div className="bg-neutral-200 p-2 rounded-md">
                  <div>
                    <code>
                      list1 &#61; &#91;
                      <span className="text-orange-700">
                        &#34;baju&#34;
                      </span>,{" "}
                      <span className="text-orange-700">&#34;jas&#34;</span>,{" "}
                      <span className="text-orange-700">&#34;celana&#34;</span>,{" "}
                      <span className="text-orange-700">&#34;dasi&#34;</span>,{" "}
                      <span className="text-orange-700">&#34;topi&#34;</span>
                      &#93;
                    </code>
                    <br />
                    <br />
                    <code>
                      print(<span className="text-orange-700">list1</span>&#91;
                      <span className="text-blue-600">2:5</span>&#93;)
                    </code>
                    <br />
                    <code>
                      print(<span className="text-orange-700">list1</span>&#91;
                      <span className="text-blue-600">1:</span>&#93;)
                    </code>
                    <br />
                    <code>
                      print(<span className="text-orange-700">list1</span>&#91;
                      <span className="text-blue-600">:4</span>&#93;)
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
              </div>
            </div>
            <div className="pl-1 pt-3 pb-20 md:pb-12">
              Uji coba kode diatas dengan salin ke dalam{" "}
              <Link href={"../uji_kode"} className="underline text-blue-500">
                terminal
              </Link>{" "}
              ini.
            </div>
            <div className="hidden md:flex flex-row">
              <div>
                <h3 className="flex gap-2">
                  <Link
                    href={"/latihan/python_list2"}
                    className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
                  >
                    Sebelumnya
                  </Link>
                  <Link
                    href={"/latihan/python_list4"}
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
                <Link
                  href={"/latihan/python_list2"}
                  className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
                >
                  Sebelumnya
                </Link>
                <Link
                  href={"/latihan/python_list4"}
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

export default PythonList3;
