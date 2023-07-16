import Link from "next/link";

const latihan = () => {
  return (
    <>
      <h1>Ini adalah page latihan</h1>
      <h3 className="flex flex-col">
        <Link href={"../"}>Back to home</Link>
        <Link href={"/latihan/latihan1"} className="text-blue-600">
          Ke Latihan 1
        </Link>
      </h3>
    </>
  );
};

export default latihan;
