import Head from "next/head";

const Editor = ({children}: any) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/deardosatria7/pyscript-configuration/latest/pyscript.css"
        />
        <script defer src="https://pyscript.net/latest/pyscript.js"></script>
      </Head>
      <div>
        <div className="pt-5 pr-5 pl-5 pb-3">{children}</div>
        <div className="pr-5 pl-5 pb-3">
          <div className="">
            <span className="font-semibold text-lg">Output:</span>
          </div>
          <div
            className="pb-11 md:pb-2"
            dangerouslySetInnerHTML={{
              __html: `<py-terminal></py-terminal>`,
            }}
          />
          <div>
            <div className="font-light text-sm pt-4 hidden">
              Output tambahan:
            </div>
            <div className="border-4 rounded-md hidden" id="replOutput"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
