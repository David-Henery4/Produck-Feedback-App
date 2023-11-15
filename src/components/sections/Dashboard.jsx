import getFeedbackList from "@/lib/getFeedbackList";
import { getServerSession } from "next-auth";
import { NavSection, FeedbackBarSection, FeedbackListSection } from "..";
import { options } from "../../app/api/auth/[...nextauth]/options";

const Dashboard = async () => {
  const { data } = await getFeedbackList(); // Didn't work on main parent component (Home)
  const session = await getServerSession(options);
  //
  return (
    <main className="grid grid-cols-mob auto-rows-min min-h-[100svh] overflow-x-hidden overflow-y-clip pb-14 max-w-[1110px] mx-auto smTab:grid-cols-smTab lgTab:pb-28 lap:grid-cols-lap">
      <NavSection user={session} />
      <FeedbackBarSection />
      <FeedbackListSection feedBackList={data} />
    </main>
  );
};

export default Dashboard;
