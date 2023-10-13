import { useState } from "react";
import { ReplyToComment } from ".";
import { useSelector, useDispatch } from "react-redux";
import { addCommentReply } from "@/redux/features/prodReqsSlice";

const ReplyInput = ({ replyInfo: { id, username, ogCommentId } }) => {
  console.log(id, username, ogCommentId);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store) => store.userReducer);
  const [replyData, setReplyData] = useState({
    id: +new Date(),
    content: "",
    replyingTo: username,
    user: { ...currentUser },
  });
  return (
    <div className="w-full col-start-1 col-end-3 flex flex-col gap-4">
      <textarea
        name="reply-input"
        id="reply-input"
        className="w-full min-h-[80px] px-4 py-2 resize-none outline-none rounded-md bg-offWhite border border-blue"
        onChange={(e) => {
          setReplyData((oldValues) => {
            return {
              ...oldValues,
              content: e.target.value,
            };
          });
        }}
        value={replyData.content}
      ></textarea>
      <ReplyToComment replyData={replyData} />
    </div>
  );
};

export default ReplyInput;
