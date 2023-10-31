import { RoadmapHeader,  RoadmapContentContainer, StatusToggles} from "@/components/roadmap-sections"
import getFeedbackList from "@/lib/getFeedbackList";


const RoadMap = async () => {
  const {data: feedbackList} = await getFeedbackList()
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
  console.log(handleSetRoadmapColumns())
  //
  return (
    <div className="grid grid-cols-mob pb-24 lgTab:pt-14 smTab:grid-cols-smTab">
      <RoadmapHeader roadmapColumnData={handleSetRoadmapColumns()} />
      {/* <StatusToggles /> */}
      <RoadmapContentContainer roadmapColumnData={handleSetRoadmapColumns()} />
    </div>
  );
}

export default RoadMap