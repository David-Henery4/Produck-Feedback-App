import { ArrowUpIcon } from "public/assets/shared";

const Upvotes = ({upvotes, isRoadmapFeedbackBox = false}) => {
  return (
    <div
      className={`inline-flex justify-center items-center gap-[10px] bg-iceWhite px-4  hover:cursor-pointer hover:bg-purpleShade ${
        isRoadmapFeedbackBox
          ? "py-3 rounded-[10px]"
          : "rounded-lg py-[6px] lgTab:col-start-1 lgTab:col-end-2 lgTab:flex-col lgTab:px-2 lgTab:py-3"
      }`}
      onClick={() => console.log("hello")}
    >
      <ArrowUpIcon className="stroke-blue" />
      <p className="text-[13px] font-bold -tracking-[0.18px] text-lightNavy">
        {upvotes}
      </p>
    </div>
  );
};

export default Upvotes;
