import {PlusIcon } from "public/assets/shared";

// Change to Link

const AddFeedbackLink = () => {
  return (
    <button className="text-sm bg-purple flex items-center gap-1 font-bold text-iceWhite px-2 py-3 rounded-[10px] hover:bg-pink active:bg-purple smTab:px-4">
      <PlusIcon />
      Add Feedback
    </button>
  );
};

export default AddFeedbackLink;
