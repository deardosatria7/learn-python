import Header from "@/sections/Header";
import Link from "next/link";
import Footer from "@/sections/Footer";

const code =
  'def perkalian (a, b): \n return(a*b) \nprint (perkalian(8, 9)) \n\ndef bandingkan (a, b):\n if (a < b):\n  print(a, "lebih kecil dari", b)\n elif (a > b):\n  print(a, "lebih besar dari", b)\n else :\n  print(a, "sama dengan", b)\nbandingkan (12, 15)';
// Function copy code button
function copyCode() {
  navigator.clipboard.writeText(code);
}

const pageOperator3 = () => {
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
              <div className="pb-48">
                <span className="text-blue-900">
                  <Link href={"../quiz"}>Quiz</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 p-4">
            <h1 className="text-2xl font-semibold">Operator Python</h1>
            <p className="pt-3 pl-1">
              Mari kita pahami lebih dalam lagi mengenai operator aritmatika dan
              operator perbandingan yang telah dipelajari.
            </p>
            <p className="pt-3 pl-1">
              Berikut ini adalah contoh penggunaan operator perbandingan dan
              aritmatika dalam python. Perhatikan contoh kode berikut!
            </p>
            <div className="ml-1 mt-4 px-4 py-1 pb-6 rounded-md bg-neutral-200">
              <div className="pt-2 text-sm sm:text-md">
                <code>
                  <span className="text-orange-600">
                    #Contoh kegunaan operator aritmatika python
                  </span>
                  <br />
                  <span className="text-violet-700">def</span> perkalian &#40;a,
                  b&#41;&#58;
                  <br />
                  &nbsp;<span className="text-violet-700">return</span>
                  &#40;a&#42;b&#41;
                  <br />
                  <br />
                  <span className="text-violet-700">print</span>
                  &#40;perkalian&#40;8, 9&#41;&#41;
                  <br />
                  <br />
                  <span className="text-orange-600">
                    #Contoh kegunaan operator perbandingan python
                  </span>
                  <br />
                  <span className="text-violet-700">def</span> bandingkan
                  &#40;a, b&#41;&#58;
                  <br />
                  &nbsp;<span className="text-violet-700">if</span> &#40;a &#60;
                  b&#41;&#58;
                  <br />
                  &nbsp;&nbsp;<span className="text-violet-700">print</span>
                  &#40;a,{" "}
                  <span className="text-orange-600">
                    &#34;lebih kecil dari&#34;
                  </span>
                  , b&#41;
                  <br />
                  &nbsp;<span className="text-violet-700">elif</span> &#40;a
                  &#62; b&#41;&#58;
                  <br />
                  &nbsp;&nbsp;<span className="text-violet-700">print</span>
                  &#40;a,{" "}
                  <span className="text-orange-600">
                    &#34;lebih besar dari&#34;
                  </span>
                  , b&#41;
                  <br />
                  &nbsp;<span className="text-violet-700">else</span>&#58;
                  <br />
                  &nbsp;&nbsp;<span className="text-violet-700">print</span>
                  &#40;a,{" "}
                  <span className="text-orange-600">&#34;sama dengan&#34;</span>
                  , b&#41;
                  <br />
                  <br />
                  bandingkan&#40;12, 15&#41;
                </code>
              </div>
              <div className="mt-6">
                <button
                  className="bg-blue-600 hover:bg-blue-500 rounded-md text-white px-2 py-1"
                  onClick={copyCode}
                >
                  Salin kode
                </button>
              </div>
            </div>
            <div className="pt-3 pl-1 mb-24 md:mb-6">
              Jalankan kode diatas dalam{" "}
              <Link href="../uji_kode" className="text-blue-700 underline">
                terminal ini
              </Link>
              .
            </div>
            <div className="hidden md:flex flex-row">
              <div>
                <h3 className="flex gap-2">
                  <Link
                    href={"/latihan/operator_perbandingan"}
                    className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
                  >
                    Sebelumnya
                  </Link>
                  <Link
                    href={"/latihan/operator_logika"}
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
                  href={"/latihan/operator_perbandingan"}
                  className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
                >
                  Sebelumnya
                </Link>
                <Link
                  href={"/latihan/operator_logika"}
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

export default pageOperator3;
