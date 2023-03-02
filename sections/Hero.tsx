const Hero = () => {
  return (
    <>
      <div>
        <div dangerouslySetInnerHTML={{__html: `<py-repl></py-repl>`}} />
        <div
          dangerouslySetInnerHTML={{__html: `<py-terminal></py-terminal>`}}
        />
      </div>
    </>
  );
};

export default Hero;
