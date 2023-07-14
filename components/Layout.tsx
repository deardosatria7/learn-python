import Head from "next/head";

const Layout = ({children}: any) => {
  return (
    <>
      <Head>
        <title>Belajar python</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="p-4">{children}</section>
    </>
  );
};

export default Layout;
