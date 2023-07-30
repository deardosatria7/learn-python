import Link from "next/link";
import Header from "@/sections/Header";

const latihan = () => {
  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-white">Belajar-Python</h4>
        </div>
      </Header>
      <section className="p-4">
        <h1 className="text-2xl font-semibold">Pengenalan Python</h1>
        <p className="pt-3 pl-1">
          Python adalah salah satu bahasa pemrograman yang dikenalkan pada tahun
          19XX oleh Guido Van Rossum.
        </p>
        <h3 className="pt-4 flex flex-col">
          <Link href={"../"}>Back to home</Link>
          <Link href={"/latihan/latihan1"} className="text-blue-600">
            Ke Latihan 1
          </Link>
        </h3>
      </section>
    </>
  );
};

export default latihan;
