"use client"
import { useSelector } from "react-redux";
import {
  EmptyFeedbackSection,
  FeedbackBox,
} from "@/components/list-components";

const FeedbackListSection = ({feedBackList}) => {
  const {currentSortData} = useSelector((store) => store.sortReducer);
  const {currentFilter} = useSelector((store) => store.filterReducer);
  //
  const handleSortItems = (list) => {
    let newList
    if (currentSortData.sortBy === "most-upvotes") {
      newList = list.sort(
        (a, b) => b.upvotes - a.upvotes
      );
    }
    if (currentSortData.sortBy === "least-upvotes") {
      newList = list.sort(
        (a, b) => a.upvotes - b.upvotes
      );
    }
    if (currentSortData.sortBy === "most-comments") {
      newList = list.sort((a, b) => {
        const commentsA = a.comments ? a.comments.length : 0;
        const commentsB = b.comments ? b.comments.length : 0;
        return commentsB - commentsA;
      });
    }
    if (currentSortData.sortBy === "least-comments") {
      newList = list.sort((a, b) => {
        const commentsA = a.comments ? a.comments.length : 0;
        const commentsB = b.comments ? b.comments.length : 0;
        return commentsA - commentsB;
      });
    }
    return currentFilter === "all"
      ? newList
      : newList.filter((feed) => feed.category === currentFilter);
  }
  //
  const sortedList = handleSortItems(feedBackList) || feedBackList
  //
  return (
    <section className="mt-8 col-start-2 col-end-12 grid gap-4 content-start tab:mt-6 lap:col-start-4 lap:col-end-5 lap:row-start-2 lap:row-end-5">
      {sortedList?.length <= 0 ? (
        <EmptyFeedbackSection />
      ) : (
        <>
          {sortedList?.map((tData) => {
            return <FeedbackBox key={tData?.id} {...tData} isMainList={true} />;
          })}
        </>
      )}
    </section>
  );
};

export default FeedbackListSection;




// OLD LOGIC FOR THIS COMPONENT

// currentlyDisplayed replaced by: feedBackList

// import { useDispatch, useSelector } from "react-redux";
// import { sortProductRequests } from "@/redux/features/prodReqsSlice";
// import { useEffect } from "react";

// (Inside component)
//   const dispatch = useDispatch();
//   const { currentlyDisplayed } = useSelector(
//     (store) => store.productRequestsReducer
//   );
//   //
//   const { currentSortData } = useSelector((store) => store.sortReducer);
//   //
//   useEffect(() => {
//     dispatch(sortProductRequests(currentSortData));
//   }, [currentSortData, currentlyDisplayed]);