import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";
import Footer from "@/sections/Footer";

const code = "print(6 & 3) \nprint(6 | 3) \nprint(6 ^ 3)";
// Function copy code button
function copyCode() {
  navigator.clipboard.writeText(code);
}

const pageOperator6 = () => {
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
          Berikutnya kita akan belajar <b>Operator Bitwise</b>.
        </p>
        <p className="pt-3 pl-1">
          Operator bitwise berfungsi sebagai operasi bilangan biner. Dalam hal
          ini, python akan mengonversi bilangan desimal yang kita inputkan
          kedalam IDE dan melakukan operasi tertentu sesuai dengan petunjuk
          dibawah ini:
        </p>
        <div className="pt-3 pl-1">
          <b>&ldquo;&&rdquo;</b> operator <b>AND</b>, set kedua bit menjadi 1
          apabila keduanya bernilai 1.
        </div>
        <div className="pt-3 pl-1">
          <b>&ldquo;|&rdquo;</b> operator <b>OR</b>, set kedua bit menjadi 1
          apabila salah satunya bernilai satu.
        </div>
        <div className="pt-3 pl-1">
          <b>&ldquo;^&rdquo;</b> operator <b>XOR</b>, set kedua bit menjadi 1
          hanya jika salah satu bitnya bernilai 1.
        </div>
        <div className="pt-3 pl-1">
          <b>&ldquo;~&rdquo;</b> operator <b>NOT</b>, membalikkan nilai dari
          semua bit.
        </div>
        <div className="pt-3 pl-1">
          <b>&ldquo;&#60;&#60;&rdquo;</b> menambahkan bit bernilai nol dari
          sebelah kanan sebanyak x.
        </div>
        <div className="pt-3 pl-1">
          <b>&ldquo;&#62;&#62;&rdquo;</b> menambahkan bit bernilai nol dari
          sebelah kiri sebanyak x.
        </div>
        <div className="pt-3 pl-1">
          Jalankan kode dibawah ini agar lebih memahami konsep operator bitwise.
        </div>
        <div className="ml-1 mt-4 px-4 py-1 pb-6 mb-24 rounded-md bg-neutral-200">
          <div className="pt-2 text-sm sm:text-md">
            <code>
              <span className="text-orange-600">
                #Contoh operator bitwise python
              </span>
              <br />
              <span className="text-violet-700">print</span>&#40;6 &#38; 3&#41;
              <br />
              &#39;&#39;&#39;
              <br />
              <span className="text-red-700">
                6 &#61; 00000110
                <br />3 &#61; 00000011
                <br />
                &#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;
                <br />2 &#61; 00000010
              </span>
              <br />
              &#39;&#39;&#39;
              <br />
              <br />
              <span className="text-violet-700">print</span>&#40;6 &#124; 3&#41;
              <br />
              &#39;&#39;&#39;
              <br />
              <span className="text-red-700">
                6 &#61; 00000110
                <br />3 &#61; 00000011
                <br />
                &#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;
                <br />7 &#61; 00000111
              </span>
              <br />
              &#39;&#39;&#39;
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
                href={"/latihan/operator_membership"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/variabel_multidata"}
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

export default pageOperator6;
