import { RoadmapHeader,  RoadmapContentContainer, StatusToggles} from "@/components/roadmap-sections"
import getFeedbackList from "@/lib/getFeedbackList";
import { ThemeInit } from "@/components";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const RoadMap = async () => {
  const session = await getServerSession(options);
  const {data: feedbackList} = await getFeedbackList()
  //
  if (!session) {
    redirect("/auth/signin");
  }
  //
  const handleSetRoadmapColumns = () => {
    return [
      {
        id: 1,
        label: "planned",
        columnData: [],
        color: "border-t-orange",
        description: "Ideas prioritized for research",
      },
      {
        id: 2,
        label: "in-progress",
        columnData: [],
        color: "border-t-purple",
        description: "Currently being developed",
      },
      {
        id: 3,
        label: "live",
        columnData: [],
        color: "border-t-lightBlue",
        description: "Released features",
      },
    ].map((col) => {
      col.columnData = feedbackList.filter(
        (feed) => feed.status === col.label
      );
      return col;
    });
  }
  //
  return (
    <div className="grid grid-cols-mob pb-24 lgTab:pt-14 smTab:grid-cols-smTab">
      <ThemeInit/>
      <RoadmapHeader roadmapColumnData={handleSetRoadmapColumns()} />
      <RoadmapContentContainer roadmapColumnData={handleSetRoadmapColumns()} />
    </div>
  );
}

export default RoadMap