import { FeedbackBox } from "@/components/list-components";
import {
  AddComments,
  DetailsNav,
  FeedbackComments,
} from "@/components/detail-sections";
import { ThemeInit } from "@/components";
import getSingleFeedback from "@/lib/getSingleFeedback";

// Create ThemeInitializer component to activate theme (client component / will be non-visible/ non interactive)

const Page = async ({ params:{id} }) => {
  const {data: currentFeedback} = await getSingleFeedback(id)
  //
  return (
    <main className="grid grid-cols-mob smTab:grid-cols-smTab pt-6 pb-20 lgTab:pt-14 lgTab:pb-32 lap:pt-20">
      <ThemeInit/>
      <div className="w-full col-start-2 col-end-12 flex flex-col justify-start items-center gap-6 max-w-[730px] mx-auto">
        <DetailsNav {...currentFeedback} />
        <FeedbackBox {...currentFeedback} />
        <FeedbackComments {...currentFeedback} />
        <AddComments currentFeedback={currentFeedback} />
      </div>
    </main>
  );
};

export default Page;

// Old component imports

// "use client";
// import { useRouter } from "next/navigation";
// import { FeedbackBox } from "@/components/list-components";
// import {
//   AddComments,
//   DetailsNav,
//   FeedbackComments,
// } from "@/components/detail-sections";
// import { useDispatch, useSelector } from "react-redux";
// import { getCurrentFeedbackDetail } from "@/redux/features/prodReqsSlice";
// import { useEffect } from "react";

////////////////////////////////////////////////////////////////////

// Old component logic

  // const router = useRouter();
  // const dispatch = useDispatch();
  // const { currentFeedback, placeholderRequests } = useSelector(
  //   (store) => store?.productRequestsReducer
  // );
  // //
  // const handleGetFeedbackData = () => {
  //   if (!placeholderRequests.some((feed) => feed.id === +params.id)) {
  //     router.replace("/");
  //     return;
  //   }
  //   dispatch(getCurrentFeedbackDetail(params?.id));
  // };
  // //
  // useEffect(() => {
  //   handleGetFeedbackData();
  // }, [params]);