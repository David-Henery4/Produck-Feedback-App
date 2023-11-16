// export const dynamic = "force-dynamic";
import { FeedbackBox } from "@/components/list-components";
import {
  AddComments,
  DetailsNav,
  FeedbackComments,
} from "@/components/detail-sections";
import { ThemeInit } from "@/components";
import getSingleFeedback from "@/lib/getSingleFeedback";
// import getFeedbackList from "@/lib/getFeedbackList";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import productRequests from "@/app/models/FeedbackSchema";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // Couldn't call internal api here, instead had to call db directly
  const allFeedback = await productRequests.find({});
  return allFeedback.map((item) => ({
    id: item.id.toString(),
  }));
}

const Page = async ({ params: { id } }) => {
  const session = await getServerSession(options);
  const { data: currentFeedback } = await getSingleFeedback(id);
  //
  if (!session) {
    redirect("/auth/signin");
  }
  //
  if (!currentFeedback){
    return notFound()
  }
  //
  return (
    <main className="grid grid-cols-mob smTab:grid-cols-smTab pt-6 pb-20 lgTab:pt-14 lgTab:pb-32 lap:pt-20">
      <ThemeInit />
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
