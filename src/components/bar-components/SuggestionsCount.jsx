import { SuggestionsIcon } from "public/assets/suggestions";
import getFeedbackList from "@/lib/getFeedbackList";

const SuggestionsCount = async () => {
  //
  const res = await getFeedbackList();
  const suggestionsList = res?.data?.filter(
    (item) => item.status === "suggestion"
  ).length;
  //
  return (
    <div className="hidden justify-start items-center gap-4 font-bold text-lg lgTab:flex">
      <SuggestionsIcon />
      <p>
        <span>{suggestionsList}</span> Suggestions
      </p>
    </div>
  );
};

export default SuggestionsCount;
