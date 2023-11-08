import {FeedbackBarSection, FeedbackListSection, NavSection} from "@/components"
import getFeedbackList from "@/lib/getFeedbackList";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const {data} = await getFeedbackList()
  // const session = await getServerSession(options);
  // console.log("response session", session);
  //
  return (
    <main className="grid grid-cols-mob auto-rows-min min-h-[100svh] overflow-x-hidden overflow-y-clip pb-14 max-w-[1110px] mx-auto smTab:grid-cols-smTab lgTab:pt-14 lgTab:pb-28 lap:grid-cols-lap">
      <NavSection />
      <FeedbackBarSection />
      <FeedbackListSection feedBackList={data} />
    </main>
  );
}
