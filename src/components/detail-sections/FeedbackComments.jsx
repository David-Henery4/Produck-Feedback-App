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
              className="w-full border-t-lightGray/25 border-t first:border-none"
              key={comment?.id}
            >
              <Comment comments={ comments } {...comment} />
              {comment?.replies && (
                <div className="w-full grid gap-6 pb-6 lgTab:pb-8 lgTab:gap-4">
                  {comment?.replies?.map((reply, i) => {
                    return (
                      <Comment
                        key={i}
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
