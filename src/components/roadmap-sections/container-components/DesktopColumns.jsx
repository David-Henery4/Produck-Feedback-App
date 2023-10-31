import { ColumnHeader, ColumnContainer } from ".";

const DesktopColumns = ({ roadmapColumns }) => {
  return (
    <div className="hidden lgTab:flex justify-between items-start gap-[10px] lap:gap-[30px]">
      {roadmapColumns.map((col, i) => {
        return (
          <div key={col.id} className="w-full">
            <ColumnHeader {...col} />
            <ColumnContainer {...col} />
          </div>
        );
      })}
    </div>
  );
};

export default DesktopColumns