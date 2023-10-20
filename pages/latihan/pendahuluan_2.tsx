import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";
import Footer from "@/sections/Footer";

//function to check answers
function checkAnswers() {
  //third box answer
  const harga = (document.getElementById("harga") as HTMLInputElement).value;

  //show btn_selanjutnya when answer is correct
  function showDiv() {
    (
      document.getElementById("btn_selanjutnya") as HTMLInputElement
    ).style.visibility = "visible";
  }

  //checking
  if (harga == "harga") {
    alert("Benar!!");
    showDiv();
  } else {
    alert("Oops, coba lagi!");
  }
}
const pagePendahuluan2 = () => {
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
        <h1 className="text-2xl font-semibold">Pendahuluan</h1>
        <p className="pt-3 pl-1">
          &ldquo;harga&rdquo; yang telah kalian buat tadi disebut dengan
          variabel. Kita dapat menyimpan data dalam bentuk variabel untuk
          kemudian dapat digunakan ulang dalam operasi lainnya.
        </p>
        <p className="pt-3 pl-1">
          Coba masukkan variabel <b>harga</b> pada operasi penghitungan{" "}
          <b>setengah_harga</b> di bawah ini dan jalankan kodenya!
        </p>
        <p className="pt-3 pl-1 text-sm">
          Catatan: <br />
          <code className="px-1 rounded-md bg-neutral-200">print</code>{" "}
          digunakan untuk menampilkan teks ke terminal output.
        </p>
        <div className="mt-4 gap-2 bg-neutral-200 p-4 rounded-md">
          <div className="flex flex-row gap-2">
            <code>
              <input
                type="text"
                id="variabel"
                className="w-32"
                value={"setengah_harga"}
              />
            </code>
            <code>
              <input type="text" id="operator" className="w-6" value={"="} />
            </code>
            <code>
              <input type="text" id="harga" className="w-20" autoFocus />
            </code>
            <div className="pl-3">
              <span> / 2</span>
            </div>
          </div>
          <div className="pt-3">
            <button
              className="px-2 bg-white rounded-md border-2 border-black"
              onClick={checkAnswers}
            >
              Submit
            </button>
          </div>
        </div>
        <Editor>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              harga = 250

              #Masukkan variabel harga di bagian bawah ini
              setengah_harga = harga / 2
              
              print ("Harga setelah diskon 50% jadi Rp", setengah_harga)
              </py-repl>`,
            }}
          />
        </Editor>
      </section>

      <Footer>
        <div className="flex flex-row">
          <div>
            <h3 className="flex gap-2">
              <Link
                href={"/latihan/pendahuluan_1"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/variabel_string"}
                className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md invisible"
                id="btn_selanjutnya"
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

export default pagePendahuluan2;
