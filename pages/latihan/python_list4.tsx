import Link from "next/link";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const PythonList4 = () => {
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
              Selanjutnya kita akan belajar mengenai metode yang digunakan dalam
              list python.
            </div>
            <div className="flex flex-col py-2 pl-1">
              <table className="table-auto border-2">
                <tbody>
                  <tr className="flex justify-start content-start gap-1 p-2 bg-neutral-100">
                    <td className="pr-7">
                      <Link href={"/latihan/python_list/append"}>
                        <code className="px-2 py-1 rounded-md bg-neutral-200">
                          append()
                        </code>
                      </Link>
                    </td>
                    <td>Menambahkan data baru kedalam list.</td>
                  </tr>
                  <tr className="flex justify-start content-start gap-1 p-2">
                    <td className="pr-7">
                      <Link href={"/latihan/python_list/insert"}>
                        <code className="px-2 py-1 rounded-md bg-neutral-200">
                          insert()
                        </code>
                      </Link>
                    </td>
                    <td>
                      Menambahkan data baru kedalam list dalam posisi tertentu.
                    </td>
                  </tr>
                  <tr className="flex justify-start content-start gap-1 p-2 bg-neutral-100">
                    <td className="pr-7">
                      <Link href={"/latihan/python_list/extend"}>
                        <code className="px-2 py-1 rounded-md bg-neutral-200">
                          extend()
                        </code>
                      </Link>
                    </td>
                    <td>Menggabungkan dua buah list.</td>
                  </tr>
                  <tr className="flex justify-start content-start gap-1 p-2">
                    <td className="pr-7">
                      <Link href={"/latihan/python_list/remove"}>
                        <code className="px-2 py-1 rounded-md bg-neutral-200">
                          remove()
                        </code>
                      </Link>
                    </td>
                    <td>Menghapus data tertentu dalam list.</td>
                  </tr>
                  <tr className="flex justify-start content-start gap-1 p-2 bg-neutral-100">
                    <td className="pr-14">
                      <Link href={"/latihan/python_list/pop"}>
                        <code className="px-2 py-1 rounded-md bg-neutral-200">
                          pop()
                        </code>
                      </Link>
                    </td>
                    <td>Menghapus data pada urutan tertentu dalam list.</td>
                  </tr>
                  <tr className="flex justify-start content-start gap-1 p-2">
                    <td className="pr-10">
                      <Link href={"/latihan/python_list/clear"}>
                        <code className="px-2 py-1 rounded-md bg-neutral-200">
                          clear()
                        </code>
                      </Link>
                    </td>
                    <td>Menghapus semua data dalam list.</td>
                  </tr>
                  <tr className="flex justify-start content-start gap-1 p-2 bg-neutral-100">
                    <td className="pr-12">
                      <Link href={"/latihan/python_list/copy"}>
                        <code className="px-2 py-1 rounded-md bg-neutral-200">
                          copy()
                        </code>
                      </Link>
                    </td>
                    <td>Menyalin data dalam list.</td>
                  </tr>
                  <tr className="flex justify-start content-start gap-1 p-2">
                    <td className="pr-10">
                      <Link href={"/latihan/python_list/count"}>
                        <code className="px-2 py-1 rounded-md bg-neutral-200">
                          count()
                        </code>
                      </Link>
                    </td>
                    <td>Menghitung jumlah data tertentu dalam sebuah list.</td>
                  </tr>
                  <tr className="flex justify-start content-start gap-1 p-2 bg-neutral-100">
                    <td className="pr-10">
                      <Link href={"/latihan/python_list/indexlist"}>
                        <code className="px-2 py-1 rounded-md bg-neutral-200">
                          index()
                        </code>
                      </Link>
                    </td>
                    <td>Mengambil posisi data tertentu dalam sebuah list.</td>
                  </tr>
                  <tr className="flex justify-start content-start gap-1 p-2">
                    <td className="pr-6">
                      <Link href={"/latihan/python_list/reverse"}>
                        <code className="px-2 py-1 rounded-md bg-neutral-200">
                          reverse()
                        </code>
                      </Link>
                    </td>
                    <td>Membalikkan posisi data dalam list (awal-akhir).</td>
                  </tr>
                  <tr className="flex justify-start content-start gap-1 p-2 bg-neutral-100">
                    <td className="pr-12">
                      <Link href={"/latihan/python_list/sort"}>
                        <code className="px-2 py-1 rounded-md bg-neutral-200">
                          sort()
                        </code>
                      </Link>
                    </td>
                    <td>Mengurutkan data dalam sebuah list.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="py-2 pl-1 pb-24 md:pb-12">
              Kalian dapat meng-klik metode yang ingin kalian pelajari agar
              lebih paham.
            </div>
            <div className="hidden md:flex flex-row">
              <div>
                <h3 className="flex gap-2">
                  <Link
                    href={"/latihan/python_list3"}
                    className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
                  >
                    Sebelumnya
                  </Link>
                  <Link
                    href={"/latihan/python_tuples"}
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
                  href={"/latihan/python_list3"}
                  className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
                >
                  Sebelumnya
                </Link>
                <Link
                  href={"/latihan/python_tuples"}
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

export default PythonList4;
