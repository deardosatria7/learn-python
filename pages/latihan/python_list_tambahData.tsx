import Link from "next/link";
import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Footer from "@/sections/Footer";

const pythonList5 = () => {
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
          Pada bagian ini kita akan membahas beberapa metode untuk menambahkan
          data kedalam sebuah list:
        </div>

        {/* Metode append() */}
        <div className="flex flex-col pl-1">
          <div className="text-lg font-medium" id="metode_append">
            Metode append( )
          </div>
          <div className="pt-1">
            Metode append( ) digunakan untuk menambahkan data ke bagian paling
            belakang sebuah list.
          </div>
          <div className="pt-3">
            Metode append( ) dapat digunakan dengan mengetikkan{" "}
            <code className="px-2 py-1 rounded-md bg-neutral-200">
              <i>namaList.</i>append(
              <i>data</i>)
            </code>{" "}
          </div>
        </div>
        <div className="pt-6">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>buah = [&#34;pepaya&#34;, &#34;apel&#34;]</code>
              <br />
              <code>buah.append(&#34;jeruk&#34;)</code>
              <br />
              <code>print(buah)</code>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex flex-col">
            <div>
              Selain itu, append( ) dapat digunakan untuk menambahkan list
              kedalam list lainnya. Perhatikan contoh di bawah ini.
            </div>
            <div className="mt-3 bg-neutral-200 p-2 rounded-md">
              <code>buah = [pepaya&#34;, &#34;apel&#34;]</code>
              <br />
              <code>sayur = [&#34;wortel&#34;, &#34;sawi&#34;]</code>
              <br />
              <code>buah.append(sayur)</code>
              <br />
              <code>print(buah)</code>
            </div>
          </div>
        </div>
        <hr
          className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100"
          id="metode_insert"
        />

        {/* Metode insert() */}
        <div className="flex flex-col pl-1">
          <div className="text-lg font-medium">Metode insert( )</div>
          <div className="pt-1">
            Metode insert( ) digunakan untuk menambahkan data tertentu ke posisi
            tertentu dalam sebuah list.
          </div>
          <div className="pt-3">
            Metode insert( ) dapat digunakan dengan mengetikkan{" "}
            <code className="px-2 py-1 rounded-md bg-neutral-200">
              <i>namaList.</i>insert(<i>posisi</i>, <i>data</i>)
            </code>{" "}
          </div>
        </div>
        <div className="pt-6">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>buah = [&#34;pepaya&#34;, &#34;apel&#34;]</code>
              <br />
              <code>buah.insert(1, &#34;jeruk&#34;)</code>
              <br />
              <code>print(buah)</code>
            </div>
          </div>
        </div>
        <hr
          className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100"
          id="metode_extend"
        />

        {/* Metode extend() */}
        <div className="flex flex-col pl-1">
          <div className="text-lg font-medium">Metode extend( )</div>
          <div className="pt-1">
            Metode extend( ) digunakan untuk menambahkan seluruh data dari
            sebuah list ke list lainnya.
          </div>
          <div className="pt-3">
            Metode extend( ) dapat digunakan dengan mengetikkan{" "}
            <code className="px-2 py-1 rounded-md bg-neutral-200">
              <i>list_1.</i>extend(<i>list_2</i>)
            </code>{" "}
          </div>
        </div>
        <div className="pt-6">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>buah = [&#34;pepaya&#34;, &#34;apel&#34;]</code>
              <br />
              <code>sayur = [&#34;timun&#34;, &#34;lobak&#34;]</code>
              <br />
              <code>buah.extend(sayur)</code>
              <br />
              <code>print(buah)</code>
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
              <Link
                href={"/latihan/python_list4"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/python_list_hapusData"}
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

export default pythonList5;
