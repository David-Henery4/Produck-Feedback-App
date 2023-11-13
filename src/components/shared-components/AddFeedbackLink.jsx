import Link from "next/link";
import { PlusIcon } from "public/assets/shared";

const AddFeedbackLink = () => {
  return (
    <Link
      className="text-sm bg-purple dark:bg-blue flex items-center gap-1 font-bold text-iceWhite px-2 py-3 rounded-[10px] hover:bg-pink dark:hover:bg-blueShade active:bg-purple dark:active:bg-blue smTab:px-4"
      href="/feedback/create"
    >
      <PlusIcon className=""/>
      Add Feedback
    </Link>
  );
};

export default AddFeedbackLink;
