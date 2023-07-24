import Link from "next/link";
import Header from "@/sections/Header";

const latihan1 = () => {
  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-white">Belajar-Python</h4>
        </div>
      </Header>
      <h1>Ini adalah page latihan 1</h1>
      <h3 className="flex flex-col">
        <Link href={"../"}>Back to home</Link>
        <Link href={"../latihan"} className="text-blue-600">
          Ke halaman latihan
        </Link>
      </h3>
    </>
  );
};

export default latihan1;
