import Link from "next/link";
import { ArrowLeftIcon } from "public/assets/shared";

const GoBackBtn = ({isRoadmap = false, type = false}) => {
  return (
    <div>
      <Link
        href={type[0] === "edit" ? `/feedback-detail/${type[1]}` : "/"}
        className={`${
          isRoadmap ? "text-white" : "text-gray"
        } inline-flex justify-center items-center gap-4 text-[13px] lgTab:text-[14px] hover:underline`}
      >
        <span>
          <ArrowLeftIcon
            className={`${
              isRoadmap ? "stroke-slightWhite" : "stroke-blue"
            } stroke-2`}
          />
        </span>
        Go Back
      </Link>
    </div>
  );
};

export default GoBackBtn;
