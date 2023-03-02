import Head from "next/head";

const Layout = ({children}: any) => {
  return (
    <>
      <Head>
        <title>Belajar python</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://pyscript.net/latest/pyscript.css"
        />
        <script defer src="https://pyscript.net/latest/pyscript.js"></script>
      </Head>
      <section className="p-4">{children}</section>
    </>
  );
};

export default Layout;
