import { useDispatch } from "react-redux";
import updateFeedback from "@/lib/updateFeedback";
import { useParams, useRouter } from "next/navigation";

const ReplyToComment = ({
  replyData,
  setReplyData,
  commentIdAndOgCommentId: { id, ogCommentId },
  setIsReplyActive,
  replyValidation: { isContentInvalid, setIsContentInvalid },
  comments,
}) => {
  const params = useParams();
  const router = useRouter()
  const dispatch = useDispatch();
  //
  const handleReply = async () => {
    let newComments;
    if (!ogCommentId) {
      newComments = addReply(id, comments, replyData);
    }
    if (ogCommentId) {
      newComments = addReply(ogCommentId, comments, replyData);
    }
    await updateFeedback(params?.id, {comments: newComments})
    router.refresh()
  };
  //
  const addReply = (id, activeComments, replyData) => {
    return activeComments.map((item) => {
      if (item.id === id) {
        item = {
          ...item,
          replies: item?.replies
            ? [...item?.replies, replyData]
            : [replyData],
        };
      }
      return item;
    });
  };
  //
  return (
    <button
      className="w-full px-6 py-3 rounded-xl text-white bg-purple dark:bg-blue hover:bg-pink dark:hover:bg-blueShade active:bg-purple lgTab:flex-1 lgTab:self-start"
      onClick={() => {
        if (replyData?.content.trim() !== "") {
          setIsContentInvalid(false)
          handleReply();
          setIsReplyActive(false);
          setReplyData((oldValues) => {
            return {
              ...oldValues,
              id: +new Date(),
              content: "",
            };
          });
        }
        if (replyData?.content.trim() === "") {
          setIsContentInvalid(true);
        }
      }}
    >
      Post Reply
    </button>
  );
};

export default ReplyToComment;

