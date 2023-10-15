import Link from "next/link";
import { ArrowUpIcon, CommentsIcon } from "public/assets/shared";
import { Upvotes } from "@/components/shared-components";

const FeedbackBox = ({
  id = 0,
  title = "title",
  description = "description",
  category = "category",
  comments,
  upvotes = 12,
  isMainList = false,
}) => {
  return (
    <div
      key={id}
      className="w-full grid justify-items-start grid-cols-feebackBox bg-white rounded-[10px] p-6 tab:py-7 tab:px-8 lgTab:items-start lgTab:grid-flow-col lgTab:gap-10 lgTab:grid-cols-feebackBoxTablet"
    >
      <div className="mb-4 col-start-1 col-end-3 lgTab:col-start-2 lgTab:col-end-3">
        <h2
          className={`text-sm font-bold text-lightNavy -tracking-[0.18px] tab:text-lg ${
            isMainList && "hover:text-blue"
          }`}
        >
          {isMainList ? (
            <Link href={`/feedback-detail/${id}`}>{title}</Link>
          ) : (
            title
          )}
        </h2>
        <p className="text-[13px] text-gray my-2 tab:text-base lgTab:mb-3 lgTab:mt-1">
          {description}
        </p>
        <span className="text-blue font-semibold text-[13px] py-[6px] px-4 bg-iceWhite rounded-[10px] capitalize">
          {category}
        </span>
      </div>

      <Upvotes upvotes={upvotes} />

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
