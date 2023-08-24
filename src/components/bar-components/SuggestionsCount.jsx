"use client"
import { SuggestionsIcon } from "public/assets/suggestions";

const SuggestionsCount = () => {
  return (
    <div className="hidden justify-start items-center gap-4 font-bold text-lg lgTab:flex">
      <SuggestionsIcon />
      <p>
        <span>6 </span>
        Suggestions
      </p>
    </div>
  );
};

export default SuggestionsCount;
