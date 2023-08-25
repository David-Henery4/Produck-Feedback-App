"use client"
import {EmptyFeedbackSection, FeedbackBox} from "@/components/list-components";
import { useSelector } from "react-redux/es/hooks/useSelector";

const FeedbackListSection = () => {
  const { placeholderRequests } = useSelector(
    (store) => store.productRequestsReducer
  )
  //
  return (
    <section className="mt-8 col-start-2 col-end-12 grid gap-4 tab:mt-6 lap:col-start-4 lap:col-end-5 lap:row-start-2 lap:row-end-5">
      {placeholderRequests?.length <= 0 ? (
        <EmptyFeedbackSection />
      ) : (
        <>
          {placeholderRequests?.map((tData) => {
            return <FeedbackBox key={tData?.id} {...tData} />;
          })}
        </>
      )}
    </section>
  );
};

export default FeedbackListSection;
