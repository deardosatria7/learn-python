import Head from "next/head";

const Layout = ({children}: any) => {
  return (
    <>
      <Head>
        <title>Belajar python</title>
        <link rel="icon" type="image/png" href="../favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>{children}</section>
    </>
  );
};

export default Layout;
