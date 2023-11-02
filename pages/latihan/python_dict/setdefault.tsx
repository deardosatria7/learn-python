import Link from "next/link";
import Header from "@/sections/Header";
import {useRouter} from "next/router";
import Footer from "@/sections/Footer";

const PythonDictionarySetDefault = () => {
  const router = useRouter();
  return (
    <>
      <Header>
        <div className="flex flex-row justify-between">
          <Link href={"/"}>
            <h4 className="text-lg text-white">Belajar-Python</h4>
          </Link>
          <div className="pl-4 grid content-center">
            <Link href={"../../list_materi"}>
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
          Metode <code>setdefault()</code>
        </div>
        <p className="py-3 pl-1">
          Metode{" "}
          <code className="bg-neutral-200 px-1 rounded-sm">setdefault()</code>{" "}
          mengembalikan value dari sebuah key spesifik. Berikut adalah
          contohnya.
        </p>
        <div className="pt-2 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                dict1 &#61; &#123; <br />
                &nbsp;<span className="text-orange-700">&#34;merk&#34;</span>
                &#58; <span className="text-orange-700">&#34;asus&#34;</span>,
                <br />
                &nbsp;<span className="text-orange-700">&#34;model&#34;</span>
                &#58; <span className="text-orange-700">&#34;ROG&#34;</span>,
                <br />
                &nbsp;<span className="text-orange-700">&#34;cpu&#34;</span>
                &#58; <span className="text-orange-700">&#34;intel&#34;</span>,
                <br />
                &#125;
              </code>
              <br />
              <br />
              <code>
                x &#61; dict1.setdefault&#40;
                <span className="text-orange-700">&#34;merk&#34;</span>,{" "}
                <span className="text-orange-700">&#34;acer&#34;</span>
                &#41;
              </code>
              <br />
              <code>
                <span className="text-violet-800">print</span>(x)
              </code>
            </div>
          </div>
        </div>
        <p className="py-3 pl-1">
          Kode diatas akan mengembalikan nilai <i>asus</i> ke dalam variabel x.
          Namun semisal key tersebut tidak ada dalam dictionary, maka akan
          dibuat key baru dengan value yang telah ditetapkan.
        </p>
        <div className="pt-2 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                dict1 &#61; &#123; <br />
                &nbsp;<span className="text-orange-700">&#34;merk&#34;</span>
                &#58; <span className="text-orange-700">&#34;asus&#34;</span>,
                <br />
                &nbsp;<span className="text-orange-700">&#34;model&#34;</span>
                &#58; <span className="text-orange-700">&#34;ROG&#34;</span>,
                <br />
                &nbsp;<span className="text-orange-700">&#34;cpu&#34;</span>
                &#58; <span className="text-orange-700">&#34;intel&#34;</span>,
                <br />
                &#125;
              </code>
              <br />
              <br />
              <code>
                x &#61; dict1.setdefault&#40;
                <span className="text-orange-700">&#34;warna&#34;</span>,{" "}
                <span className="text-orange-700">&#34;hitam&#34;</span>
                &#41;
              </code>
              <br />
              <code>
                <span className="text-violet-800">print</span>(x)
              </code>
            </div>
          </div>
        </div>
        <div className="pl-1 pt-3 pb-20">
          Uji coba kode diatas dengan salin ke dalam{" "}
          <Link href={"../../uji_kode"} className="underline text-blue-500">
            terminal
          </Link>{" "}
          ini.
        </div>
      </section>

      <Footer>
        <div className="flex flex-row">
          <div className="flex gap-2">
            <button
              onClick={() => router.back()}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Kembali
            </button>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default PythonDictionarySetDefault;
