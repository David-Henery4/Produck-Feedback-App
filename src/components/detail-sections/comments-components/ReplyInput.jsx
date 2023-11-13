"use client"
import { useState } from "react";
import { ReplyToComment } from ".";
import { useSelector } from "react-redux";

const ReplyInput = ({
  replyInfo: { id, username, ogCommentId, name },
  setIsReplyActive,
  comments
}) => {
  const { currentUser } = useSelector((store) => store.userReducer);
  const [isContentInvalid, setIsContentInvalid] = useState(false);
  const [replyData, setReplyData] = useState({
    id: +new Date(),
    content: "",
    replyingTo: username || name,
    user: { ...currentUser },
  });
  //
  return (
    <div className="w-full col-start-1 col-end-3 flex flex-col gap-4 lgTab:col-start-3 lgTab:col-end-4 lgTab:flex-row">
      <div className="w-full lgTab:flex-[4]">
        <textarea
          name="reply-input"
          id="reply-input"
          className={`w-full min-h-[80px] px-4 py-2 resize-none outline-none rounded-md bg-offWhite dark:bg-navy border lgTab:flex-[4] ${
            isContentInvalid ? "border-red" : "border-blue dark:border-pink"
          }`}
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
        {isContentInvalid && (
          <p className="text-red font-medium mt-1">Can&apos;t be empty</p>
        )}
      </div>
      <ReplyToComment
        comments={comments}
        replyData={replyData}
        commentIdAndOgCommentId={{ id, ogCommentId }}
        setIsReplyActive={setIsReplyActive}
        setReplyData={setReplyData}
        replyValidation={{ isContentInvalid, setIsContentInvalid }}
      />
    </div>
  );
};

export default ReplyInput;
