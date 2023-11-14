import {
  ArrowDownIcon,
  ArrowUpIcon,
  CommentsIcon,
  ArrowLeftIcon,
} from "public/assets/shared";
import Link from "next/link";
import { Upvotes } from "@/components/shared-components";

const RoadmapFeedbackBox = ({
  title,
  status,
  category,
  upvotes,
  comments,
  id,
  description,
  upvotedBy = [],
}) => {
  return (
    <div
      className={`w-full p-8 rounded-md border-t-[6px] text-[13px] bg-white dark:bg-lightNavy text-gray dark:text-offWhite lap:min-h-[320px] ${
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
          className="font-bold capitalize text-lightNavy dark:text-white -tracking-[0.25px] hover:text-blue lap:text-lg"
          href={`/feedback-detail/${id}`}
        >
          {title}
        </Link>
        <p className="mt-1 lap:text-base">{description}</p>
      </div>

      {/* Feedback type */}
      <div className="px-4 py-[6px] rounded-lg bg-iceWhite dark:bg-navy inline-flex mt-4">
        <p className="text-blue dark:text-pink font-semibold capitalize">
          {category}
        </p>
      </div>

      {/* Upvotes & Comments Amounts */}
      <div className="flex justify-between items-center mt-4">
        <Upvotes
          upvotes={upvotes}
          isRoadmapFeedbackBox={true}
          feedbackId={id}
          upvotedBy={upvotedBy}
        />

        <div className="grid">
          <p className="inline-flex justify-center items-center gap-2 font-bold text-lightNavy dark:text-white">
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

export default RoadmapFeedbackBox;
