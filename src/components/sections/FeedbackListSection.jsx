"use client";
import {
  EmptyFeedbackSection,
  FeedbackBox,
} from "@/components/list-components";
import { useDispatch, useSelector } from "react-redux";
import { sortProductRequests } from "@/redux/features/prodReqsSlice";
import { useEffect } from "react";

const FeedbackListSection = () => {
  const dispatch = useDispatch();
  const { currentlyDisplayed } = useSelector(
    (store) => store.productRequestsReducer
  );
  //
  const { currentSortData } = useSelector((store) => store.sortReducer);
  //
  useEffect(() => {
    dispatch(sortProductRequests(currentSortData));
  }, [currentSortData]);
  //
  return (
    <section className="mt-8 col-start-2 col-end-12 grid gap-4 content-start tab:mt-6 lap:col-start-4 lap:col-end-5 lap:row-start-2 lap:row-end-5">
      {currentlyDisplayed?.length <= 0 ? (
        <EmptyFeedbackSection />
      ) : (
        <>
          {currentlyDisplayed?.map((tData) => {
            return <FeedbackBox key={tData?.id} {...tData} isMainList={true} />;
          })}
        </>
      )}
    </section>
  );
};

export default FeedbackListSection;
