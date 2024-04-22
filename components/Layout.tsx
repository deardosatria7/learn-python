import Head from "next/head";
import {Analytics} from "@vercel/analytics/react";

const Layout = ({children}: any) => {
  return (
    <>
      <Head>
        <title>Belajar python</title>
        <link rel="icon" type="image/png" href="../favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Website belajar python gratis dengan built-in-compiler Python"
        />
        <meta name="keywords" content="belajar, python, gratis, indonesia" />
      </Head>
      <section>{children}</section>
    </>
  );
};

export default Layout;
