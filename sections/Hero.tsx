const Hero = () => {
  return (
    <>
      <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
      <script defer src="https://pyscript.net/latest/pyscript.js"></script>
      <div className="m-10">
        <div className="">
          <py-repl></py-repl>
        </div>
        <div>
          <py-terminal></py-terminal>
        </div>
      </div>
    </>
  );
};

export default Hero;
