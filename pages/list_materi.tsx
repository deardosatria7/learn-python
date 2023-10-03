import Header from "@/sections/Header";
import Link from "next/link";

const list_materi = () => {
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
              <Link href={"../latihan/pendahuluan_1"}>Pendahuluan</Link>
            </div>
            <div>
              Variabel
              <span className="text-blue-900">
                <li className="pl-2">
                  <Link href={"../latihan/variabel_1"}>Variabel integer</Link>
                </li>
                <li className="pl-2">
                  <Link href={"../latihan/variabel_1"}>Variabel float</Link>
                </li>
                <li className="pl-2">
                  <Link href={"../latihan/variabel_2"}>Variabel string</Link>
                </li>
                <li className="pl-2">
                  <Link href={"../latihan/variabel_3"}>Variabel boolean</Link>
                </li>
              </span>
            </div>
            <div>
              Operator
              <span className="text-blue-900">
                <li className="pl-2">
                  <Link href={"../latihan/operator_1"}>
                    Operator aritmatika
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href={"../latihan/operator_2"}>
                    Operator perbandingan
                  </Link>
                </li>
                <li className="pl-2">
                  <Link href={"../latihan/operator_4"}>Operator logika</Link>
                </li>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default list_materi;
