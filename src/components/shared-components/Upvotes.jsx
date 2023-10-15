"use client"
import { ArrowUpIcon } from "public/assets/shared";
import { useDispatch, useSelector } from "react-redux";
import { addAndRemoveUpvote } from "@/redux/features/prodReqsSlice";
import { useEffect } from "react";

const Upvotes = ({
  upvotes,
  isRoadmapFeedbackBox = false,
  feedbackId,
  upvotedBy,
}) => {
  const { currentUser } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    console.log(upvotedBy)
    console.log(upvotedBy?.includes(currentUser?.username));
  }, [upvotedBy])
  //
  return (
    <div
      className={`inline-flex justify-center items-center gap-[10px] px-4  hover:cursor-pointer hover:bg-purpleShade ${
        isRoadmapFeedbackBox
          ? "py-3 rounded-[10px]"
          : "rounded-lg py-[6px] lgTab:col-start-1 lgTab:col-end-2 lgTab:flex-col lgTab:px-2 lgTab:py-3"
      } ${
        upvotedBy?.includes(currentUser?.username) ? "bg-blue" : "bg-iceWhite"
      }`}
      onClick={() => {
        dispatch(
          addAndRemoveUpvote({ feedbackId, username: currentUser?.username })
        );
      }}
    >
      <ArrowUpIcon
        className={`${
          upvotedBy?.includes(currentUser?.username) ? "stroke-white" : "stroke-blue"
        }`}
      />
      <p
        className={`text-[13px] font-bold -tracking-[0.18px]  ${
          upvotedBy?.includes(currentUser?.username)
            ? "text-white"
            : "text-lightNavy"
        }`}
      >
        {upvotes}
      </p>
    </div>
  );
};

export default Upvotes;
