import { ArrowDownIcon, ArrowUpIcon, CommentsIcon, ArrowLeftIcon } from "public/assets/shared";
import Link from "next/link";

const RoadmapFeedbackBox = ({ title, status, category, upvotes, comments, color, id }) => {
  return (
    <div
      className={`w-full p-8 rounded-md border-t-[6px] text-[13px] bg-white text-gray ${
        (status === "in-progress" && "border-t-purple") ||
        (status === "planned" && "border-t-orange") ||
        (status === "live" && "border-t-lightBlue")
      }`}
    >
      {/* Status */}
      <div className="flex justify-start items-center gap-4">
        <div
          className={`w-2 h-2 rounded-full ${
            (status === "in-progress" && "bg-purple") ||
            (status === "planned" && "bg-orange") ||
            (status === "live" && "bg-lightBlue")
          }`}
        ></div>
        <p className="capitalize lap:text-base">{status}</p>
      </div>

      {/* Title & Feedback */}
      <div className="mt-2">
        <Link
          className="font-bold capitalize text-lightNavy -tracking-[0.25px] hover:text-blue lap:text-lg"
          href={`/feedback-detail/${id}`}
        >
          {title}
        </Link>
        <p className="mt-1 lap:text-base">
          Add ability to create professional looking portfolio from profile.
        </p>
      </div>

      {/* Feedback type */}
      <div className="px-4 py-[6px] rounded-lg bg-iceWhite inline-flex mt-4">
        <p className="text-blue font-semibold capitalize">{category}</p>
      </div>

      {/* Upvotes & Comments Amounts */}
      <div className="flex justify-between items-center mt-4">
        <div className="px-4 py-3 bg-iceWhite rounded-lg hover:bg-purpleShade hover:cursor-pointer">
          <p className="inline-flex justify-center items-baseline gap-2 font-bold">
            <span>
              <ArrowUpIcon className="stroke-purple fill-none" />
            </span>{" "}
            {upvotes}
          </p>
        </div>

        <div className="grid">
          <p className="inline-flex justify-center items-center gap-2 font-bold">
            <span>
              <CommentsIcon />
            </span>{" "}
            {comments?.length ? comments.length : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapFeedbackBox