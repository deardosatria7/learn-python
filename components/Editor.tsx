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
              __html: `
              <py-config>
              terminal = false
              </py-config>
              <py-repl output="replOutput">
              print ("Ayo belajar Python!")
              </py-repl>`,
            }}
          />
        </div>
        <div className="pr-5 pl-5 pb-3">
          <div className="">
            <span className="font-semibold text-lg">Terminal:</span>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `<py-terminal></py-terminal>`,
            }}
          />
          <div>
            <div className="font-light text-sm pt-4">Output tambahan:</div>
            <div className="border-4 rounded-md" id="replOutput"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
