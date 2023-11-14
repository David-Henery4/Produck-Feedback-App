import { DesktopColumns } from "../container-components";

const DesktopView = ({ roadmapColumnData }) => {
  return (
    <main className="hidden w-full col-start-2 col-end-12 lgTab:block lgTab:max-w-[1110px] lgTab:mx-0 lgTab:mt-8 lap:mx-auto">
      {/**/}
      <DesktopColumns roadmapColumns={roadmapColumnData} />
    </main>
  );
};

export default DesktopView