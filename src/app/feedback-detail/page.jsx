import { FeedbackBox } from "@/components/list-components";
import { DetailsNav, FeedbackComments } from "@/components/detail-sections";

const page = () => {
  return (
    <main className="grid grid-cols-mob smTab:grid-cols-smTab pt-6">
      <div className="w-full col-start-2 col-end-12 flex flex-col justify-start items-center gap-6 max-w-[730px] mx-auto">
        <DetailsNav />
        <FeedbackBox />
        <FeedbackComments />
      </div>
    </main>
  );
};

export default page;
