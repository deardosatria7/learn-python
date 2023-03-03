import Editor from "@/components/Editor";
import Link from "next/link";

const playground = () => {
  return (
    <>
      <main>
        <div>
          <div className="pl-5">
            <Link href={"/"}>
              <div>Back to home</div>
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
