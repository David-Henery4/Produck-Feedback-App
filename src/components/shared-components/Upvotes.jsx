"use client";
import { ArrowUpIcon } from "public/assets/shared";
import updateFeedback from "@/lib/updateFeedback";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Upvotes = ({
  upvotes,
  isRoadmapFeedbackBox = false,
  feedbackId,
  upvotedBy,
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  //
  const handleUpvote = async () => {
    let newUpvotes;
    let newList;
    //
    if (upvotedBy?.includes(session?.username || session?.name)) {
      newUpvotes = upvotes -= 1;
      if (session?.username){
        newList = upvotedBy.filter((item) => item !== session?.username);
      }
      if (session?.name){
        newList = upvotedBy.filter((item) => item !== session?.name);
      }
    } else {
      newUpvotes = upvotes += 1;
      newList = [
        ...(upvotedBy || []),
        session?.username || session?.name,
      ];
    }
    //
    await updateFeedback(feedbackId, {
      upvotes: newUpvotes,
      upvotedBy: newList,
    });
    router.refresh();
  };
  //
  return (
    <div
      className={`inline-flex justify-center items-center gap-[10px] px-4  hover:cursor-pointer hover:bg-purpleShade ${
        isRoadmapFeedbackBox
          ? "py-3 rounded-[10px]"
          : "rounded-lg py-[6px] lgTab:col-start-1 lgTab:col-end-2 lgTab:flex-col lgTab:px-2 lgTab:py-3"
      } ${
        upvotedBy?.includes(session?.username || session?.name)
          ? "bg-blue"
          : "bg-iceWhite"
      }`}
      onClick={() => {
        handleUpvote();
      }}
    >
      <ArrowUpIcon
        className={`${
          upvotedBy?.includes(session?.username || session?.name)
            ? "stroke-white"
            : "stroke-blue"
        }`}
      />
      <p
        className={`text-[13px] font-bold -tracking-[0.18px]  ${
          upvotedBy?.includes(session?.username || session?.name)
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

