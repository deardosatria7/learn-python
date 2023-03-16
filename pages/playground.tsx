import Editor from "@/components/Editor";
import Link from "next/link";

const playground = () => {
  return (
    <>
      <main>
        <div>
          <div className="pl-5">
            <Link href={"/"}>
              <div>
                <span className="bg-slate-500 hover:bg-slate-600 text-white px-2 py-2 text-sm rounded-sm">
                  Kembali
                </span>
              </div>
            </Link>
          </div>
          <div>
            <Editor />
          </div>
        </div>
      </main>
    </>
  );
};

export default playground;
