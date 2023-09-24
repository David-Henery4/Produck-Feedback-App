"use client";
import Link from "next/link";
import {
  EmptyFeedbackSection,
  FeedbackBox,
} from "@/components/list-components";
import { useDispatch, useSelector } from "react-redux";
import { sortProductRequests } from "@/redux/features/prodReqsSlice";
import { useEffect } from "react";

const FeedbackListSection = () => {
  const dispatch = useDispatch();
  const { placeholderRequests } = useSelector(
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
    <section className="mt-8 col-start-2 col-end-12 grid gap-4 tab:mt-6 lap:col-start-4 lap:col-end-5 lap:row-start-2 lap:row-end-5">
      {placeholderRequests?.length <= 0 ? (
        <EmptyFeedbackSection />
      ) : (
        <>
          {placeholderRequests?.map((tData) => {
            return (
              <Link key={tData?.id} href={`/feedback-detail/${tData?.id}`}>
                <FeedbackBox {...tData} />
              </Link>
            );
          })}
        </>
      )}
    </section>
  );
};

export default FeedbackListSection;
