import Editor from "@/components/Editor";
import Link from "next/link";
import Image from "next/image";
import tutor2 from "../public/tutorial1.png";
import tutor1 from "../public/tutorial2.png";
import Header from "@/sections/Header";

const playground = () => {
  return (
    <>
      <Header>
        <div>
          <h4 className="text-lg text-white">Belajar-Python</h4>
        </div>
      </Header>
      <main>
        <div className="pl-5 pt-5">
          <div>
            <Link href={"/"}>
              <div>
                <span className=" px-2 py-2 text-sm underline">Kembali</span>
              </div>
            </Link>
          </div>
          <div>
            <Editor />
          </div>
          <div className="pl-5 mt-20 bg-neutral-200 px-4 py-6 rounded-md">
            <div className="font-semibold text-md">
              Bagaimana cara untuk menjalankan kode?
            </div>
            <div>
              <div className="font-light text-md pt-4">
                Anda dapat menjalankan kode dengan menekan tombol segitiga hijau
                di pojok kanan editor &#40;
                <span className="italic">
                  tombol tidak terlihat hingga anda menekan/mengarahkan kursor
                  Anda ke bagian tersebut
                </span>
                &#41;.
              </div>
            </div>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex justify-center">
                <Image
                  src={tutor1}
                  layout="responsive"
                  alt=""
                  className="max-w-lg"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={tutor2}
                  layout="responsive"
                  alt=""
                  className="max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default playground;
