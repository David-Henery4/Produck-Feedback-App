"use client"
import { useState } from "react";
import {  ReplyInput } from ".";
import { useSelector } from "react-redux";

const Comment = ({
  id,
  content,
  comments,
  user: { name, username, image },
  replies,
  isReply,
  replyingTo = null,
  ogCommentId = null,
}) => {
  const { currentUser } = useSelector((store) => store.userReducer);
  const [isReplyActive, setIsReplyActive] = useState(false);
  //
  return (
    <div
      className={`relative group text-[13px] text-gray font-medium grid grid-cols-commentMob lgTab:grid-cols-commentTab lgTab:gap-x-0 ${
        isReply
          ? "pl-6 pb-6 gap-4 lgTab:gap-[10px] lgTab:pl-11 lgTab:py-0"
          : "py-6 gap-4 lgTab:py-8"
      }`}
    >
      {replies && (
        <div className="w-[1px] h-[130%] bg-gray/10 absolute top-[94px] left-5 hidden lgTab:block"></div>
      )}
      {isReply && (
        <div className="w-[1px] h-[130%] bg-gray/10 absolute top-0 left-0 hidden group-first:block group-first:lgTab:hidden"></div>
      )}
      {image && (
        <img
          className="w-10 h-10 rounded-full object-cover object-center"
          src={`/assets/user-images/${image}`}
          alt="Avatar of the user"
        />
      )}

      <div className="flex justify-between items-center lgTab:col-start-3 lgTab:col-end-4">
        <div>
          <h3 className="font-bold text-lightNavy">{name}</h3>
          <h4>{username}</h4>
        </div>
        {username !== currentUser?.username && (
          <button
            className="font-semibold text-blue hover:underline"
            onClick={() => setIsReplyActive(!isReplyActive)}
          >
            Reply
          </button>
        )}
      </div>

      {/* Bottom */}

      <div className="col-start-1 col-end-3 lgTab:col-start-3 lgTab:col-end-4">
        {isReply ? (
          <p className="break-words">
            <span className="text-purple font-bold">@{replyingTo}</span>{" "}
            {content}
          </p>
        ) : (
          <p className="break-words">{content}</p>
        )}
      </div>

      {isReplyActive && (
        <ReplyInput
          comments={comments}
          replyInfo={{ id, username, ogCommentId }}
          setIsReplyActive={setIsReplyActive}
        />
      )}
    </div>
  );
};

export default Comment;
