import Link from "next/link";
import Header from "@/sections/Header";
import {useRouter} from "next/router";
import Footer from "@/sections/Footer";

const code1 =
  'dict1 = { \n "nama": "Jeffry", \n "umur": 24, \n "jenis_kelamin": "laki-laki" \n} \n\nx = dict1["nama"] \nprint(x)';
const code2 =
  'dict1 = { \n "nama": "Jeffry", \n "umur": 24, \n "jenis_kelamin": "laki-laki" \n} \n\nx = dict1.keys() \nprint(x)';
const code3 =
  'dict1 = { \n "nama": "Jeffry", \n "umur": 24, \n "jenis_kelamin": "laki-laki" \n} \n\nx = dict1.values() \nprint(x)';
const code4 =
  'dict1 = { \n "nama": "Jeffry", \n "umur": 24, \n "jenis_kelamin": "laki-laki" \n} \n\nx = dict1.items() \nprint(x)';

// Function copy code button
function copyCode(code: string) {
  navigator.clipboard.writeText(code);
}

const PythonDictionary2 = () => {
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
            <h1 className="text-2xl font-semibold">Python Dictionary</h1>
            <div className="text-lg font-semibold pt-3 pl-1">
              Mengakses data dalam dictionary
            </div>
            <p className="py-3 pl-1">
              Untuk mengakses data dalam dictionary, kalian dapat memanggil data
              tersebut berdasarkan <i>key</i>-nya.
            </p>
            <div className="pt-3 text-sm sm:text-md">
              <div className="flex flex-col">
                <div className="bg-neutral-200 p-2 rounded-md">
                  <div>
                    <code>
                      dict1 &#61; &#123; <br />
                      &nbsp;
                      <span className="text-orange-700">&#34;nama&#34;</span>
                      &#58;{" "}
                      <span className="text-orange-700">&#34;Jeffry&#34;</span>,
                      <br />
                      &nbsp;
                      <span className="text-orange-700">&#34;umur&#34;</span>
                      &#58; <span className="text-red-700">24</span>,
                      <br />
                      &nbsp;
                      <span className="text-orange-700">
                        &#34;jenis kelamin&#34;
                      </span>
                      &#58;{" "}
                      <span className="text-orange-700">
                        &#34;laki-laki&#34;
                      </span>
                      <br />
                      &#125;
                    </code>
                    <br />
                    <br />
                    <code>
                      x = dict1&#91;
                      <span className="text-orange-700">&#34;nama&#34;</span>
                      &#93;
                    </code>
                    <br />
                    <code>
                      <span className="text-violet-800">print</span>(x)
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
            <p className="py-2 pl-1 pt-6">
              Atau kalian juga bisa menggunakan metode{" "}
              <code className="px-1 rounded-sm bg-neutral-200 font-bold">
                get()
              </code>
              .
            </p>
            <div className="pt-2 text-sm sm:text-md">
              <div className="flex flex-col">
                <div className="bg-neutral-200 p-2 rounded-md">
                  <code>
                    x = dict1.<span className="text-violet-800">get</span>&#91;
                    <span className="text-orange-700">&#34;nama&#34;</span>&#93;
                  </code>
                </div>
              </div>
            </div>
            <div className="pt-10 font-semibold pl-1">
              Mengambil nilai <i>keys</i>
            </div>
            <p className="py-2 pl-1 pt-4">
              Untuk mengambil seluruh nilai <i>keys</i> dari sebuah dictionary,
              kalian dapat menggunakan perintah{" "}
              <code className="px-1 rounded-sm bg-neutral-200">keys()</code>.
              Hal ini akan mengembalikan nilai seluruh key pada dictionary dalam
              bentuk <b>list.</b>
            </p>
            <div className="pt-1 text-sm sm:text-md">
              <div className="flex flex-col">
                <div className="bg-neutral-200 p-2 rounded-md">
                  <div>
                    <code>
                      dict1 &#61; &#123; <br />
                      &nbsp;
                      <span className="text-orange-700">&#34;nama&#34;</span>
                      &#58;{" "}
                      <span className="text-orange-700">&#34;Jeffry&#34;</span>,
                      <br />
                      &nbsp;
                      <span className="text-orange-700">&#34;umur&#34;</span>
                      &#58; <span className="text-red-700">24</span>,
                      <br />
                      &nbsp;
                      <span className="text-orange-700">
                        &#34;jenis kelamin&#34;
                      </span>
                      &#58;{" "}
                      <span className="text-orange-700">
                        &#34;laki-laki&#34;
                      </span>
                      <br />
                      &#125;
                    </code>
                    <br />
                    <br />
                    <code>x = dict1.keys()</code>
                    <br />
                    <code>
                      <span className="text-violet-800">print</span>(x)
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
            <div className="pt-10 font-semibold pl-1">
              Mengambil nilai <i>values</i>
            </div>
            <p className="py-2 pl-1 pt-4">
              Kalian dapat menggunakan metode{" "}
              <code className="px-1 rounded-sm bg-neutral-200">values()</code>
              untuk mengambil seluruh nilai <i>value</i> dari sebuah dictionary.
              Hal ini akan mengembalikan nilai seluruh value pada dictionary
              dalam bentuk list.
            </p>
            <div className="pt-1 text-sm sm:text-md">
              <div className="flex flex-col">
                <div className="bg-neutral-200 p-2 rounded-md">
                  <div>
                    <code>
                      dict1 &#61; &#123; <br />
                      &nbsp;
                      <span className="text-orange-700">&#34;nama&#34;</span>
                      &#58;{" "}
                      <span className="text-orange-700">&#34;Jeffry&#34;</span>,
                      <br />
                      &nbsp;
                      <span className="text-orange-700">&#34;umur&#34;</span>
                      &#58; <span className="text-red-700">24</span>,
                      <br />
                      &nbsp;
                      <span className="text-orange-700">
                        &#34;jenis kelamin&#34;
                      </span>
                      &#58;{" "}
                      <span className="text-orange-700">
                        &#34;laki-laki&#34;
                      </span>
                      <br />
                      &#125;
                    </code>
                    <br />
                    <br />
                    <code>x = dict1.values()</code>
                    <br />
                    <code>
                      <span className="text-violet-800">print</span>(x)
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
            <div className="pl-1 pt-3">
              Uji coba kode diatas dengan salin ke dalam{" "}
              <Link href={"../uji_kode"} className="underline text-blue-500">
                terminal
              </Link>{" "}
              ini.
            </div>

            <div className="pt-10 font-semibold pl-1">
              Mengambil nilai keduanya
            </div>
            <p className="py-2 pl-1 pt-4">
              Kalian dapat menggunakan metode{" "}
              <code className="px-1 rounded-sm bg-neutral-200">items()</code>
              untuk mengambil seluruh nilai <i>key</i> dan <i>value</i> dari
              sebuah dictionary. Hal ini akan mengembalikan nilai tersebut pada
              dictionary dalam bentuk <b>tuple didalam list</b>.
            </p>
            <div className="pt-1 text-sm sm:text-md">
              <div className="flex flex-col">
                <div className="bg-neutral-200 p-2 rounded-md">
                  <div>
                    <code>
                      dict1 &#61; &#123; <br />
                      &nbsp;
                      <span className="text-orange-700">&#34;nama&#34;</span>
                      &#58;{" "}
                      <span className="text-orange-700">&#34;Jeffry&#34;</span>,
                      <br />
                      &nbsp;
                      <span className="text-orange-700">&#34;umur&#34;</span>
                      &#58; <span className="text-red-700">24</span>,
                      <br />
                      &nbsp;
                      <span className="text-orange-700">
                        &#34;jenis kelamin&#34;
                      </span>
                      &#58;{" "}
                      <span className="text-orange-700">
                        &#34;laki-laki&#34;
                      </span>
                      <br />
                      &#125;
                    </code>
                    <br />
                    <br />
                    <code>x = dict1.items()</code>
                    <br />
                    <code>
                      <span className="text-violet-800">print</span>(x)
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
            <div className="pl-1 pt-3 pb-20 md:pb-10">
              Uji coba kode diatas dengan salin ke dalam{" "}
              <Link href={"../uji_kode"} className="underline text-blue-500">
                terminal
              </Link>{" "}
              ini.
            </div>
            <div className="hidden md:flex flex-row">
              <div className="flex gap-2">
                <Link
                  href={"/latihan/python_dictionary"}
                  className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
                >
                  Sebelumnya
                </Link>
                <Link
                  href={"/latihan/python_dictionary3"}
                  className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
                >
                  Selanjutnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="md:hidden">
        <Footer>
          <div className="flex flex-row">
            <div className="flex gap-2">
              <Link
                href={"/latihan/python_dictionary"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/python_dictionary3"}
                className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
              >
                Selanjutnya
              </Link>
            </div>
          </div>
        </Footer>
      </div>
    </>
  );
};

export default PythonDictionary2;
