import Header from "@/sections/Header";

const list_materi = () => {
  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-white">Belajar-Python</h4>
        </div>
      </Header>
      <main>
        <div className="p-4">
          <div className="text-2xl font-semibold">List Materi:</div>
          <div>
            <ol type="1">
              <li>Pendahuluan</li>
              <li>Variabel</li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
};

export default list_materi;
