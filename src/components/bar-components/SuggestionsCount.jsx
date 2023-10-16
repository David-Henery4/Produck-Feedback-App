"use client"
import { SuggestionsIcon } from "public/assets/suggestions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SuggestionsCount = () => {
  const [suggestionsCount,setSuggestionsCount] = useState(0)
  const { placeholderRequests } = useSelector(
    (store) => store.productRequestsReducer
  );
  //
  useEffect(() => {
  setSuggestionsCount(placeholderRequests.filter(item => item.status === "suggestion").length)
  },[placeholderRequests])
  //
  return (
    <div className="hidden justify-start items-center gap-4 font-bold text-lg lgTab:flex">
      <SuggestionsIcon />
      <p>
        <span>{suggestionsCount}</span>
        {" "}Suggestions
      </p>
    </div>
  );
};

export default SuggestionsCount;
