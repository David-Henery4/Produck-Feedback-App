import { avatarJackson } from "public/assets/user-images";
import { Comment } from "./comments-components";

const FeedbackComments = ({ comments }) => {
  return (
    <div className="w-full p-6 bg-white rounded-xl tab:px-8 tab:pb-8">
      <h1 className="font-bold text-lg text-lightNavy">
        {comments ? comments?.length : 0} Comments
      </h1>

      {/* Comments */}
      <div className="w-full mt-6">
        {comments?.map((comment) => {
          return (
            <div
              className="w-full relative border-t-lightGray/25 border-t first:border-none"
              key={comment?.id}
            >
              {comment?.replies && <div className="w-[1px] h-1/2 bg-gray absolute top-1/3 left-0"></div>}
              <Comment {...comment} />
              <div className="w-full grid gap-6 lgTab:gap-4">
                {comment?.replies &&
                  comment?.replies?.map((reply, i) => {
                    return <Comment key={i} {...reply} isReply={true} />;
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackComments;
