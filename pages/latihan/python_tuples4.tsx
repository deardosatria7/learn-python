import Link from "next/link";
import Header from "@/sections/Header";
import {useRouter} from "next/router";
import Footer from "@/sections/Footer";

const PythonTuples4 = () => {
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
        <div className="font-semibold pl-1 pt-5 text-lg">
          Metode dalam tuple
        </div>
        <p className="pt-2 pb-3 pl-1">
          Karena tuple tidak mendukung perubahan data, maka metode yang dapat
          digunakan pada tuple lebih sedikit dibandingkan dengan tipe list.
        </p>
        <div className="flex flex-col py-2 pl-1">
          <table className="table-auto border-2">
            <tbody>
              <tr className="flex justify-start content-start gap-1 p-2 bg-neutral-100">
                <td className="pr-7">
                  <Link href={"/latihan/python_tuples4#metode_count"}>
                    <code className="px-2 py-1 rounded-md bg-neutral-200">
                      count()
                    </code>
                  </Link>
                </td>
                <td>Menghitung jumlah suatu data dalam satu tuple.</td>
              </tr>
            </tbody>
            <tr className="flex justify-start content-start gap-1 p-2">
              <td className="pr-7">
                <Link href={"/latihan/python_tuples4#metode_index"}>
                  <code className="px-2 py-1 rounded-md bg-neutral-200">
                    index()
                  </code>
                </Link>
              </td>
              <td>Mengambil urutan/posisi data tertentu dalam tuple.</td>
            </tr>
          </table>
        </div>
        <p className="py-2 pl-1 pt-4">
          Atau kalian juga bisa mengubahnya menjadi sebuah list, mengupdate
          data, dan mengubahnya menjadi tuple kembali seperti contoh di bawah
          ini.
        </p>
        <div className="bg-neutral-200 p-2 rounded-md">
          <code>
            tuple1 &#61; &#40;
            <span className="text-orange-700">&#34;apel&#34;</span>,{" "}
            <span className="text-orange-700">&#34;jeruk&#34;</span>,{" "}
            <span className="text-orange-700">&#34;pisang&#34;</span>&#41;
          </code>
          <br />
          <code>
            x &#61; <span className="text-violet-800">list</span>
            &#40;tuple1&#41;
          </code>
          <br />
          <code>
            x.append&#40;
            <span className="text-orange-700">&#34;salak&#34;</span>&#41;
          </code>
          <br />
          <code>
            {" "}
            tuple1 &#61; <span className="text-violet-800">tuple</span>
            &#40;x&#41;
            <br />
          </code>
          <br />
          <code>
            <span className="text-violet-800">print</span>&#40;tuple1&#41;
          </code>
        </div>
        <div className="pl-1 pt-5">
          Uji coba beberapa kode diatas dengan salin ke dalam{" "}
          <Link href={"../uji_kode"} className="underline text-blue-500">
            terminal
          </Link>{" "}
          ini.
        </div>
        <hr
          className="my-8 h-0.5 border-t-0 bg-neutral-200 opacity-100"
          id="metode_count"
        />

        {/* Metode count() */}
        <div className="flex flex-col pl-1">
          <div className="text-lg font-medium">Metode count( )</div>
          <div className="pt-1">
            Metode count( ) digunakan untuk menghitung jumlah kemunculan data
            tertentu dalam sebuah tuple.
          </div>
          <div className="pt-3">
            Metode count( ) dapat digunakan dengan mengetikkan{" "}
            <code className="px-2 py-1 rounded-md bg-neutral-200">
              <i>namaTuple.</i>count(<i>data</i>)
            </code>{" "}
          </div>
        </div>
        <div className="pt-6">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>tuple1 = (1, 4, 3, 4, 1, 9, 4, 6)</code>
              <br />
              <code>x = tuple.count(4)</code>
              <br />
              <code>
                <span className="text-violet-800">print</span>(x)
              </code>
            </div>
          </div>
        </div>
        <hr
          className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100"
          id="metode_index"
        />

        {/* Metode index() */}
        <div className="flex flex-col pl-1">
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
                <code>tuple1 = (1, 4, 3, 4, 1, 9, 4, 6)</code>
                <br />
                <code>x = tuple1.index(4)</code>
                <br />
                <code>
                  <span className="text-violet-800">print</span>(x)
                </code>
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
            <h3 className="flex gap-2">
              <Link
                href={"/latihan/python_tuples3"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/python_tuples5"}
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

export default PythonTuples4;
