import {FeedbackBarSection, FeedbackListSection, NavSection} from "@/components"
import getFeedbackList from "@/lib/getFeedbackList";

export default async function Home() {
  const {data} = await getFeedbackList()
  // console.log(data)
  //
  return (
    <main className="grid grid-cols-mob auto-rows-min min-h-[100svh] overflow-x-hidden overflow-y-clip pb-14 max-w-[1110px] mx-auto smTab:grid-cols-smTab lgTab:pt-14 lgTab:pb-28 lap:grid-cols-lap">
      <NavSection />
      <FeedbackBarSection />
      <FeedbackListSection feedBackList={data} />
    </main>
  );
}
