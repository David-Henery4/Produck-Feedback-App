"use client"
import { ArrowUpIcon } from "public/assets/shared";
import { useDispatch, useSelector } from "react-redux";
import { addAndRemoveUpvote } from "@/redux/features/prodReqsSlice";
import updateFeedback from "@/lib/updateFeedback";
import { useRouter } from "next/navigation";


const Upvotes = ({
  upvotes,
  isRoadmapFeedbackBox = false,
  feedbackId,
  upvotedBy,
}) => {
  const router = useRouter()
  const { currentUser } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  //
  const handleUpvote = async () => {
    let newUpvotes
    let newList
    //
    if (upvotedBy?.includes(currentUser?.username)) {
      newUpvotes = upvotes -= 1;
      newList = upvotedBy.filter(
        (item) => item !== currentUser?.username
      );
    } else {
      newUpvotes = upvotes += 1;
      newList = [...(upvotedBy || []), currentUser?.username];
    }
    //
    const res = await updateFeedback(feedbackId, { upvotes : newUpvotes, upvotedBy: newList});
    router.refresh()
    console.log(res)
  }
  console.log(upvotedBy)
  console.log(upvotes)
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
        // dispatch(
        //   addAndRemoveUpvote({ feedbackId, username: currentUser?.username })
        // );
        handleUpvote()
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

// QUICK LOGIC

// if (activeFeedback.upvotedBy?.includes(username)) {
//   activeFeedback.upvotes -= 1;
//   activeFeedback.upvotedBy = activeFeedback.upvotedBy.filter(
//     (item) => item !== username
//   );
// } else {
//   activeFeedback.upvotes += 1;
//   activeFeedback.upvotedBy = [...(activeFeedback.upvotedBy || []), username];
// }
