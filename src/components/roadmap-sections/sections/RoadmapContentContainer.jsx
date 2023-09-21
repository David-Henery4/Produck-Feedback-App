import { ColumnHeader, ColumnContainer } from "../container-components";

const RoadmapContentContainer = () => {
  return (
    <main className="w-full col-start-2 col-end-12 flex justify-between items-center gap-[10px] mt-6 max-w-md mx-auto lgTab:max-w-[1110px] lgTab:mx-0 lgTab:mt-8 lap:mx-auto lap:gap-[30px]">
      <div className="w-full">
        <ColumnHeader />
        <ColumnContainer />
      </div>
      {/* JUST FOR NOW, WILL BE DIFFERENT WHEN FUNCTIONAL */}
      {/* Temp style: hidden lgTab:block */}
      <div className="w-full hidden lgTab:block">
        <ColumnHeader />
        <ColumnContainer />
      </div>
      <div className="w-full hidden lgTab:block">
        <ColumnHeader />
        <ColumnContainer />
      </div>
    </main>
  );
};

export default RoadmapContentContainer;
