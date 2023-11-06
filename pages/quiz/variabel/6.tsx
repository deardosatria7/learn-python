import Header from "@/sections/Header";
import {RandomPageButton} from "@/components/RandomPage";
import Link from "next/link";
import Footer from "@/sections/Footer";
import {useState} from "react";
import {Router, useRouter} from "next/router";

export default function PageQuizVariabel6() {
  const [showSelanjutnya, setShowSelanjutnya] = useState(false);
  const router = useRouter();

  //function to check answers
  function checkAnswers() {
    //answer form
    const jawaban_x = (document.getElementById("jawaban_x") as HTMLInputElement)
      .value;
    const input_z1 = (document.getElementById("input_z1") as HTMLInputElement)
      .value;
    const input_z2 = (document.getElementById("input_z2") as HTMLInputElement)
      .value;

    //checking answer
    if (jawaban_x == "5" && input_z1 == "x" && input_z2 == "y") {
      //show btn_selanjutnya when answer is correct
      setShowSelanjutnya(true);
      alert("Benar!!");
    } else {
      alert("Oops, coba lagi!");
    }
  }
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
        <h1 className="text-2xl font-semibold">Quiz</h1>
        <p className="pt-3 pl-1">
          Isi form jawaban di bawah ini dengan jawaban yang benar!
        </p>
        <div className="mt-4 gap-2 bg-neutral-200 p-4 rounded-md">
          <div className="flex flex-col">
            <div className="">
              <code>
                x &#61; <input type="text" id="jawaban_x" className="w-6" />
              </code>
              <br />
              <code>y &#61; 10</code>
              <br />
              <code>
                z &#61; <input type="text" id="input_z1" className="w-6" />{" "}
                &#43; <input type="text" id="input_z2" className="w-6" />
              </code>
              <br />
              <code>print(z)</code>
            </div>
            <p className="mt-6">
              Lengkapi kode diatas agar{" "}
              <code className="bg-neutral-300 px-1 text-red-600">x</code>{" "}
              bernilai 5, dan{" "}
              <code className="bg-neutral-300 px-1 text-red-600">z</code>{" "}
              bernilai x&#43;y.
            </p>
          </div>
          <div className="mt-10">
            <button
              className="px-3 py-1 bg-red-600 text-white rounded-md border-black"
              onClick={checkAnswers}
            >
              Submit
            </button>
          </div>
        </div>
      </section>

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
                  href={"../variabel/7"}
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
    </>
  );
}
