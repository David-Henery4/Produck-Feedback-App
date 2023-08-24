"use client"
import { useState } from "react";
import placeholderData from "@/data/data.json";
import {EmptyFeedbackSection, FeedbackBox} from "@/components/list-components";

const FeedbackListSection = () => {
  const [tempRequestsData, setTempRequestsData] = useState(
    placeholderData?.productRequests
  );
  console.log(tempRequestsData)
  //
  return (
    <section className="mt-8 col-start-2 col-end-12 grid gap-4 tab:mt-6 lap:col-start-4 lap:col-end-5 lap:row-start-2 lap:row-end-5">
      <>
        {tempRequestsData?.map((tData) => {
          return <FeedbackBox key={tData?.id} {...tData} />;
        })}
      </>
      {/* <EmptyFeedbackSection /> */}
    </section>
  );
};

export default FeedbackListSection;
