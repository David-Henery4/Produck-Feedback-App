import { ArrowDownIcon, ArrowUpIcon, CommentsIcon, ArrowLeftIcon } from "public/assets/shared";

const RoadmapFeedbackBox = () => {
  return (
    <div className="w-full p-8 rounded-md border-t-[6px] border-t-purple bg-white text-gray">
      {/* Status */}
      <div className="flex justify-start items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-purple"></div>
        <p>In Progress</p>
      </div>

      {/* Title & Feedback */}
      <div className="mt-2">
        <h3 className="font-bold text-lg text-lightNavy -tracking-[0.25px]">
          One-click portfolio generation
        </h3>
        <p className="mt-1">
          Add ability to create professional looking portfolio from profile.
        </p>
      </div>

      {/* Feedback type */}
      <div className="px-4 py-[6px] rounded-lg bg-iceWhite inline-flex mt-4">
        <p className="text-blue font-semibold">Feature</p>
      </div>

      {/* Upvotes & Comments Amounts */}
      <div className="flex justify-between items-center mt-4">
        <div className="px-4 py-3 bg-iceWhite rounded-lg">
          <p className="inline-flex justify-center items-baseline gap-2 font-bold text-[13px]">
            <span>
              <ArrowUpIcon className="stroke-purple fill-none"/>
            </span>{" "}
            62
          </p>
        </div>

        <div className="grid">
          <p className="inline-flex justify-center items-center gap-2 font-bold text-[13px]">
            <span>
              <CommentsIcon />
            </span>{" "}
            1
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoadmapFeedbackBox