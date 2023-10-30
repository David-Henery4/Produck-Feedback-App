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
      className="w-full px-6 py-3 rounded-xl text-white bg-purple hover:bg-pink active:bg-purple lgTab:flex-1 lgTab:self-start"
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

// quick logic

// import { addCommentReply } from "@/redux/features/prodReqsSlice";

// const addReply = (id, currentFeedback, replyData) => {
//   const currentComments = currentFeedback.comments.find(
//     (item) => item.id === id
//   );
//   return currentFeedback.comments.map((item) => {
//     if (item.id === currentComments.id) {
//       item = {
//         ...currentComments,
//         replies: currentComments?.replies
//           ? [...currentComments?.replies, replyData]
//           : [replyData],
//       };
//     }
//     return item;
//   });
// };

// addCommentReply: (
//       state,
//       { payload: { replyData, commentId, ogCommentId } }
//     ) => {
//       if (!ogCommentId) {
//         state.currentFeedback.comments = addReply(
//           commentId,
//           state.currentFeedback,
//           replyData
//         );
//       }
//       if (ogCommentId) {
//         state.currentFeedback.comments = addReply(
//           ogCommentId,
//           state.currentFeedback,
//           replyData
//         );
//       }
//       state.placeholderRequests = state.placeholderRequests.map((item) => {
//         if (item.id === state.currentFeedback.id) {
//           item = state.currentFeedback;
//         }
//         return item;
//       });
//       state.currentlyDisplayed = state.placeholderRequests;
//     },
