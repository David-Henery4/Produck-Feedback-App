import { ColumnHeader, ColumnContainer } from "../container-components";


const RoadmapContentContainer = () => {
  return (
    <main className="col-start-2 col-end-12 mt-6">
      <div className="w-full">
        <ColumnHeader />
        <ColumnContainer />
      </div>
    </main>
  );
};

export default RoadmapContentContainer;
