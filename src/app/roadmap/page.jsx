import { RoadmapHeader,  RoadmapContentContainer, StatusToggles} from "@/components/roadmap-sections"


const RoadMap = () => {
  return (
    <div className="grid grid-cols-mob pb-24 lgTab:pt-14">
      <RoadmapHeader />
      <StatusToggles/>
      <RoadmapContentContainer/>
    </div>
  );
}

export default RoadMap