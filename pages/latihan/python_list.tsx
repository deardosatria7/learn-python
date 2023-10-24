import Link from "next/link";
import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Footer from "@/sections/Footer";

const pythonList = () => {
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
        <h1 className="text-2xl font-semibold">Python List</h1>
        <p className="py-3 pl-1">
          <b>List</b> digunakan untuk menyimpan berbagai nilai dalam satu
          variabel. List ditandai dengan <b>tanda kurung braket &#91; &#93;.</b>
        </p>
        <code className="ml-1 px-2 py-1 rounded-md bg-neutral-200">
          mobil &#61; &#91;
          <span className="text-orange-700">&ldquo;Ferrari&rdquo;</span>,{" "}
          <span className="text-orange-700">&ldquo;Ford&rdquo;</span>,{" "}
          <span className="text-orange-700">&ldquo;BMW&rdquo;</span>&#93;
        </code>
        <p className="py-2 pl-1 pt-6">
          Di dalam list, tipe data yang disimpan dapat berbeda satu sama lain.
          Seperti contoh di bawah ini.
        </p>
        <code className="ml-1 px-2 py-1 rounded-md bg-neutral-200">
          list1 &#61; &#91;
          <span className="text-orange-700">&ldquo;Budi&rdquo;</span>,{" "}
          <span className="text-red-600">23</span>,{" "}
          <span className="text-blue-700">True</span>&#93;
        </code>
        <p className="py-2 pl-1 pt-6">
          Selain itu, list juga mengizinkan untuk ada dua data yang bernilai
          sama dalam sebuah list.
        </p>
        <code className="ml-1 px-2 py-1 rounded-md bg-neutral-200">
          list2 &#61; &#91;
          <span className="text-orange-700">&ldquo;BMW&rdquo;</span>,{" "}
          <span className="text-red-600">10</span>,{" "}
          <span className="text-blue-700">True</span>,{" "}
          <span className="text-red-600">10</span>&#93;
        </code>
      </section>

      <Footer>
        <div className="flex flex-row">
          <div>
            <h3 className="flex gap-2">
              <Link
                href={"/latihan/variabel_multidata"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/python_list2"}
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

export default pythonList;