const Editor = () => {
  return (
    <>
      <div>
        <div className="pt-5 pr-5 pl-5 pb-3">
          <div dangerouslySetInnerHTML={{__html: `<py-repl></py-repl>`}} />
        </div>
        <div className="pr-5 pl-5 pb-3">
          <div
            dangerouslySetInnerHTML={{__html: `<py-terminal></py-terminal>`}}
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
