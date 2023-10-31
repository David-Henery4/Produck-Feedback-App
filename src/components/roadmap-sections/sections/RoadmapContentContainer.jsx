import { MobileColumn, DesktopColumns } from "../container-components";
import { StatusToggles } from "..";

const RoadmapContentContainer = ({ roadmapColumnData }) => {
  //
  return (
    <>
      <StatusToggles roadmapColumns={roadmapColumnData} />
      <main className="w-full col-start-2 col-end-12 mt-6 max-w-md mx-auto lgTab:max-w-[1110px] lgTab:mx-0 lgTab:mt-8 lap:mx-auto">
        <MobileColumn roadmapColumns={roadmapColumnData} />
        {/**/}
        <DesktopColumns roadmapColumns={roadmapColumnData} />
      </main>
    </>
  );
};

export default RoadmapContentContainer;
