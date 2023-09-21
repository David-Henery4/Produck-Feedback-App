import { ArrowLeftIcon } from "public/assets/shared";
import Link from "next/link";

const TitleAndBackLink = () => {
  return (
    <div className="text-white font-bold">
      <Link
        className="inline-flex justify-center items-center gap-4 text-xs lgTab:text-[14px]"
        href="/"
      >
        {" "}
        <span>
          <ArrowLeftIcon />
        </span>{" "}
        Go Back
      </Link>
      <h1 className="text-lg lgTab:text-2xl">Roadmap</h1>
    </div>
  );
};

export default TitleAndBackLink;
