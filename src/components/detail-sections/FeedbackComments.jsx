import { Comment } from "./comments-components";

const FeedbackComments = ({ comments }) => {
  return (
    <div className="w-full p-6 bg-white dark:bg-lightNavy rounded-xl tab:px-8 tab:pb-8">
      <h1 className="font-bold text-lg text-lightNavy dark:text-white">
        {comments ? comments?.length : 0} Comments
      </h1>

      {/* Comments */}
      <div className="w-full mt-6">
        {comments?.map((comment) => {
          return (
            <div
              className="w-full border-t-lightGray/25 border-t first:border-none"
              key={comment?.id}
            >
              <Comment
                comments={comments}
                {...comment}
                repliesLength={comment?.replies?.length}
              />
              {comment?.replies && (
                <div className="w-full grid gap-8 pb-6 lgTab:pb-8">
                  {comment?.replies?.map((reply, i, array) => {
                    return (
                      <Comment
                        key={i}
                        arrayLength={array?.length}
                        comments={comments}
                        {...reply}
                        isReply={true}
                        ogCommentId={comment.id}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackComments;
