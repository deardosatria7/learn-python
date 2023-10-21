import Header from "@/sections/Header";
import Link from "next/link";
import Footer from "@/sections/Footer";
import {useRouter} from "next/router";

const List_materi = () => {
  const router = useRouter();
  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-white">Belajar-Python</h4>
        </div>
      </Header>
      <main>
        <div className="p-4">
          <div className="text-2xl font-semibold">List Materi:</div>
          <div className="px-4 pt-3 grid grid-cols-1 gap-2">
            <div className="text-blue-900">
              <Link href={"../"}>Home</Link>
            </div>
            <div className="text-blue-900">
              <Link href={"../latihan/pendahuluan_1"}>Pendahuluan</Link>
            </div>
            <div>
              Variabel
              <span className="text-blue-900">
                <li className="pl-2">
                  <Link href={"../latihan/variabel_string"}>
                    Variabel string
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href={"../latihan/pendahuluan_1"}>
                    Variabel integer
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href={"../latihan/variabel_float"}>Variabel float</Link>
                </li>
                <li className="pl-2">
                  <Link href={"../latihan/variabel_boolean"}>
                    Variabel boolean
                  </Link>
                </li>
              </span>
            </div>
            <div>
              Operator
              <span className="text-blue-900">
                <li className="pl-2">
                  <Link href={"../latihan/operator_aritmatika"}>
                    Operator aritmatika
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href={"../latihan/operator_perbandingan"}>
                    Operator perbandingan
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href={"../latihan/operator_logika"}>
                    Operator logika
                  </Link>
                </li>
              </span>
            </div>
            <div>
              <span className="text-blue-900">
                <Link href={"../quiz"}>Quiz</Link>
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer>
        <div className="flex flex-row">
          <div>
            <h3 className="flex gap-2">
              <button
                onClick={() => router.back()}
                className="text-white bg-neutral-500 hover:bg-neutral-400 px-4 py-2 rounded-md"
              >
                Kembali
              </button>
            </h3>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default List_materi;
