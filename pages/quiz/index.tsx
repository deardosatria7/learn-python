import Header from "@/sections/Header";
import Link from "next/link";
import {RandomPageButton} from "@/components/RandomPage";
import {useRouter} from "next/router";

const pagesQuizVariabel = [
  "/quiz/variabel/1",
  "/quiz/variabel/2",
  "/quiz/variabel/3",
];

const pagesQuizOperator = [
  "/quiz/operator/1",
  "/quiz/operator/2",
  "/quiz/operator/3",
];

const Quiz = () => {
  const router = useRouter();
  return (
    <>
      <Header>
        <div className="flex flex-row justify-between">
          <Link href={"/"}>
            <h4 className="text-lg text-white">Belajar-Python</h4>
          </Link>
          <div className="pl-4 grid content-center">
            <Link href={"../list_materi"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path d="M39,29H9c-1.657,0-3-1.343-3-3v-3h36v3C42,27.657,40.657,29,39,29z"></path>
                <path
                  fill="#fff"
                  d="M39,27H9c-1.105,0-2-0.895-2-2v-3h34v3C41,26.105,40.105,27,39,27z"
                ></path>
                <path d="M39,28H9c-1.654,0-3-1.346-3-3v-3c0-0.553,0.448-1,1-1h34c0.552,0,1,0.447,1,1v3C42,26.654,40.654,28,39,28z M8,23v2	c0,0.552,0.449,1,1,1h30c0.551,0,1-0.448,1-1v-2H8z"></path>
                <path d="M39,17H9c-1.657,0-3-1.343-3-3v-3h36v3C42,15.657,40.657,17,39,17z"></path>
                <path
                  fill="#fff"
                  d="M39,15H9c-1.105,0-2-0.895-2-2v-3h34v3C41,14.105,40.105,15,39,15z"
                ></path>
                <path d="M39,16H9c-1.654,0-3-1.346-3-3v-3c0-0.553,0.448-1,1-1h34c0.552,0,1,0.447,1,1v3C42,14.654,40.654,16,39,16z M8,11v2	c0,0.552,0.449,1,1,1h30c0.551,0,1-0.448,1-1v-2H8z"></path>
                <path d="M39,41H9c-1.657,0-3-1.343-3-3v-3h36v3C42,39.657,40.657,41,39,41z"></path>
                <path
                  fill="#fff"
                  d="M39,39H9c-1.105,0-2-0.895-2-2v-3h34v3C41,38.105,40.105,39,39,39z"
                ></path>
                <path d="M39,40H9c-1.654,0-3-1.346-3-3v-3c0-0.553,0.448-1,1-1h34c0.552,0,1,0.447,1,1v3C42,38.654,40.654,40,39,40z M8,35v2	c0,0.552,0.449,1,1,1h30c0.551,0,1-0.448,1-1v-2H8z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </Header>
      <main>
        <div className="p-4">
          <div className="text-2xl font-semibold">Daftar Quiz:</div>
          <div className="px-4 pt-3 grid grid-cols-1 gap-2">
            <div>
              <span className="text-blue-900">
                <div className="pl-2">
                  <Link href={"/quiz/variabel/1"}>Quiz variabel</Link>
                  <div className="ml-4">
                    <li>
                      <Link href={"/quiz/variabel/1"}>Quiz 1</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/variabel/2"}>Quiz 2</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/variabel/3"}>Quiz 3</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/variabel/4"}>Quiz 4</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/variabel/5"}>Quiz 5</Link>
                    </li>
                  </div>
                </div>

                <div className="pl-2 mt-3">
                  <Link href={"/quiz/operator/1"}>Quiz operator</Link>
                  <div className="ml-4">
                    <li>
                      <Link href={"/quiz/operator/1"}>Quiz 1</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/operator/2"}>Quiz 2</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/operator/3"}>Quiz 3</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/operator/4"}>Quiz 4</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/operator/5"}>Quiz 5</Link>
                    </li>
                  </div>
                  {/* <RandomPageButton pages={pagesQuizOperator}>
                    Quiz operator
                  </RandomPageButton> */}
                </div>

                <div className="pl-2 mt-3">
                  <Link href={"/quiz/variabel/1"}>Quiz list</Link>
                  <div className="ml-4">
                    <li>
                      <Link href={"/quiz/list/1"}>Quiz 1</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/list/2"}>Quiz 2</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/list/3"}>Quiz 3</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/list/4"}>Quiz 4</Link>
                    </li>
                    <li>
                      <Link href={"/quiz/list/5"}>Quiz 5</Link>
                    </li>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </main>
      <div className="flex flex-row p-4">
        <div className="">
          <button
            onClick={() => router.back()}
            className="text-white bg-neutral-500 hover:bg-neutral-400 px-4 py-2 rounded-md"
          >
            Kembali
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
