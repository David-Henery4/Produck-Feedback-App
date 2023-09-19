import { ArrowLeftIcon } from "public/assets/shared";

const TitleAndBackLink = () => {
  return (
    <div className="text-white font-bold">
      <a
        className="inline-flex justify-center items-center gap-4 text-xs"
        href="#"
      >
        {" "}
        <span>
          <ArrowLeftIcon />
        </span>{" "}
        Go Back
      </a>
      <h1 className="text-lg">Roadmap</h1>
    </div>
  );
};

export default TitleAndBackLink;
