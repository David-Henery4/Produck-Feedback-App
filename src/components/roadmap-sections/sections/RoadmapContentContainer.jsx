import { MobileColumn, DesktopColumns } from "../container-components";
import { StatusToggles, DesktopView, MobileView } from "..";

const RoadmapContentContainer = ({ roadmapColumnData }) => {
  //
  return (
    <>
      <MobileView roadmapColumnData={roadmapColumnData} />
      <DesktopView roadmapColumnData={roadmapColumnData} />
    </>
  );
};

export default RoadmapContentContainer;
