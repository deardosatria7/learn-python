import Head from "next/head";

const Editor = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pyscript.net/latest/pyscript.css"
        />
        <script defer src="https://pyscript.net/latest/pyscript.js"></script>
      </Head>
      <div>
        <div className="pt-5 pr-5 pl-5 pb-3">
          <div
            dangerouslySetInnerHTML={{
              __html: `<py-config>terminal = false </py-config><py-repl>print ("Hello World!")</py-repl>`,
            }}
          />
        </div>
        <div className="pr-5 pl-5 pb-3">
          <div
            dangerouslySetInnerHTML={{
              __html: `<py-terminal></py-terminal>`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
