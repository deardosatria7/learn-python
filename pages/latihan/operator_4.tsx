import Header from "@/sections/Header";
import Editor from "@/components/Editor";
import Link from "next/link";
import Footer from "@/sections/Footer";

const pageOperator4 = () => {
  return (
    <>
      <Header>
        <div>
          <Link href={"/"}>
            <h4 className="text-lg text-white">Belajar-Python</h4>
          </Link>
        </div>
      </Header>
      <section className="p-4">
        <h1 className="text-2xl font-semibold">Operator Python</h1>
        <p className="pt-3 pl-1">
          Selanjutnya adalah <b>Operator Logika</b>.
        </p>
        <p className="pt-3 pl-1">
          Operator logika dalam python terdiri dari <b>AND</b>, <b>OR</b>, dan{" "}
          <b>NOT</b>. Operator logika digunakan dalam{" "}
          <b>membandingkan dua/lebih pernyataan</b> dan menghasilkan nilai yang
          berbentuk boolean. Berikut adalah rincian dari ketiga operator logika
          tersebut:
        </p>
        <div className="pt-3 pl-1">
          <b>AND</b>: Bernilai <i>True</i> apabila pernyataan 1 dan 2 benar.
          Bernilai False apabila salah satunya bernilai False. <br />
          <b>OR</b>: Bernilai <i>True</i> apabila salah satu pernyataan yang
          disajikan benar. Bernilai False apabila keduanya salah. <br />
          <b>NOT</b>: Akan membalikkan apapun nilai dari pernyataan yang
          disajikan.
        </div>
        <div className="pt-3 pl-1">
          <span className="text-blue-700 italic">
            Kita akan memahami operator logika lebih lanjut pada halaman
            selanjutnya.
          </span>
        </div>
        <Editor>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              
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
                href={"/latihan/operator_3"}
                className="text-white bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md"
              >
                Sebelumnya
              </Link>
              <Link
                href={"/latihan/operator_5"}
                className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md"
              >
                Selanjutnya
              </Link>
            </h3>
          </div>
          <div className="pl-4 grid content-center">
            <Link href={"../navigation"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default pageOperator4;
