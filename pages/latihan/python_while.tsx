import Link from "next/link";
import Image from "next/image";
import Header from "@/sections/Header";
import {useRouter} from "next/router";
import Footer from "@/sections/Footer";
import diagram_if from "@/public/diagram-if.jpg";

const PythonWhile = () => {
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
        <h1 className="text-2xl font-semibold">Python loop (while)</h1>
        <p className="py-3 pt-4 pl-1">
          Python <code className="font-semibold">while</code> adalah metode
          perulangan dalam python. Python akan menjalankan suatu perintah
          berulang-ulang selama kondisi yang diberikan bernilai{" "}
          <code>
            <span className="text-violet-800">True</span>.
          </code>
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                i &#61; <span className="text-red-700">0</span>
              </code>
              <br />
              <br />
              <code className="text-orange-600">#selama i kurang dari 7</code>
              <code>
                <br />
                <span className="text-violet-800">while</span> &#40;i &#60;
                7&#41;&#58;
              </code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">print</span> &#40;
                <span className="">i</span>
                &#41;
              </code>
              <br />
              &nbsp;
              <code>i += 1</code>
            </div>
          </div>
        </div>
        <div className="bg-yellow-200 p-2 mt-3 rounded-md">
          <div className="text-sm sm:text-md text-red-600">
            Jangan lupa untuk memberikan <b>penambahan nilai (i)</b> dalam
            while. Jika tidak loop while tidak akan berhenti berjalan.
          </div>
        </div>
        <div className="pl-1 pt-3">
          Uji coba kode diatas dengan salin ke dalam{" "}
          <Link href={"../uji_kode"} className="underline text-blue-500">
            terminal
          </Link>{" "}
          ini.
        </div>
        <hr className="my-8 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
        <div className="text-lg font font-semibold">
          Python <i>break</i>
        </div>
        <p className="py-2 pl-1 pt-3">
          Metode <code>break</code> dapat menghentikan proses pengulangan (loop)
          meskipun kondisi dalam while masih bernilai{" "}
          <code className="text-violet-600">True</code>.
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                i &#61; <span className="text-red-700">0</span>
              </code>
              <br />
              <br />
              <code>
                <span className="text-violet-800">while</span> &#40;i &#60;
                7&#41;&#58;
              </code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">print</span> &#40;
                <span className="">i</span>
                &#41;
              </code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">if</span> (i&#61;&#61;3)&#58;
              </code>
              <br />
              &nbsp;&nbsp;
              <code>
                <span className="text-violet-800">break</span>
              </code>
              <br />
              &nbsp;
              <code>i += 1</code>
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
        <hr className="my-8 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
        <div className="text-lg font font-semibold">
          Python <i>continue</i>
        </div>
        <p className="py-2 pl-1 pt-3">
          Metode <code>continue</code> dapat menghentikan proses yang{" "}
          <b>saat ini sedang berjalan</b> dan melanjutkan ke proses selanjutnya.
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                i &#61; <span className="text-red-700">0</span>
              </code>
              <br />
              <br />
              <code>
                <span className="text-violet-800">while</span> &#40;i &#60;
                7&#41;&#58;
              </code>
              <br />
              &nbsp;
              <code>i += 1</code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">if</span> (i&#61;&#61;3)&#58;
              </code>
              <br />
              &nbsp;&nbsp;
              <code>
                <span className="text-violet-800">continue</span>
              </code>
              <br />
              &nbsp;
              <code>
                <span className="text-violet-800">print</span> &#40;
                <span className="">i</span>
                &#41;
              </code>
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
    </>
  );
};

export default PythonWhile;
