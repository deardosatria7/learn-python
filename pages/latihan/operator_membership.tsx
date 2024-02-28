import Header from "@/sections/Header";
import Link from "next/link";
import Footer from "@/sections/Footer";

const code =
  'keranjang = ["apel", "jeruk"] \n\nprint("apel" in keranjang) #True \nprint("jambu" in keranjang) #False';
// Function copy code button
function copyCode() {
  navigator.clipboard.writeText(code);
}

const pageOperator5 = () => {
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
        <h1 className="text-2xl font-semibold">Operator Python</h1>
        <p className="pt-3 pl-1">
          Berikutnya kita akan belajar <b>Operator Membership</b>.
        </p>
        <p className="pt-3 pl-1">
          Seperti namanya, operator ini berfungsi dalam melakukan pengecekan
          terhadap keanggotaan dalam sebuah kumpulan data. Operator ini terdiri
          dari:
        </p>
        <div className="pt-3 pl-1">
          <b>in</b>: Bernilai <i>True</i> apabila data yang dicek berada dalam
          kumpulan data.
          <br />
          <b>not in</b>: Bernilai <i>True</i> apabila data yang diperiksa tidak
          ada dalam kumpulan data.
          <br />
        </div>
        <div className="pt-3 pl-1">
          Coba jalankan kode dibawah ini dalam{" "}
          <Link href="../uji_kode" className="text-blue-700 underline">
            terminal
          </Link>{" "}
          agar lebih memahami konsep operator membership.
        </div>
        <div className="ml-1 mt-4 px-4 py-1 pb-6 mb-24 rounded-md bg-neutral-200">
          <div className="pt-2 text-sm sm:text-md">
            <code>
              <span className="text-orange-600">
                #Contoh operator membership python
              </span>
              <br />
              keranjang &#61; &#91;
              <span className="text-orange-700">&#34;apel&#34;</span>,
              <span className="text-orange-700">&#34;jeruk&#34;</span>
              &#93;
              <br />
              <br />
              <span className="text-violet-700">print</span>
              &#40;
              <span className="text-orange-700">&#34;apel&#34;</span>{" "}
              <span className="text-violet-700">in</span> keranjang&#41; &nbsp;
              <span className="text-orange-700">#True</span>
              <br />
              <span className="text-violet-700">print</span>
              &#40;
              <span className="text-orange-700">&#34;jambu&#34;</span>{" "}
              <span className="text-violet-700">in</span> keranjang&#41; &nbsp;
              <span className="text-orange-700">#False</span>
              <br />
            </code>
          </div>
          <div className="mt-6">
            <button
              className="bg-blue-600 hover:bg-blue-500 rounded-md text-white px-2 py-1"
              onClick={copyCode}
            >
              Salin kode
            </button>
          </div>
        </div>
      </section>

      <Footer>
        <div className="flex flex-row">
          <div>
            <h3 className="flex gap-2">
              <Link
                href={"/latihan/operator_logika"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/operator_bitwise"}
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

export default pageOperator5;
