import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";
import Footer from "@/sections/Footer";

const code = "print(10**2) \nprint(10//3)";
// Function copy code button
function copyCode() {
  navigator.clipboard.writeText(code);
}

const pageOperator = () => {
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
          Selamat! Kalian telah mempelajari tipe-tipe variabel dalam python.
        </p>
        <p className="pt-3 pl-1">
          Selanjutnya adalah materi mengenai operator dalam python. Di dalam
          python, ada beberapa operator yang dapat dimasukkan kedalam kode.
          Contohnya adalah <b>Operator Aritmatika</b>. Beberapa operator
          aritmatika termasuk penjumlahan, pengurangan, perkalian, pembagian,
          dan perpangkatan.
        </p>
        <div className="pt-3 pl-1">
          <li>Penjumlahan (+)</li>
          <li>Pengurangan (-)</li>
          <li>Perkalian (*)</li>
          <li>Pembagian (/)</li>
          <li>Perpangkatan (**)</li>
          <li>Pembagian hasil bulat (//)</li>
        </div>
        <div className="ml-1 mt-4 px-4 py-1 pb-6 rounded-md bg-neutral-200">
          <div className="pt-2 text-sm sm:text-md">
            <code>
              <span className="text-orange-600">
                #Contoh operator aritmatika python
              </span>
              <br />
              <span className="text-violet-700">print</span>
              &#40;10&#42;&#42;2&#41;
              <br />
              <span className="text-violet-700">print</span>
              &#40;10&#47;&#47;3&#41;
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
        <div className="pt-3 pl-1">
          Coba kalian jalankan kode tersebut di{" "}
          <Link href="../uji_kode" className="text-blue-700 underline">
            terminal ini
          </Link>{" "}
          dan perhatikan mengapa hasilnya seperti itu!
        </div>
      </section>

      <Footer>
        <div className="flex flex-row">
          <div>
            <h3 className="flex gap-2">
              <Link
                href={"/latihan/variabel_akhir"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/operator_perbandingan"}
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

export default pageOperator;
