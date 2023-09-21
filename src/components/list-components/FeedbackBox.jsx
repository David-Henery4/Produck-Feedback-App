import { ArrowUpIcon, CommentsIcon } from "public/assets/shared";

const FeedbackBox = ({
  id = 0,
  title = "title",
  description = "description",
  category = "category",
  comments = "comments",
  upvotes = 12,
}) => {
  return (
    <div
      key={id}
      className="w-full grid justify-items-start grid-cols-feebackBox bg-white rounded-[10px] p-6 tab:py-7 tab:px-8 lgTab:items-start lgTab:grid-flow-col lgTab:gap-10 lgTab:grid-cols-feebackBoxTablet"
    >
      <div className="mb-4 col-start-1 col-end-3 lgTab:col-start-2 lgTab:col-end-3">
        <h2 className="text-[13px] font-bold text-lightNavy -tracking-[0.18px] tab:text-lg">
          {title}
        </h2>
        <p className="text-[13px] text-gray my-2 tab:text-base lgTab:mb-3 lgTab:mt-1">
          {description}
        </p>
        <span className="text-blue font-semibold text-[13px] py-[6px] px-4 bg-iceWhite rounded-[10px] capitalize">
          {category}
        </span>
      </div>

      <div className="inline-flex justify-center items-center gap-[10px] bg-iceWhite py-[6px] px-4 rounded-[10px] lgTab:col-start-1 lgTab:col-end-2 lgTab:flex-col lgTab:px-2 lgTab:py-3">
        <ArrowUpIcon className="stroke-blue" />
        <p className="text-[13px] font-bold -tracking-[0.18px] text-lightNavy">
          {upvotes}
        </p>
      </div>

      <div className="flex justify-center items-center gap-1 lgTab:col-start-3 lgTab:col-end-4 lgTab:self-center">
        <CommentsIcon />
        <p className="text-[13px] tab:text-base text-lightNavy font-bold">
          {comments ? comments?.length : 0}
        </p>
      </div>
    </div>
  );
};

export default FeedbackBox;
