const Hero = () => {
  return (
    <>
      <div>
        <div>
          <div dangerouslySetInnerHTML={{__html: `<py-repl></py-repl>`}} />
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{__html: `<py-terminal></py-terminal>`}}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
