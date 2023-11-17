import { ThemeInit } from "@/components";
import { IllustrationEmptyDuckIcon } from "public/assets/suggestions";
import Link from "next/link";

const NotFoundLayout = () => {
  return (
    <>
      <ThemeInit />
      <div className="h-screen grid place-items-center text-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-40 h-40 mx-auto">
            <IllustrationEmptyDuckIcon className="w-full h-full" />
          </div>
          <div>
            <h1 className="text-4xl mt-8 text-black dark:text-white">404</h1>
            <p className="text-lg my-4 text-gray dark:text-offWhite">
              The page your looking for has gone missing :(
            </p>
          </div>
          <div className="px-6 py-4 mt-2 rounded-[10px] text-white bg-blue hover:bg-blueShade dark:bg-purple dark:hover:bg-pink hover:cursor-pointer">
            <Link href="/" className="">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundLayout