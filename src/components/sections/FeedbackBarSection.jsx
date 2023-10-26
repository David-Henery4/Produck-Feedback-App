import { SuggestionsCount, SortContainer } from "../bar-components";
import { AddFeedbackLink } from "../shared-components";

const FeedbackBarSection = () => {
  //
  return (
    <div
      className="w-full col-start-1 col-end-13 bg-lightNavy py-2 px-6 grid grid-cols-sortBarMob gap-x-2 text-[13px] text-white smTab:px-10 lgTab:col-start-2 lgTab:col-end-12 lgTab:rounded-[10px] lgTab:px-3 lgTab:py-[14px] lap:col-start-4 lap:col-end-5 lap:row-start-1 lap:row-end-2"
    >
      <div className="relative z-20 flex items-center gap-[6px] lgTab:gap-9">
        <SuggestionsCount />
        <SortContainer/>
      </div>
      <AddFeedbackLink/>
    </div>
  );
}

export default FeedbackBarSection