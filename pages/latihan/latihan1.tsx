import Link from "next/link";

const latihan1 = () => {
  return (
    <>
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
