import Link from "next/link";
import Header from "@/sections/Header";
import {useRouter} from "next/router";
import Footer from "@/sections/Footer";

const PythonDictionary3 = () => {
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
          Mengupdate data dalam dictionary
        </div>
        <p className="py-3 pl-1">
          Kalian dapat mengupdate data dalam dictionary dengan menggunakan cara
          seperti dibawah ini.
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                dict1 &#61; &#123; <br />
                &nbsp;<span className="text-orange-700">&#34;nama&#34;</span>
                &#58; <span className="text-orange-700">&#34;Jeffry&#34;</span>,
                <br />
                &nbsp;<span className="text-orange-700">&#34;umur&#34;</span>
                &#58; <span className="text-red-700">24</span>,
                <br />
                &nbsp;
                <span className="text-orange-700">&#34;jenis kelamin&#34;</span>
                &#58; <span className="text-red-700">&#34;laki-laki&#34;</span>
                <br />
                &#125;
              </code>
              <br />
              <br />
              <code>
                dict1&#91;
                <span className="text-orange-700">&#34;nama&#34;</span>&#93;
                &#61; <span className="text-orange-700">&#34;Afton&#34;</span>
              </code>
              <br />
              <code>
                <span className="text-violet-800">print</span>(dict1)
              </code>
            </div>
          </div>
        </div>
        <p className="py-2 pl-1 pt-6">
          Atau kalian juga bisa menggunakan metode{" "}
          <code className="px-1 rounded-sm bg-neutral-200 font-bold">
            update()
          </code>
          , yaitu metode yang mengharuskan kalian untuk menginputkan nilai key
          dan value-nya. Perhatikan contoh di bawah ini.
        </p>
        <div className="pt-3 text-sm sm:text-md">
          <div className="flex flex-col">
            <div className="bg-neutral-200 p-2 rounded-md">
              <code>
                dict1 &#61; &#123; <br />
                &nbsp;<span className="text-orange-700">&#34;nama&#34;</span>
                &#58; <span className="text-orange-700">&#34;Jeffry&#34;</span>,
                <br />
                &nbsp;<span className="text-orange-700">&#34;umur&#34;</span>
                &#58; <span className="text-red-700">24</span>,
                <br />
                &nbsp;
                <span className="text-orange-700">&#34;jenis kelamin&#34;</span>
                &#58; <span className="text-red-700">&#34;laki-laki&#34;</span>
                <br />
                &#125;
              </code>
              <br />
              <br />
              <code>
                dict1.<span className="text-violet-800">update</span>&#91;&#123;
                <span className="text-orange-700">
                  &#34;nama&#34;
                </span>&#58;{" "}
                <span className="text-orange-700">&#34;Afton&#34;</span>
                &#125;&#93;
              </code>
              <br />
              <code>
                <span className="text-violet-800">print</span>(dict1)
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
          <div className="flex gap-2">
            <Link
              href={"/latihan/python_dictionary2"}
              className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
            >
              Sebelumnya
            </Link>
            <Link
              href={"/latihan/python_dictionary4"}
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

export default PythonDictionary3;
