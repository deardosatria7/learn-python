import Link from "next/link";

const latihan = () => {
  return (
    <>
      <h1>Ini adalah page latihan</h1>
      <h3>
        <Link href={"../"}>Back to home</Link>
      </h3>
    </>
  );
};

export default latihan;
