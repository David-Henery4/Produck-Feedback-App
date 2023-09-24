
import { FeedbackBox } from "@/components/list-components";
import { AddComments, DetailsNav, FeedbackComments } from "@/components/detail-sections";

const page = ({params}) => {
  console.log(params)
  return (
    <main className="grid grid-cols-mob smTab:grid-cols-smTab pt-6 pb-20 lgTab:pt-14 lgTab:pb-32 lap:pt-20">
      <div className="w-full col-start-2 col-end-12 flex flex-col justify-start items-center gap-6 max-w-[730px] mx-auto">
        <DetailsNav />
        <FeedbackBox />
        <FeedbackComments />
        <AddComments/>
      </div>
    </main>
  );
};

export default page;
