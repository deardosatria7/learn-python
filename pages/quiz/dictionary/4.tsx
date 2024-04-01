import Header from "@/sections/Header";
import {RandomPageButton} from "@/components/RandomPage";
import Link from "next/link";
import Footer from "@/sections/Footer";
import {useState} from "react";
import {Router, useRouter} from "next/router";

export default function PageQuizDict4() {
  const [showSelanjutnya, setShowSelanjutnya] = useState(false);
  const router = useRouter();

  //function to check answers
  function checkAnswers() {
    //answer form
    const jawaban1 = (document.getElementById("jawaban1") as HTMLInputElement)
      .value;
    const jawaban2 = (document.getElementById("jawaban2") as HTMLInputElement)
      .value;

    //checking answer
    if (jawaban1 == '"model"' && jawaban2 == "Kijang") {
      //show btn_selanjutnya when answer is correct
      setShowSelanjutnya(true);
      alert("Benar!!");
    } else {
      alert("Oops, coba lagi!");
    }
  }

  //function to show answer
  function showHint() {
    alert('Contoh mengganti tahun: mobil["tahun"] = "2018"');
  }
  return (
    <>
      <Header>
        <div className="flex flex-row justify-start gap-4">
          <Link href={"../../list_materi"} className="md:hidden">
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
          <div className="hidden md:block md:col-span-3 md:max-h-screen md:overflow-auto md:gap-3 text-sm lg:text-base">
            <div className="grid grid-cols-1 gap-2 bg-neutral-200 p-4">
              <div>
                <span className="text-blue-900">
                  <div className="pl-2">
                    <Link href={"/quiz/variabel/1"}>Python variabel</Link>
                    <div className="ml-4">
                      <li>
                        <Link href={"/quiz/variabel/1"}>Quiz 1</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/variabel/2"}>Quiz 2</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/variabel/3"}>Quiz 3</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/variabel/4"}>Quiz 4</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/variabel/5"}>Quiz 5</Link>
                      </li>
                    </div>
                  </div>

                  <div className="pl-2 mt-3">
                    <Link href={"/quiz/operator/1"}>Python operator</Link>
                    <div className="ml-4">
                      <li>
                        <Link href={"/quiz/operator/1"}>Quiz 1</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/operator/2"}>Quiz 2</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/operator/3"}>Quiz 3</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/operator/4"}>Quiz 4</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/operator/5"}>Quiz 5</Link>
                      </li>
                    </div>
                    {/* <RandomPageButton pages={pagesQuizOperator}>
                    Quiz operator
                  </RandomPageButton> */}
                  </div>

                  <div className="pl-2 mt-3">
                    <Link href={"/quiz/list/1"}>Python list</Link>
                    <div className="ml-4">
                      <li>
                        <Link href={"/quiz/list/1"}>Quiz 1</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/list/2"}>Quiz 2</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/list/3"}>Quiz 3</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/list/4"}>Quiz 4</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/list/5"}>Quiz 5</Link>
                      </li>
                    </div>
                  </div>

                  <div className="pl-2 mt-3">
                    <Link href={"/quiz/tuples/1"}>Python tuple</Link>
                    <div className="ml-4">
                      <li>
                        <Link href={"/quiz/tuples/1"}>Quiz 1</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/tuples/2"}>Quiz 2</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/tuples/3"}>Quiz 3</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/tuples/4"}>Quiz 4</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/tuples/5"}>Quiz 5</Link>
                      </li>
                    </div>
                  </div>

                  <div className="pl-2 mt-3">
                    <Link href={"/quiz/set/1"}>Python set</Link>
                    <div className="ml-4">
                      <li>
                        <Link href={"/quiz/set/1"}>Quiz 1</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/set/2"}>Quiz 2</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/set/3"}>Quiz 3</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/set/4"}>Quiz 4</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/set/5"}>Quiz 5</Link>
                      </li>
                    </div>
                  </div>

                  <div className="pl-2 mt-3">
                    <Link href={"/quiz/dictionary/1"}>Python dictionary</Link>
                    <div className="ml-4">
                      <li>
                        <Link href={"/quiz/dictionary/1"}>Quiz 1</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/dictionary/2"}>Quiz 2</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/dictionary/3"}>Quiz 3</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/dictionary/4"} className="font-bold">
                          Quiz 4
                        </Link>
                      </li>
                    </div>
                  </div>

                  <div className="pl-2 mt-3">
                    <Link href={"/quiz/if_else/1"}>Python if ... else</Link>
                    <div className="ml-4">
                      <li>
                        <Link href={"/quiz/if_else/1"}>Quiz 1</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/if_else/2"}>Quiz 2</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/if_else/3"}>Quiz 3</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/if_else/4"}>Quiz 4</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/if_else/5"}>Quiz 5</Link>
                      </li>
                    </div>
                  </div>

                  <div className="pl-2 mt-3">
                    <Link href={"/quiz/while/1"}>Python while</Link>
                    <div className="ml-4">
                      <li>
                        <Link href={"/quiz/while/1"}>Quiz 1</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/while/2"}>Quiz 2</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/while/3"}>Quiz 3</Link>
                      </li>
                    </div>
                  </div>

                  <div className="pl-2 mt-3 mb-20">
                    <Link href={"/quiz/for/1"}>Python for</Link>
                    <div className="ml-4">
                      <li>
                        <Link href={"/quiz/for/1"}>Quiz 1</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/for/2"}>Quiz 2</Link>
                      </li>
                      <li>
                        <Link href={"/quiz/for/3"}>Quiz 3</Link>
                      </li>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 md:max-h-screen md:overflow-y-auto p-4">
            <h1 className="text-2xl font-semibold">Quiz Dictionary</h1>
            <p className="pt-3 pl-1">
              Isi form jawaban di bawah ini dengan jawaban yang benar!
            </p>
            <div className="mt-4 gap-2 bg-neutral-200 p-4 rounded-md">
              <div className="flex flex-col">
                <code className="text-sm sm:text-md">
                  mobil = &#123;
                  <br />
                  &nbsp;<span className="text-orange-700">&#34;merk&#34;</span>
                  &#58;{" "}
                  <span className="text-orange-700">&#34;Toyota&#34;</span>
                  , <br />
                  &nbsp;<span className="text-orange-700">&#34;model&#34;</span>
                  &#58;{" "}
                  <span className="text-orange-700">&#34;Avanza&#34;</span>
                  , <br />
                  &nbsp;<span className="text-orange-700">&#34;tahun&#34;</span>
                  &#58; <span className="text-orange-700">&#34;2020&#34;</span>
                  , <br />
                  &nbsp;
                  <span className="text-orange-700">&#34;warna&#34;</span>
                  &#58; <span className="text-orange-700">&#34;hitam&#34;</span>
                  <br />
                  &#125;
                </code>
                <code className="text-sm sm:text-md mt-3">
                  mobil&#91;
                  <input type="text" id="jawaban1" className="w-16" />
                  &#93; &#61; &#34;
                  <input type="text" id="jawaban2" className="w-16" />
                  &#34;
                </code>
                <p className="mt-10">
                  Coba ganti model mobil tersebut menjadi{" "}
                  <code className="text-green-700">&#34;Kijang&#34;</code>.
                </p>
              </div>
              <div className="flex mt-10">
                <button
                  className="px-3 py-1 bg-red-600 text-white rounded-md border-black"
                  onClick={checkAnswers}
                  id="submit_button"
                >
                  Submit
                </button>
                <button
                  className="ml-4 underline text-neutral-600"
                  onClick={showHint}
                >
                  Petunjuk
                </button>
              </div>
            </div>
            <div className="mt-8 hidden md:flex flex-row">
              <div>
                <div className="flex gap-2">
                  <button
                    onClick={() => router.back()}
                    className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
                  >
                    Sebelumnya
                  </button>
                  {showSelanjutnya && (
                    <Link
                      href={"../if_else/1"}
                      className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
                      id="btn_selanjutnya"
                    >
                      Selanjutnya
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="md:hidden">
        <Footer>
          <div className="flex flex-row">
            <div>
              <div className="flex gap-2">
                <button
                  onClick={() => router.back()}
                  className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
                >
                  Sebelumnya
                </button>
                {showSelanjutnya && (
                  <Link
                    href={"../if_else/1"}
                    className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
                    id="btn_selanjutnya"
                  >
                    Selanjutnya
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </>
  );
}
