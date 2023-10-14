import { addCommentReply } from "@/redux/features/prodReqsSlice";
import { useDispatch } from "react-redux";

const ReplyToComment = ({
  replyData,
  setReplyData,
  commentIdAndOgCommentId: { id, ogCommentId },
  setIsReplyActive,
  replyValidation: { isContentInvalid, setIsContentInvalid },
}) => {
  const dispatch = useDispatch();
  //
  return (
    <button
      className="w-full px-6 py-3 rounded-xl text-white bg-purple hover:bg-pink active:bg-purple lgTab:flex-1 lgTab:self-start"
      onClick={() => {
        if (replyData?.content.trim() !== ""){
          setIsContentInvalid(false)
          dispatch(addCommentReply({ replyData, commentId: id, ogCommentId }));
          setIsReplyActive(false);
          setReplyData((oldValues) => {
            return {
              ...oldValues,
              id: +new Date(),
              content: "",
            };
          });
        }
        if (replyData?.content.trim() === ""){
          setIsContentInvalid(true);
        }
      }}
    >
      Post Reply
    </button>
  );
};

export default ReplyToComment;
