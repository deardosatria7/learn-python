import Link from "next/link";
import Header from "@/sections/Header";
import {useRouter} from "next/router";
import Footer from "@/sections/Footer";

const code1 =
  'dict1 = { \n "merk": "Asus", \n "model": "ROG", \n "cpu": "Intel", \n "warna": "hitam", \n "stok": 10 \n} \n\ndict1.pop("warna") \nprint(dict1)';
const code2 =
  'dict1 = { \n "merk": "Asus", \n "model": "ROG", \n "cpu": "Intel", \n "stok": 10 \n} \n\ndict1.popitem() \nprint(dict1)';

// Function copy code button
function copyCode(code: string) {
  navigator.clipboard.writeText(code);
}

const PythonDictionary5 = () => {
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
        <h1 className="text-2xl font-semibold">Python Dictionary</h1>
        <div className="text-lg font-semibold pt-3 pl-1">
          Menghapus data dalam dictionary
        </div>
        <p className="py-3 pl-1">
          Menghapus data di dalam dictionary dapat dilakukan dengan menggunakan
          metode <code className="px-1 bg-neutral-200 rounded-sm">pop()</code>.
          Metode ini akan menghilangkan key tertentu beserta dengan valuenya.
        </p>
        <div className="pt-2 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <div>
                <code>
                  dict1 &#61; &#123; <br />
                  &nbsp;<span className="text-orange-700">&#34;merk&#34;</span>
                  &#58; <span className="text-orange-700">&#34;Asus&#34;</span>,
                  <br />
                  &nbsp;<span className="text-orange-700">&#34;model&#34;</span>
                  &#58; <span className="text-orange-700">&#34;ROG&#34;</span>,
                  <br />
                  &nbsp;<span className="text-orange-700">&#34;cpu&#34;</span>
                  &#58; <span className="text-orange-700">&#34;intel&#34;</span>
                  ,
                  <br />
                  &nbsp;<span className="text-orange-700">&#34;warna&#34;</span>
                  &#58; <span className="text-orange-700">&#34;hitam&#34;</span>
                  ,
                  <br />
                  &nbsp;
                  <span className="text-orange-700">&#34;stok&#34;</span>
                  &#58; <span className="text-red-700">10</span>
                  <br />
                  &#125;
                </code>
                <br />
                <br />
                <code>
                  dict1.pop&#40;
                  <span className="text-orange-700">&#34;warna&#34;</span>&#41;
                </code>
                <br />
                <code>
                  <span className="text-violet-800">print</span>(dict1)
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
            popitem()
          </code>
          . Metode popitem digunakan untuk menghapus data pada posisi
          terakhir/data yang baru ditambahkan terakhir kedalam dictionary.
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <div>
                <code>
                  dict1 &#61; &#123; <br />
                  &nbsp;<span className="text-orange-700">&#34;merk&#34;</span>
                  &#58; <span className="text-orange-700">&#34;Asus&#34;</span>,
                  <br />
                  &nbsp;<span className="text-orange-700">&#34;model&#34;</span>
                  &#58; <span className="text-orange-700">&#34;ROG&#34;</span>,
                  <br />
                  &nbsp;<span className="text-orange-700">&#34;cpu&#34;</span>
                  &#58; <span className="text-orange-700">&#34;intel&#34;</span>
                  ,
                  <br />
                  &nbsp;
                  <span className="text-orange-700">&#34;stok&#34;</span>
                  &#58; <span className="text-red-700">10</span>
                  <br />
                  &#125;
                </code>
                <br />
                <br />
                <code>dict1.popitem()</code>
                <br />
                <code>
                  <span className="text-violet-800">print</span>(dict1)
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
        <div className="pl-1 pt-3 pb-20">
          Uji coba kode diatas dengan salin ke dalam{" "}
          <Link href={"../uji_kode"} className="underline text-blue-500">
            {" "}
            terminal
          </Link>{" "}
          ini.
        </div>
      </section>

      <Footer>
        <div className="flex flex-row">
          <div className="flex gap-2">
            <Link
              href={"/latihan/python_dictionary4"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/python_dictionary6"}
              className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
            >
              Selanjutnya
            </Link>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default PythonDictionary5;
