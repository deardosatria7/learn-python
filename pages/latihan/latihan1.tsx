import Link from "next/link";

const latihan1 = () => {
  return (
    <>
      <h1>Ini adalah page latihan 1</h1>
      <h3>
        <Link href={"../"}>Back to home</Link>
      </h3>
    </>
  );
};

export default latihan1;
