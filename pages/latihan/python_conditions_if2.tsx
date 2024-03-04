import Link from "next/link";
import Header from "@/sections/Header";
import {useRouter} from "next/router";
import Footer from "@/sections/Footer";

const code1 = 'x = 10 \ny = 200 \n\nprint("A") if (x > y) else print ("B")';
const code2 =
  'x = 10 \ny = 20 \n\nif (x > 0 and x < y): \n print("x positif kurang dari y") \nelif (x == y): \n print("x sama dengan y")';
const code3 =
  'x = 50 \n\nif (x > 10): \n print("x lebih besar dari 10") \n if(x > 20): \n  print("x juga lebih besar dari 20")';

// Function copy code button
function copyCode(code: string) {
  navigator.clipboard.writeText(code);
}

const PythonIf2 = () => {
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
          Terdapat cara lebih singkat untuk menulis pengulangan if. Perhatikan
          contoh di bawah ini.
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <div>
                <code>
                  x &#61; <span className="text-red-700">10</span> <br />y &#61;{" "}
                  <span className="text-red-700">200</span>
                </code>
                <br />
                <br />
                <code>
                  {" "}
                  <span className="text-violet-800">print</span>&#40;
                  <span className="text-orange-700">&#34;A&#34;</span>
                  &#41; <span className="text-violet-800">if</span> &#40;x &#62;
                  y&#41; <span className="text-violet-800">else</span>{" "}
                  <span className="text-violet-800">print</span>&#40;
                  <span className="text-orange-700">&#34;B&#34;</span>&#41;
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
        <p className="pl-1 pt-5">
          Metode penulisan dalam satu baris ini biasa disebut dengan{" "}
          <span className="italic font-semibold">Ternary Operators</span> atau{" "}
          <span className="italic font-semibold">Conditional Expressions.</span>
        </p>

        <p className="pl-1 mt-20">
          Kalian juga dapat menambahkan operator <b>AND</b>, <b>OR</b>, dan{" "}
          <b>NOT</b> kedalam pengulangan if. Hal ini dilakukan apabila terdapat
          dua kondisi yang harus dipenuhi dalam satu blok if. Perhatikan contoh
          dibawah.
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                x &#61; <span className="text-red-700">10</span> <br />y &#61;{" "}
                <span className="text-red-700">20</span> <br />
              </code>
              <br />
              <code>
                <span className="text-violet-800">if</span> &#40;x &#62; 0{" "}
                <span className="text-orange-700">and</span> x &#60; y&#41;&#58;
              </code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">print</span> &#40;
                <span className="text-orange-700">
                  &#34;x positif kurang dari y&#34;
                </span>
                &#41;
              </code>
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
          Kalian juga bisa memasukkan if kedalam sebuah if. Metode ini biasa
          disebut dengan{" "}
          <span className="italic font-semibold">Nested if.</span>
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <div>
                <code>
                  x &#61; <span className="text-red-700">50</span>
                </code>
                <br />
                <br />
                <code>
                  <span className="text-violet-800">if</span> &#40;x &#62;
                  10&#41;&#58;
                </code>
                <br />
                &nbsp;
                <code>
                  <span className="text-violet-800">print</span> &#40;
                  <span className="text-orange-700">
                    &#34;x lebih besar dari 10&#34;
                  </span>
                  &#41;
                </code>
                <br />
                &nbsp;
                <code>
                  <span className="text-violet-800">if</span> &#40;x &#62;
                  20&#41;&#58;
                </code>
                <br />
                &nbsp;&nbsp;
                <code>
                  <span className="text-violet-800">print</span> &#40;
                  <span className="text-orange-700">
                    &#34;x juga lebih besar dari 20&#34;
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
              <Link
                href={"/latihan/python_conditions_if"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/python_while"}
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

export default PythonIf2;
