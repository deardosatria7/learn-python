import Link from "next/link";
import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Footer from "@/sections/Footer";
import {useRouter} from "next/router";

const PythonList6 = () => {
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
        <div className="text-2xl font-semibold">Python List</div>
        <div className="py-3 pl-1">
          Berikut adalah beberapa metode lainnya yang dapat kita lakukan untuk
          mengolah data dalam list:
        </div>

        {/* Metode copy() */}
        <div className="flex flex-col pl-1">
          <div className="text-lg font-medium" id="metode_copy">
            Metode copy( )
          </div>
          <div className="pt-1">
            Metode copy( ) digunakan dalam membuat salinan list yang sama persis
            dengan list asalnya.
          </div>
          <div className="pt-3">
            Metode copy( ) dapat digunakan dengan format{" "}
            <code className="px-2 py-1 rounded-md bg-neutral-200">
              <i>namaList.</i>copy()
            </code>{" "}
          </div>
        </div>
        <div className="pt-6">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                mobil = [&#34;Fiat&#34;, &#34;BMW&#34;, &#34;Toyota&#34;]
              </code>
              <br />
              <code>x = mobil.copy()</code>
              <br />
              <code>print(x)</code>
            </div>
          </div>
        </div>
        <hr
          className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100"
          id="metode_count"
        />

        {/* Metode count() */}
        <div className="flex flex-col pl-1">
          <div className="text-lg font-medium">Metode count( )</div>
          <div className="pt-1">
            Metode count( ) digunakan untuk menghitung jumlah kemunculan data
            tertentu dalam sebuah list.
          </div>
          <div className="pt-3">
            Metode count( ) dapat digunakan dengan mengetikkan{" "}
            <code className="px-2 py-1 rounded-md bg-neutral-200">
              <i>namaList.</i>count(<i>data</i>)
            </code>{" "}
          </div>
        </div>
        <div className="pt-6">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>list1 = [1, 4, 3, 4, 1, 9, 4, 6]</code>
              <br />
              <code>x = list1.count(4)</code>
              <br />
              <code>print(x)</code>
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
            dalam sebuah list.
          </div>
          <div className="pt-3">
            Metode index( ) dapat digunakan dengan mengetikkan{" "}
            <code className="px-2 py-1 rounded-md bg-neutral-200">
              <i>namaList.</i>index(<i>data</i>)
            </code>{" "}
          </div>
          <div className="pt-6">
            <div className="flex flex-col">
              <div className="bg-neutral-200 p-2 rounded-md">
                <code>list1 = [1, 4, 3, 4, 1, 9, 4, 6]</code>
                <br />
                <code>x = list1.index(4)</code>
                <br />
                <code>print(x)</code>
              </div>
              <div className="pt-4">
                Apabila terdapat lebih dari satu data yang sama, maka index()
                akan mengembalikan posisi data yang pertama kali muncul.
              </div>
            </div>
          </div>
        </div>
        <hr
          className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100"
          id="metode_reverse"
        />

        {/* Metode reverse() */}
        <div className="flex flex-col pl-1">
          <div className="text-lg font-medium">Metode reverse( )</div>
          <div className="pt-1">
            Metode reverse( ) digunakan untuk membalik posisi urutan seluruh
            data dalam sebuah list.
          </div>
          <div className="pt-3">
            Metode index( ) dapat digunakan dengan mengetikkan{" "}
            <code className="px-2 py-1 rounded-md bg-neutral-200">
              <i>namaList.</i>reverse()
            </code>{" "}
          </div>
          <div className="pt-6">
            <div className="flex flex-col">
              <div className="bg-neutral-200 p-2 rounded-md">
                <code>
                  buah = [&#34;apel&#34;, &#34;pisang&#34;, &#34;jeruk&#34;]
                </code>
                <br />
                <code>buah.reverse()</code>
                <br />
                <code>print(buah)</code>
              </div>
            </div>
          </div>
        </div>
        <hr
          className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100"
          id="metode_sort"
        />

        {/* Metode sort() */}
        <div className="flex flex-col pl-1">
          <div className="text-lg font-medium">Metode sort( )</div>
          <div className="pt-1">
            Metode sort( ) digunakan untuk memberikan aturan sortir data di
            dalam sebuah list (dengan default kecil-besar).
          </div>
          <div className="pt-3">
            Terdapat dua parameter yang dapat digunakan dalam sort(), yaitu{" "}
            <i>reverse</i> dan <i>key</i>. Reverse berfungsi untuk membalik
            urutan menjadi besar-kecil. Key berfungsi untuk mendefinisikan
            aturan sortir tersendiri.
          </div>
          <div className="pt-3">
            Metode index( ) dapat digunakan dengan mengetikkan{" "}
            <code className="px-2 py-1 rounded-md bg-neutral-200">
              <i>namaList.</i>sort(<i>parameter</i>)
            </code>{" "}
          </div>
          <div className="pt-6">
            <div className="flex flex-col">
              <div className="bg-neutral-200 p-2 rounded-md">
                <code>
                  buah = [&#34;apel&#34;, &#34;pisang&#34;, &#34;jeruk&#34;]
                </code>
                <br />
                <code>buah.sort(reverse=True)</code>
                <br />
                <code>print(buah)</code>
              </div>
              <div className="pt-1 italic">
                Contoh sort() dengan parameter reverse.
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex flex-col">
              <div className="bg-neutral-200 p-2 rounded-md">
                <code>def mySort(e):</code>
                <br />
                &nbsp;
                <code>return len(e)</code>
                <br />
                <br />
                <code>
                  buah = [&#34;apel&#34;, &#34;pisang&#34;, &#34;jeruk&#34;]
                </code>
                <br />
                <code>buah.sort(key=mySort)</code>
                <br />
                <code>print(buah)</code>
              </div>
              <div className="pt-1 italic">
                Contoh sort() dengan parameter key berdasarkan panjang huruf.
              </div>
            </div>
          </div>
          <div className="pt-5 pb-20">
            Uji coba beberapa kode diatas dengan salin ke dalam{" "}
            <Link href={"../uji_kode"} className="underline text-blue-500">
              terminal
            </Link>{" "}
            ini.
          </div>
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
                href={"/latihan/python_tuples"}
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

export default PythonList6;
